import { StyleSheet } from 'react-native';

import {
  colors,
  spacing,
  radius,
  typography,
  shadows,
} from './style';

const perfilStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  content: {
    flexGrow: 1,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.lg,
  },

  header: {
    alignItems: 'center',
    marginBottom: spacing.xl,
  },

  profileImageContainer: {
    width: 112,
    height: 112,
    borderRadius: radius.round,
    backgroundColor: colors.primarySoft,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing.md,
    overflow: 'hidden',
  },

  profileImage: {
    width: 112,
    height: 112,
    borderRadius: radius.round,
  },

  profilePlaceholder: {
    fontSize: 40,
    fontWeight: '700',
    color: colors.primary,
  },

  name: {
    fontSize: typography.title,
    fontWeight: '700',
    color: colors.text,
    textAlign: 'center',
    marginBottom: spacing.xs,
  },

  email: {
    fontSize: typography.small,
    color: colors.textSecondary,
    textAlign: 'center',
  },

  section: {
    marginBottom: spacing.lg,
  },

  sectionTitle: {
    fontSize: typography.subtitle,
    fontWeight: '700',
    color: colors.text,
    marginBottom: spacing.md,
  },

  card: {
    backgroundColor: colors.white,
    borderRadius: radius.lg,
    padding: spacing.lg,
    ...shadows.card,
  },

  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing.sm,
  },

  infoIcon: {
    width: 42,
    height: 42,
    borderRadius: radius.md,
    backgroundColor: colors.primarySoft,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: spacing.md,
  },

  infoContent: {
    flex: 1,
  },

  infoLabel: {
    fontSize: typography.caption,
    color: colors.textSecondary,
    marginBottom: spacing.xs,
  },

  infoValue: {
    fontSize: typography.body,
    fontWeight: '600',
    color: colors.text,
  },

  divider: {
    height: 1,
    backgroundColor: colors.border,
    marginVertical: spacing.sm,
  },

  button: {
    minHeight: 52,
    backgroundColor: colors.primary,
    borderRadius: radius.md,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
    marginTop: spacing.sm,
  },

  buttonPressed: {
    backgroundColor: colors.primaryDark,
  },

  buttonText: {
    fontSize: typography.body,
    fontWeight: '700',
    color: colors.white,
  },

  logoutButton: {
    minHeight: 52,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.error,
    borderRadius: radius.md,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
    marginTop: spacing.md,
  },

  logoutButtonPressed: {
    backgroundColor: colors.error,
  },

  logoutButtonText: {
    fontSize: typography.body,
    fontWeight: '700',
    color: colors.error,
  },

  logoutButtonTextPressed: {
    color: colors.white,
  },
});

export default perfilStyles;