import { useCallback, useState } from 'react';
import { useFocusEffect, useRouter } from 'expo-router';
import {
  Image,
  Pressable,
  ScrollView,
  Text,
  View,
} from 'react-native';

import perfilStyles from '../src/theme/perfilStyle';
import { logout, obterSessao } from '../src/database/storage';
import { NOMES_CARGO } from '../src/database/users';

export default function PerfilScreen() {
  const router = useRouter();

  const [nome, setNome] = useState('Usuário');
  const [email, setEmail] = useState('');
  const [cargo, setCargo] = useState('');

  useFocusEffect(
    useCallback(() => {
      let ativo = true;

      obterSessao().then((sessao) => {
        if (!ativo) return;

        if (!sessao) {
          router.replace('/login');
          return;
        }

        setNome(sessao.usuario.nome);
        setEmail(sessao.usuario.email);
        setCargo(
          NOMES_CARGO[sessao.usuario.cargoId as 1 | 2] ?? 'Membro'
        );
      });

      return () => {
        ativo = false;
      };
    }, [router])
  );

  async function handleLogout() {
    await logout();
    router.replace('/login');
  }

  function handleBackHome() {
    router.replace('/home');
  }

  return (
    <View style={perfilStyles.container}>
      <ScrollView
        contentContainerStyle={perfilStyles.content}
        showsVerticalScrollIndicator={false}
      >

        {/* Botão voltar */}
        <Pressable
          style={perfilStyles.backButton}
          onPress={handleBackHome}
        >
          <Text style={perfilStyles.backButtonText}>
            ← Voltar
          </Text>
        </Pressable>

        {/* Cabeçalho */}
        <View style={perfilStyles.header}>
          <View style={perfilStyles.profileImageContainer}>
            <Image
              source={require('../assets/images/logo.png')}
              style={perfilStyles.profileImage}
            />
          </View>

          <Text style={perfilStyles.name}>
            {nome}
          </Text>

          <Text style={perfilStyles.email}>
            {email}
          </Text>
        </View>

        {/* Informações da conta */}
        <View style={perfilStyles.section}>
          <Text style={perfilStyles.sectionTitle}>
            Informações da conta
          </Text>

          <View style={perfilStyles.card}>

            {/* Nome */}
            <View style={perfilStyles.infoRow}>
              <View style={perfilStyles.infoIcon}>
                <Text>👤</Text>
              </View>

              <View style={perfilStyles.infoContent}>
                <Text style={perfilStyles.infoLabel}>
                  Nome
                </Text>

                <Text style={perfilStyles.infoValue}>
                  {nome}
                </Text>
              </View>
            </View>

            <View style={perfilStyles.divider} />

            {/* E-mail */}
            <View style={perfilStyles.infoRow}>
              <View style={perfilStyles.infoIcon}>
                <Text>✉</Text>
              </View>

              <View style={perfilStyles.infoContent}>
                <Text style={perfilStyles.infoLabel}>
                  E-mail
                </Text>

                <Text style={perfilStyles.infoValue}>
                  {email}
                </Text>
              </View>
            </View>

            <View style={perfilStyles.divider} />

            {/* Cargo */}
            <View style={perfilStyles.infoRow}>
              <View style={perfilStyles.infoIcon}>
                <Text>🛡</Text>
              </View>

              <View style={perfilStyles.infoContent}>
                <Text style={perfilStyles.infoLabel}>
                  Cargo
                </Text>

                <Text style={perfilStyles.infoValue}>
                  {cargo}
                </Text>
              </View>
            </View>

          </View>
        </View>

        {/* Ações */}
        <View style={perfilStyles.section}>

          <Pressable style={perfilStyles.button}>
            <Text style={perfilStyles.buttonText}>
              Editar perfil
            </Text>
          </Pressable>

          <Pressable
            style={perfilStyles.logoutButton}
            onPress={handleLogout}
          >
            <Text style={perfilStyles.logoutButtonText}>
              Sair da conta
            </Text>
          </Pressable>

        </View>

      </ScrollView>
    </View>
  );
}