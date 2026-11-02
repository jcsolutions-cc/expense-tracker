


import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Ionicons } from '@react-native-vector-icons/ionicons';

import { COLORS, SPACING, RADIUS } from '../constants/theme';
import { useLanguage } from '../i18n/LanguageProvider';
import { t, Language } from '../i18n/index';

export default function LanguageScreen() {
  const router = useRouter();
  const { language, setLanguage } = useLanguage();

  const options: Array<{ code: Language; labelKey: string }> = [
    { code: 'en', labelKey: 'common.english' },
    { code: 'pt', labelKey: 'common.portuguese' }
  ];

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <View style={styles.content}>
        <Text style={styles.heading}>{t('common.language')}</Text>
        {options.map((opt) => {
          const selected = language === opt.code;

          return (
            <TouchableOpacity
              key={opt.code}
              activeOpacity={0.8}
              onPress={() => {
                setLanguage(opt.code);
                router.back();
              }}
              style={[styles.row, selected && styles.rowSelected]}
            >
              <Text style={[styles.label, selected && styles.labelSelected]}>
                {t(opt.labelKey)}
              </Text>
              {selected && <Ionicons name="checkmark" size={20} color={COLORS.primary} />}
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.bg },
  content: { padding: SPACING.lg, gap: SPACING.sm },
  heading: {
    color: COLORS.text,
    fontSize: 18,
    fontWeight: '600',
    marginBottom: SPACING.md,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.surface,
    borderRadius: RADIUS.md,
    padding: SPACING.md,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  rowSelected: { borderColor: COLORS.primary, },
  label: { color: COLORS.text, fontSize: 10 },
  labelSelected: { color: COLORS.primary, fontWeight: '600' }
});
