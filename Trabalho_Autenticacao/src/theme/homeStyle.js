import { StyleSheet } from 'react-native';

import {
  colors,
  spacing,
  radius,
  typography,
  shadows,
} from './style';

const homeStyles = StyleSheet.create({
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: spacing.xl,
  },

  greetingContainer: {
    flex: 1,
    paddingRight: spacing.md,
  },

  greeting: {
    fontSize: typography.small,
    color: colors.textSecondary,
    marginBottom: spacing.xs,
  },

  userName: {
    fontSize: typography.subtitle,
    fontWeight: '700',
    color: colors.text,
  },

  profileButton: {
    width: 48,
    height: 48,
    borderRadius: radius.round,
    backgroundColor: colors.primarySoft,
    justifyContent: 'center',
    alignItems: 'center',
  },

  profileImage: {
    width: 48,
    height: 48,
    borderRadius: radius.round,
  },

  highlight: {
    backgroundColor: colors.primary,
    borderRadius: radius.xl,
    padding: spacing.lg,
    marginBottom: spacing.xl,
  },

  highlightTitle: {
    fontSize: typography.subtitle,
    fontWeight: '700',
    color: colors.white,
    marginBottom: spacing.sm,
  },

  highlightText: {
    fontSize: typography.body,
    color: colors.white,
    lineHeight: 22,
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
    marginBottom: spacing.md,
    ...shadows.card,
  },

  cardRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  cardIcon: {
    width: 48,
    height: 48,
    borderRadius: radius.md,
    backgroundColor: colors.primarySoft,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: spacing.md,
  },

  cardContent: {
    flex: 1,
  },

  cardTitle: {
    fontSize: typography.body,
    fontWeight: '700',
    color: colors.text,
    marginBottom: spacing.xs,
  },

  cardText: {
    fontSize: typography.small,
    color: colors.textSecondary,
    lineHeight: 20,
  },

  infoContainer: {
    flexDirection: 'row',
    gap: spacing.md,
    marginBottom: spacing.xl,
  },

  infoCard: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: radius.lg,
    padding: spacing.md,
    ...shadows.card,
  },

  infoNumber: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.primary,
    marginBottom: spacing.xs,
  },

  infoLabel: {
    fontSize: typography.small,
    color: colors.textSecondary,
  },

  primaryButton: {
    minHeight: 52,
    backgroundColor: colors.primary,
    borderRadius: radius.md,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
    marginTop: spacing.sm,
  },

  primaryButtonPressed: {
    backgroundColor: colors.primaryDark,
  },

  primaryButtonText: {
    fontSize: typography.body,
    fontWeight: '700',
    color: colors.white,
  },

  emptyContainer: {
    backgroundColor: colors.white,
    borderRadius: radius.lg,
    padding: spacing.xl,
    alignItems: 'center',
    justifyContent: 'center',
    ...shadows.card,
  },

  emptyTitle: {
    fontSize: typography.body,
    fontWeight: '700',
    color: colors.text,
    textAlign: 'center',
    marginBottom: spacing.sm,
  },

  emptyText: {
    fontSize: typography.small,
    color: colors.textSecondary,
    textAlign: 'center',
    lineHeight: 20,
  },
});

export default homeStyles;