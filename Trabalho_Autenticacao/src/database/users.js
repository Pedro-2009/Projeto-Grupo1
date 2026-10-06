// Contas pré-cadastradas (não existe tela de cadastro).
// Edite aqui para trocar nomes, e-mails e senhas. Ao salvar, o banco é atualizado sozinho.

export const CARGOS = {
  ADMIN: 1,
  MEMBRO: 2,
};

export const NOMES_CARGO = {
  1: 'Administrador',
  2: 'Membro',
};

export const USUARIOS_INICIAIS = [
  { id: 1, nome: 'Admin', email: 'admin@legacyauth.com', senha: 'admin123', cargoId: CARGOS.ADMIN },
  { id: 2, nome: 'Membro', email: 'membro@legacyauth.com', senha: 'membro123', cargoId: CARGOS.MEMBRO },
  {id: 3, nome: 'Lucas Almeida', email: 'lucas@gmail.com', senha: 'lucas123', cargoId: CARGOS.MEMBRO },
  {id: 4, nome: 'Beatriz Santos', email: 'beatriz@gmail.com', senha: 'beatriz123', cargoId: CARGOS.MEMBRO},
  {id: 5, nome: 'Gabriel Oliveira', email: 'gabriel@gmail.com', senha: 'gabriel123', cargoId: CARGOS.MEMBRO},
];