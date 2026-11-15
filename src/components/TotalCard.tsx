


import { View, Text, StyleSheet } from 'react-native';
import { COLORS, SPACING, RADIUS } from '../constants/theme';
import { formatCurrency } from '../utils/format';
import { t } from '../i18n/';
import { useLanguage } from '../i18n/LanguageProvider';

type Props = {
  total: number;
};

export function TotalCard({ total }: Props) {
  useLanguage();

  return (
    <View style={styles.card}>
      <Text style={styles.label}>{t('common.total')}</Text>
      <Text style={styles.value}>{formatCurrency(total, 'en-US', 'usd')}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.surface,
    borderRadius: RADIUS.md,
    padding: SPACING.lg,
    borderWidth: 1,
    borderColor: COLORS.border,
    gap: SPACING.xs,
  },
  label: {
    color: COLORS.textMuted,
    fontSize: 13,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  value: {
    color: COLORS.text,
    fontSize: 28,
    fontWeight: 'bold',
  },
});

