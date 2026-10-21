




import { Text, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { COLORS, SPACING } from "../constants/theme";
import { ExpenseCard } from '../components/ExpenseCard';
import { Expense } from '../types';
import { t } from '../i18n/index';

const date = new Date().toISOString();

const MOCK: Expense = {
  id: 'demo',
  amount: 24.9,
  category: 'food',
  note: 'Lunch',
  date: date,
  createAt: date,
  updateAt: date,

};

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.content}>
        <Text style={styles.title}>{t('home.title')}</Text>
        <ExpenseCard expense={MOCK} />
      </View>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.bg },
  content: { flex: 1, padding: SPACING.lg, gap: SPACING.md },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.text,
  },
});
