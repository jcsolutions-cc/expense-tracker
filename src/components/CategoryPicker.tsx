




import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { CATEGORIES } from '../constants/categories';
import { CategoryId } from '../types/index';
import { COLORS, SPACING, RADIUS } from '../constants/theme';
import { t } from '../i18n/index';

type Props = {
  value: CategoryId | null;
  onChange: (id: CategoryId) => void;
};

export function CategoryPicker({ value, onChange }: Props) {
  return (
    <View style={styles.grid}>
      {CATEGORIES.map((cat) => {
        const selected = value === cat.id;

        return (
          <TouchableOpacity
            key={cat.id}
            onPress={() => onChange(cat.id)}
            activeOpacity={0.8}
            style={[
              styles.item,
              selected && { borderColor: cat.color, backgroundColor: cat.color + 22 }
            ]}
          >

            <Text style={styles.emojin}>{cat.emoji}</Text>
            <Text style={[styles.label, selected && { color: COLORS.text }]}>{t(`categories.${cat.id}`)}</Text>

          </TouchableOpacity>
        );
      })}
    </View>
  );
}


const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: SPACING.sm,
  },
  item: {
    width: '31%',
    aspectRatio: 1,
    borderRadius: RADIUS.md,
    borderWidth: 1,
    borderColor: COLORS.border,
    alignItems: 'center',
    justifyContent: 'center',
    gap: SPACING.xs,
  },
  emojin: { fontSize: 26 },
  label: { fontSize: 12, color: COLORS.textMuted, textAlign: 'center' },
});
