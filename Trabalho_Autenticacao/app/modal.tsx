import {
  Pressable,
  Text,
  TextInput,
  View,
} from 'react-native';

import modalStyles from '../src/theme/modalStyle';
import styles from '../src/theme/style';

export default function ModalScreen() {
  return (
    <View style={modalStyles.overlay}>
      <View style={modalStyles.container}>

        {/* Ícone */}
        <View style={modalStyles.iconContainer}>
          <Text style={modalStyles.icon}>
            ✉
          </Text>
        </View>

        {/* Título */}
        <Text style={modalStyles.title}>
          Recuperar senha
        </Text>

        {/* Mensagem */}
        <Text style={modalStyles.message}>
          Digite seu e-mail para receber as instruções
          de recuperação da sua senha.
        </Text>

        {/* Campo de e-mail */}
        <TextInput
          style={styles.input}
          placeholder="Digite seu e-mail"
          placeholderTextColor={styles.secondaryText.color}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        {/* Botões */}
        <View style={modalStyles.buttonContainer}>

          <Pressable
            style={({ pressed }) => [
              modalStyles.primaryButton,
              pressed && modalStyles.primaryButtonPressed,
            ]}
          >
            <Text style={modalStyles.primaryButtonText}>
              Enviar
            </Text>
          </Pressable>

          <Pressable
            style={({ pressed }) => [
              modalStyles.secondaryButton,
              pressed && modalStyles.secondaryButtonPressed,
            ]}
          >
            <Text style={modalStyles.secondaryButtonText}>
              Cancelar
            </Text>
          </Pressable>

        </View>
      </View>
    </View>
  );
}