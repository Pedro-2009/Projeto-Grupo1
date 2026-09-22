import {
  Image,
  Pressable,
  ScrollView,
  Text,
  View,
} from 'react-native';

import perfilStyles from '../src/theme/perfilStyle';

export default function PerfilScreen() {
  return (
    <View style={perfilStyles.container}>
      <ScrollView
        contentContainerStyle={perfilStyles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Cabeçalho */}
        <View style={perfilStyles.header}>
          <View style={perfilStyles.profileImageContainer}>
            <Image
              source={require('../assets/images/logo.png')}
              style={perfilStyles.profileImage}
            />
          </View>

          <Text style={perfilStyles.name}>
            Usuário
          </Text>

          <Text style={perfilStyles.email}>
            usuario@email.com
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
                  Usuário
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
                  usuario@email.com
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

          <Pressable style={perfilStyles.logoutButton}>
            <Text style={perfilStyles.logoutButtonText}>
              Sair da conta
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}