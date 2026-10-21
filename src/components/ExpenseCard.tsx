import { View, Text, StyleSheet } from 'react-native';
import { Expense } from '../types';
import { getCategory } from '../constants/categories';
import { formatCurrency, formatDate } from '../utils/format';
import { COLORS, SPACING, RADIUS } from '../constants/theme';
import { t, setLanguage } from '../i18n/index';

setLanguage('en');

type Props = { expense: Expense };

export function ExpenseCard({ expense }: Props) {
  const category = getCategory(expense.category);

  return (
    <View style={styles.card}>
      <View style={[styles.iconWrap, { backgroundColor: category.color + '22' }]}>
        <Text style={styles.icon}>{category.emoji}</Text>
      </View>
      <View style={styles.info}>
        <Text style={styles.label}>{t(`categories.${category.id}`)}</Text>
        <Text style={styles.date}>{formatDate(expense.date, 'en-US')}</Text>
      </View>
      <Text style={styles.amount}>-{formatCurrency(expense.amount, 'en-US', 'USD')}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.surface,
    padding: SPACING.md,
    borderRadius: RADIUS.md,
    gap: SPACING.md,
  },
  iconWrap: {
    width: 44,
    height: 44,
    borderRadius: RADIUS.sm,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: { fontSize: 22 },
  info: { flex: 1 },
  label: { color: COLORS.text, fontSize: 15, fontWeight: '600' },
  date: { color: COLORS.textMuted, fontSize: 12, marginTop: 2 },
  amount: { color: COLORS.danger, fontSize: 16, fontWeight: '700' },
});
