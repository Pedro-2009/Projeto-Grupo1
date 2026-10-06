import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Crypto from 'expo-crypto';

import { sha256 } from './sha256';
import { CARGOS, USUARIOS_INICIAIS } from './users';

const USUARIOS_KEY = '@legacy_auth_usuarios';
const SEED_KEY = '@legacy_auth_seed_v2';
const SESSION_KEY = '@legacy_auth_sessao';
const SESSION_DURACAO_MS = 7 * 24 * 60 * 60 * 1000; // 7 dias

// ---------- helpers ----------

function normalizarEmail(email) {
  return String(email || '').trim().toLowerCase();
}

function bytesParaHex(bytes) {
  return Array.from(bytes, (b) => b.toString(16).padStart(2, '0')).join('');
}

async function gerarSalt() {
  return bytesParaHex(await Crypto.getRandomBytesAsync(16));
}

async function gerarToken() {
  return bytesParaHex(await Crypto.getRandomBytesAsync(32));
}

async function hashSenha(senha, salt) {
  const texto = `${salt}:${senha}`;

  try {
    return await Crypto.digestStringAsync(
      Crypto.CryptoDigestAlgorithm.SHA256,
      texto
    );
  } catch {
    // Web via http://IP não tem crypto.subtle:
    // usa SHA-256 em JS puro (mesmo resultado)
    return sha256(texto);
  }
}

// ---------- banco (usuários pré-cadastrados) ----------

// Copia as contas de users.js para o AsyncStorage (com senha em hash).
// Só refaz quando o conteúdo de users.js muda.
export async function inicializarBanco() {
  const assinatura = sha256(JSON.stringify(USUARIOS_INICIAIS));

  const [salva, existente] = await Promise.all([
    AsyncStorage.getItem(SEED_KEY),
    AsyncStorage.getItem(USUARIOS_KEY),
  ]);

  if (salva === assinatura && existente) return;

  const usuarios = [];

  for (const u of USUARIOS_INICIAIS) {
    const salt = await gerarSalt();

    usuarios.push({
      id: u.id,
      nome: u.nome,
      email: normalizarEmail(u.email),
      cargoId: u.cargoId,
      foto: u.foto,
      salt,
      senhaHash: await hashSenha(u.senha, salt),
    });
  }

  await AsyncStorage.setItem(
    USUARIOS_KEY,
    JSON.stringify(usuarios)
  );

  await AsyncStorage.setItem(
    SEED_KEY,
    assinatura
  );
}

async function lerUsuarios() {
  await inicializarBanco();

  const raw = await AsyncStorage.getItem(USUARIOS_KEY);

  return raw ? JSON.parse(raw) : [];
}

export async function autenticarUsuario(email, senha) {
  const usuarios = await lerUsuarios();

  const usuario = usuarios.find(
    (u) => u.email === normalizarEmail(email)
  );

  if (!usuario) {
    throw new Error('E-mail ou senha incorretos.');
  }

  const hash = await hashSenha(
    String(senha ?? ''),
    usuario.salt
  );

  if (hash !== usuario.senhaHash) {
    throw new Error('E-mail ou senha incorretos.');
  }

  return {
    id: usuario.id,
    nome: usuario.nome,
    email: usuario.email,
    cargoId: usuario.cargoId,
    foto: usuario.foto,
  };
}

// ---------- sessão ----------

export async function salvarSessao(usuario) {
  const sessao = {
    token: await gerarToken(),
    usuario,
    expiraEm: Date.now() + SESSION_DURACAO_MS,
  };

  await AsyncStorage.setItem(
    SESSION_KEY,
    JSON.stringify(sessao)
  );

  return sessao;
}

export async function obterSessao() {
  const raw = await AsyncStorage.getItem(SESSION_KEY);

  if (!raw) return null;

  const sessao = JSON.parse(raw);

  if (!sessao.expiraEm || sessao.expiraEm < Date.now()) {
    await AsyncStorage.removeItem(SESSION_KEY);
    return null;
  }

  return sessao;
}

export async function removerSessao() {
  await AsyncStorage.removeItem(SESSION_KEY);
}

// ---------- fluxos prontos ----------

export async function login(email, senha) {
  const usuario = await autenticarUsuario(email, senha);

  return salvarSessao(usuario);
}

export async function logout() {
  await removerSessao();
}

export function ehAdmin(sessao) {
  return sessao?.usuario?.cargoId === CARGOS.ADMIN;
}