

import { useState } from 'react';
import {
  View, Text, TextInput, StyleSheet, ScrollView,
  KeyboardAvoidingView, Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { COLORS, SPACING, RADIUS } from '../../constants/theme';
import { CategoryPicker } from '../../components/CategoryPicker';
import { Button } from '../../components/ui/Button';
import { CategoryId } from '../../types/index';
import { t } from '../../i18n/index';
import { useLanguage } from '../../i18n/LanguageProvider';
import { formatDate } from '@/utils/format';

export default function NewExpenseScreen() {
  useLanguage();

  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState<CategoryId | null>(null);
  const [note, setNote] = useState('');
  const [date] = useState(new Date().toISOString());

  const handleSave = () => {
    console.log({ amount, category, note, date });
  };

  const handleCancel = () => {
    console.log("no implement");
  };

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView contentContainerStyle={styles.content}>
          <Text style={styles.label}>{t('common.amount')}</Text>
          <TextInput
            value={amount}
            onChangeText={setAmount}
            placeholder={t('form.amountPlaceholder')}
            keyboardType='decimal-pad'
            style={styles.input}
          />

          <Text style={styles.label}>{t('common.date')}</Text>
          <View style={styles.dateBox}>
            <Text style={styles.dateText}>{date}</Text>
          </View>

          <Text style={styles.label}>{t('common.category')}</Text>
          <CategoryPicker value={category} onChange={setCategory} />

          <Text style={styles.label}>{t('common.note')}</Text>
          <TextInput
            value={note}
            onChangeText={setNote}
            placeholder={t('form.notePlaceholder')}
            placeholderTextColor={COLORS.textMuted}
            style={[styles.input, styles.multline]}
            multiline
          />

          <View style={styles.actions}>
            <Button label={t('common.cancel')} onPress={handleCancel} variant='ghost' />
            <Button label={t('common.save')} onPress={handleSave} />
          </View>

        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.bg },
  content: { padding: SPACING.lg, gap: SPACING.md },
  label: {
    color: COLORS.textMuted,
    fontSize: 13,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 0.5
  },
  input: {
    backgroundColor: COLORS.surface,
    borderRadius: RADIUS.md,
    padding: SPACING.md,
    color: COLORS.text,
    fontSize: 16,
    borderWidth: 1,
    borderColor: COLORS.border
  },
  multline: { minHeight: 80, textAlignVertical: 'top' },
  dateBox: {
    backgroundColor: COLORS.surface,
    borderRadius: RADIUS.md,
    padding: SPACING.md,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  dateText: { color: COLORS.text, fontSize: 16, },
  actions: { flexDirection: 'row', gap: SPACING.sm, marginTop: SPACING.lg },
});
