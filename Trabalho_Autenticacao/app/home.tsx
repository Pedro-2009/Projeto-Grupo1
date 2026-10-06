import { useCallback, useState } from 'react';
import { useFocusEffect, useRouter } from 'expo-router';
import {
  Image,
  Pressable,
  ScrollView,
  Text,
  View,
} from 'react-native';

import homeStyles from '../src/theme/homeStyle';
import { ehAdmin, obterSessao } from '../src/database/storage';

export default function HomeScreen() {
  const router = useRouter();
  const [nome, setNome] = useState('Usuário');
  const [admin, setAdmin] = useState(false);

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
        setAdmin(ehAdmin(sessao));
      });

      return () => {
        ativo = false;
      };
    }, [router])
  );

  return (
    <View style={homeStyles.container}>
      <ScrollView
        contentContainerStyle={homeStyles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Cabeçalho */}
        <View style={homeStyles.header}>
          <View style={homeStyles.greetingContainer}>
            <Text style={homeStyles.greeting}>
              Olá!
            </Text>

            <Text style={homeStyles.userName}>
              {nome}
            </Text>
          </View>

          <Pressable
            style={homeStyles.profileButton}
            onPress={() => router.push('/perfil')}
          >
            <Image
              source={require('../assets/images/logo.png')}
              style={homeStyles.profileImage}
            />
          </Pressable>
        </View>

        {/* Destaque */}
        <View style={homeStyles.highlight}>
          <Text style={homeStyles.highlightTitle}>
            Bem-vindo ao LegacyAuth
          </Text>

          <Text style={homeStyles.highlightText}>
            Gerencie sua conta e acompanhe suas informações
            de forma simples e segura.
          </Text>
        </View>

        {/* Informações */}
        <View style={homeStyles.section}>
          <Text style={homeStyles.sectionTitle}>
            Informações
          </Text>

          <View style={homeStyles.infoContainer}>
            <View style={homeStyles.infoCard}>
              <Text style={homeStyles.infoNumber}>
                00
              </Text>

              <Text style={homeStyles.infoLabel}>
                Atividades
              </Text>
            </View>

            <View style={homeStyles.infoCard}>
              <Text style={homeStyles.infoNumber}>
                00
              </Text>

              <Text style={homeStyles.infoLabel}>
                Notificações
              </Text>
            </View>
          </View>
        </View>

        {/* Conteúdo */}
        <View style={homeStyles.section}>
          <Text style={homeStyles.sectionTitle}>
            Conteúdo
          </Text>

          <View style={homeStyles.card}>
            <View style={homeStyles.cardRow}>
              <View style={homeStyles.cardIcon}>
                <Text>✓</Text>
              </View>

              <View style={homeStyles.cardContent}>
                <Text style={homeStyles.cardTitle}>
                  Sua conta está pronta
                </Text>

                <Text style={homeStyles.cardText}>
                  Aqui aparecerão informações e conteúdos
                  relacionados à sua conta.
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* Área do administrador (cargo ID 1) */}
        {admin && (
          <View style={homeStyles.section}>
            <Text style={homeStyles.sectionTitle}>
              Administração
            </Text>

            <View style={homeStyles.card}>
              <View style={homeStyles.cardRow}>
                <View style={homeStyles.cardIcon}>
                  <Text>🛡</Text>
                </View>

                <View style={homeStyles.cardContent}>
                  <Text style={homeStyles.cardTitle}>
                    Painel do administrador
                  </Text>

                  <Text style={homeStyles.cardText}>
                    Esta área só aparece para contas com cargo de administrador.
                  </Text>
                </View>
              </View>
            </View>
          </View>
        )}

        {/* Botão */}
        <Pressable
          style={homeStyles.primaryButton}
          onPress={() => router.push('/perfil')}
        >
          <Text style={homeStyles.primaryButtonText}>
            Acessar perfil
          </Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}