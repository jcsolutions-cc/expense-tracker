



import { useState } from "react"; 'react';
import { Text, View, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from '@react-native-vector-icons/ionicons';
import { Color, useRouter } from 'expo-router';

import { COLORS, RADIUS, SPACING } from "../constants/theme";
import { ExpenseCard } from '../components/ExpenseCard';
import { Expense } from '../types';
import { t } from '../i18n/index';
import { useLanguage } from '../i18n/LanguageProvider';

import { Button } from '../components/ui/Button';
import { CategoryPicker } from '../components/CategoryPicker';
import { CategoryId } from '../types/index';
import { useExpenses } from '../expenses/ExpensesProvider';

const date = new Date().toISOString();

export default function HomeScreen() {
  const router = useRouter();
  const [cat, setCat] = useState<CategoryId | null>(null);
  useLanguage();

  const { expenses } = useExpenses();

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>{t('home.title')}</Text>
          <TouchableOpacity
            onPress={() => router.push('./language')}
            style={styles.iconBtn}
            activeOpacity={0.8}
          >
            <Ionicons name="language" size={22} color={COLORS.text} />
          </TouchableOpacity>
        </View>

        {expenses.length === 0 ? (
          <View style={styles.empty}>
            <Text style={styles.emptyEmoji}>💰</Text>
            <Text style={styles.emptyTitle}>{t('empty.expensesTitle')}</Text>
            <Text style={styles.emptySubTitle}>{t('empty.expensesSubtitle')}</Text>
          </View>
        ) : (
          <FlatList
            data={expenses}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <ExpenseCard expense={item} />}
            contentContainerStyle={styles.list}
            ItemSeparatorComponent={() => <View style={{ height: SPACING.sm }} />}
            initialNumToRender={10}
            removeClippedSubviews={false}
          />
        )}

      </View>
      <TouchableOpacity
        onPress={() => router.push('/expense/new')}
        style={styles.fab}
        activeOpacity={0.85}
      >
        <Ionicons name="add" size={22} color={COLORS.text} />
      </TouchableOpacity>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.bg },
  content: { flex: 1, padding: SPACING.lg, gap: SPACING.md },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SPACING.sm,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.text,
  },
  iconBtn: {
    width: 40,
    height: 40,
    borderRadius: RADIUS.sm,
    backgroundColor: COLORS.surface,
    alignItems: 'center',
    borderColor: COLORS.border,
    justifyContent: 'center',
    borderWidth: 1,
  },
  counterBox: {
    backgroundColor: COLORS.surface,
    borderRadius: RADIUS.md,
    padding: SPACING.md,
    borderWidth: 1,
    borderColor: COLORS.border,
    alignItems: 'center'
  },
  counterText: {
    color: COLORS.text,
    fontSize: 15,
    fontWeight: '600',
  },
  fab: {
    position: 'absolute',
    right: SPACING.lg,
    bottom: SPACING.lg,
    width: 56,
    height: 56,
    borderRadius: RADIUS.lg,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 6,
  },
  empty: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: SPACING.lg,
  },
  emptyEmoji: { fontSize: 56, marginBottom: SPACING.md },
  emptySubTitle: {
    fontSize: 14,
    color: COLORS.textMuted,
    textAlign: 'center',
    marginTop: SPACING.xs,
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.text,
    textAlign: 'center',
  },
  list: { paddingBottom: 100 },
});
