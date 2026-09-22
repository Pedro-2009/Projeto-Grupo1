import {
  Image,
  Pressable,
  ScrollView,
  Text,
  View,
} from 'react-native';

import homeStyles from '../src/theme/homeStyle';

export default function HomeScreen() {
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
              Usuário
            </Text>
          </View>

          <Pressable style={homeStyles.profileButton}>
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

        {/* Botão */}
        <Pressable style={homeStyles.primaryButton}>
          <Text style={homeStyles.primaryButtonText}>
            Acessar perfil
          </Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}