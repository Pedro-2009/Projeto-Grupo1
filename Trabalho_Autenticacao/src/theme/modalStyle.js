import { StyleSheet } from 'react-native';

import {
  colors,
  spacing,
  radius,
  typography,
  shadows,
} from './style';

const modalStyles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(33, 29, 53, 0.45)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
  },

  container: {
    width: '100%',
    maxWidth: 420,
    backgroundColor: colors.white,
    borderRadius: radius.xl,
    padding: spacing.xl,
    alignItems: 'center',
    ...shadows.card,
  },

  iconContainer: {
    width: 64,
    height: 64,
    borderRadius: radius.round,
    backgroundColor: colors.primarySoft,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing.lg,
  },

  icon: {
    fontSize: 28,
    color: colors.primary,
  },

  title: {
    fontSize: typography.subtitle,
    fontWeight: '700',
    color: colors.text,
    textAlign: 'center',
    marginBottom: spacing.sm,
  },

  message: {
    fontSize: typography.body,
    color: colors.textSecondary,
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: spacing.lg,
  },

  buttonContainer: {
    width: '100%',
    marginTop: spacing.md,
  },

  primaryButton: {
    width: '100%',
    minHeight: 50,
    backgroundColor: colors.primary,
    borderRadius: radius.md,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
  },

  primaryButtonPressed: {
    backgroundColor: colors.primaryDark,
  },

  primaryButtonText: {
    fontSize: typography.body,
    fontWeight: '700',
    color: colors.white,
  },

  secondaryButton: {
    width: '100%',
    minHeight: 50,
    backgroundColor: colors.primarySoft,
    borderRadius: radius.md,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
    marginTop: spacing.sm,
  },

  secondaryButtonPressed: {
    backgroundColor: colors.border,
  },

  secondaryButtonText: {
    fontSize: typography.body,
    fontWeight: '600',
    color: colors.primary,
  },
});

export default modalStyles;