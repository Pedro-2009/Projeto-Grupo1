import { useState } from 'react';

import {
  Image,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';

import loginStyles from '../src/theme/loginStyle';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
          <Pressable style={loginStyles.secondaryAction}>
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