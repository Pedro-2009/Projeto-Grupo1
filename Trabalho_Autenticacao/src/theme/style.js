import { StyleSheet } from 'react-native';

const colors = {
  primary: '#5A41DF',
  primaryDark: '#3F2BA8',
  primaryLight: '#7C68EA',
  primarySoft: '#EEECFC',

  white: '#FFFFFF',
  background: '#F8F7FC',

  text: '#211D35',
  textSecondary: '#6B6780',

  disabled: '#B8B4C8',
  border: '#E3E0EF',

  error: '#D64545',
  success: '#35A66F',
};

const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 40,
};

const radius = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  round: 999,
};

const typography = {
  title: 28,
  subtitle: 20,
  body: 16,
  small: 14,
  caption: 12,
};

const shadows = {
  card: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  card: {
    backgroundColor: colors.white,
    borderRadius: radius.lg,
    padding: spacing.lg,
    ...shadows.card,
  },

  title: {
    fontSize: typography.title,
    fontWeight: '700',
    color: colors.text,
  },

  subtitle: {
    fontSize: typography.subtitle,
    fontWeight: '600',
    color: colors.text,
  },

  text: {
    fontSize: typography.body,
    color: colors.text,
  },

  secondaryText: {
    fontSize: typography.small,
    color: colors.textSecondary,
  },

  primaryButton: {
    backgroundColor: colors.primary,
    minHeight: 52,
    borderRadius: radius.md,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
  },

  primaryButtonText: {
    color: colors.white,
    fontSize: typography.body,
    fontWeight: '700',
  },

  input: {
    minHeight: 52,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.md,
    paddingHorizontal: spacing.md,
    fontSize: typography.body,
    color: colors.text,
  },
});

export { colors, spacing, radius, typography, shadows };

export default styles;