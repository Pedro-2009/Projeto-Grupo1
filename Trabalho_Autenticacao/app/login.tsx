import { useState } from 'react';

import {
  Image,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';

// 1. CORREÇÃO: Importar o useRouter do expo-router
import { useRouter } from 'expo-router';

import loginStyles from '../src/theme/loginStyle';

export default function LoginScreen() {
  const router = useRouter(); // 2. CORREÇÃO: Inicializar o roteador
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // 3. Lógica para entrar no aplicativo
  const handleLogin = () => {
    // Aqui você faria a validação de e-mail e senha. 
    // Se estiver tudo certo, redirecionamos para a Home:
    router.replace('/home'); 
    // Usamos .replace() para apagar a tela de login do histórico.
    // Assim, se o usuário clicar em "Voltar" na Home, ele não retorna ao login.
  };

  return (
    <View style={loginStyles.container}>
      <ScrollView
        contentContainerStyle={loginStyles.content}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        {/* Cabeçalho */}
        <View style={loginStyles.header}>
          <View style={loginStyles.logoContainer}>
            <Image
              source={require('../assets/images/logo.png')}
              style={loginStyles.logo}
            />
          </View>

          <Text style={loginStyles.title}>
            Bem-vindo ao LegacyAuth
          </Text>

          <Text style={loginStyles.subtitle}>
            Entre na sua conta para continuar.
          </Text>
        </View>

        {/* Formulário */}
        <View style={loginStyles.form}>

          {/* E-mail */}
          <View style={loginStyles.field}>
            <Text style={loginStyles.label}>
              E-mail
            </Text>

            <TextInput
              style={loginStyles.input}
              placeholder="Digite seu e-mail"
              placeholderTextColor="#6B6780"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />
          </View>

          {/* Senha */}
          <View style={loginStyles.field}>
            <Text style={loginStyles.label}>
              Senha
            </Text>

            <TextInput
              style={loginStyles.input}
              placeholder="Digite sua senha"
              placeholderTextColor="#6B6780"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
          </View>

          {/* Entrar */}
          <Pressable
            onPress={handleLogin} // 4. CORREÇÃO: Adicionado evento de clique para a Home
            style={({ pressed }) => [
              loginStyles.button,
              pressed && loginStyles.buttonPressed,
            ]}
          >
            <Text style={loginStyles.buttonText}>
              Entrar
            </Text>
          </Pressable>

          {/* Recuperação */}
          <Pressable 
            onPress={() => router.push('/modal')} // 5. CORREÇÃO: Abre o modal por cima sem sumir com o login
            style={loginStyles.secondaryAction}
          >
            <Text style={loginStyles.secondaryActionText}>
              Esqueci minha senha
            </Text>
          </Pressable>
        </View>

        {/* Rodapé */}
        <View style={loginStyles.footer}>
          <Text style={loginStyles.footerText}>
            LegacyAuth • Autenticação segura
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
