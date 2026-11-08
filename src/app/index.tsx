



import { useState } from "react"; 'react';
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from '@react-native-vector-icons/ionicons';
import { useRouter } from 'expo-router';

import { COLORS, RADIUS, SPACING } from "../constants/theme";
import { ExpenseCard } from '../components/ExpenseCard';
import { Expense } from '../types';
import { t } from '../i18n/index';
import { useLanguage } from '../i18n/LanguageProvider';

import { Button } from '../components/ui/Button';
import { CategoryPicker } from '../components/CategoryPicker';
import { CategoryId } from '../types/index';

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
  const router = useRouter();
  const [cat, setCat] = useState<CategoryId | null>(null);
  useLanguage();

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
        <TouchableOpacity
          onPress={() => router.push('/expense/new')}
          style={styles.iconBtn}
          activeOpacity={0.8}
        >
          <Ionicons name="add" size={22} color={COLORS.text} />
        </TouchableOpacity>
      </View>
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
});
