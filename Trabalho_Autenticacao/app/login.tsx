import { useState } from 'react';
import { useRouter } from 'expo-router';

import {
  Image,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';

import loginStyles from '../src/theme/loginStyle';
import { login } from '../src/database/storage';

export default function LoginScreen() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState('');

  async function handleSubmit() {
    try {
      setCarregando(true);
      setErro('');

      await login(email, password);
      router.replace('/home');
    } catch (error: any) {
      console.log('Erro no login:', error);
      setErro(error?.message ?? 'Algo deu errado.');
    } finally {
      setCarregando(false);
    }
  }

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
          <View style={loginStyles.field}>
            <Text style={loginStyles.label}>E-mail</Text>
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

          <View style={loginStyles.field}>
            <Text style={loginStyles.label}>Senha</Text>
            <TextInput
              style={loginStyles.input}
              placeholder="Digite sua senha"
              placeholderTextColor="#6B6780"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
          </View>

          {erro !== '' && (
            <Text style={{ color: '#E5484D', marginTop: 8, textAlign: 'center' }}>
              {erro}
            </Text>
          )}

          <Pressable
            disabled={carregando}
            onPress={handleSubmit}
            style={({ pressed }) => [
              loginStyles.button,
              pressed && loginStyles.buttonPressed,
            ]}
          >
            <Text style={loginStyles.buttonText}>
              {carregando ? 'Aguarde...' : 'Entrar'}
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