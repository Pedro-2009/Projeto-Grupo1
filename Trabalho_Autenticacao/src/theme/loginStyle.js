import { StyleSheet } from 'react-native';

import {
  colors,
  spacing,
  radius,
  typography,
} from './style';

const loginStyles = StyleSheet.create({
  // =====================================================
  // CONTAINER PRINCIPAL
  // =====================================================

  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  content: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.xl,
  },

  // =====================================================
  // CABEÇALHO
  // =====================================================

  header: {
    alignItems: 'center',
    marginBottom: spacing.xl,
  },

  logoContainer: {
    width: 96,
    height: 96,
    borderRadius: radius.xl,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing.lg,
  },

  logo: {
    width: 68,
    height: 68,
    resizeMode: 'contain',
  },

  title: {
    fontSize: typography.title,
    fontWeight: '700',
    color: colors.text,
    textAlign: 'center',
    marginBottom: spacing.sm,
  },

  subtitle: {
    fontSize: typography.body,
    color: colors.textSecondary,
    textAlign: 'center',
    lineHeight: 22,
  },

  // =====================================================
  // FORMULÁRIO
  // =====================================================

  form: {
    width: '100%',
  },

  field: {
    marginBottom: spacing.md,
  },

  label: {
    fontSize: typography.small,
    fontWeight: '600',
    color: colors.text,
    marginBottom: spacing.sm,
  },

  input: {
    width: '100%',
    minHeight: 52,

    backgroundColor: colors.white,

    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.md,

    paddingHorizontal: spacing.md,

    fontSize: typography.body,
    color: colors.text,
  },

  inputFocused: {
    borderColor: colors.primary,
  },

  // =====================================================
  // AÇÕES
  // =====================================================

  button: {
    width: '100%',
    minHeight: 52,

    backgroundColor: colors.primary,

    borderRadius: radius.md,

    justifyContent: 'center',
    alignItems: 'center',

    marginTop: spacing.sm,
  },

  buttonPressed: {
    backgroundColor: colors.primaryDark,
  },

  buttonText: {
    color: colors.white,
    fontSize: typography.body,
    fontWeight: '700',
  },

  // =====================================================
  // TEXTOS AUXILIARES
  // =====================================================

  secondaryAction: {
    alignItems: 'center',
    marginTop: spacing.lg,
  },

  secondaryActionText: {
    fontSize: typography.small,
    color: colors.primary,
    fontWeight: '600',
  },

  // =====================================================
  // ÁREA INFERIOR
  // =====================================================

  footer: {
    alignItems: 'center',
    marginTop: spacing.xl,
  },

  footerText: {
    fontSize: typography.caption,
    color: colors.textSecondary,
    textAlign: 'center',
  },
});

export default loginStyles;