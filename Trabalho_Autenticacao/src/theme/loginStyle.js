import { StyleSheet } from 'react-native';

import {
  colors,
  spacing,
  radius,
  typography,
} from './style';

const loginStyles = StyleSheet.create({
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

  header: {
    alignItems: 'center',
    marginBottom: spacing.xl,
  },

  logoContainer: {
    width: 112,
    height: 112,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing.lg,
  },

  logo: {
    width: 112,
    height: 112,
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

  secondaryAction: {
    alignItems: 'center',
    marginTop: spacing.lg,
  },

  secondaryActionText: {
    fontSize: typography.small,
    color: colors.primary,
    fontWeight: '600',
  },

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