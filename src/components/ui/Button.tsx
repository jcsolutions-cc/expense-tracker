


import { TouchableOpacity, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { COLORS, SPACING, RADIUS } from '../../constants/theme';

type Props = {
  label: string;
  onPress: () => void;
  variant?: 'primary' | 'ghost';
  loading?: boolean;
};

export function Button({ label, onPress, variant = 'primary', loading }: Props) {
  const isPrimary = variant === 'primary';
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      disabled={loading}
      style={[
        styles.base,
        isPrimary ? styles.primary : styles.ghost,
        loading && styles.disabled
      ]}
    >
      {loading ? (<ActivityIndicator color={isPrimary ? COLORS.bg : COLORS.text} />) :
        (<Text style={[styles.label, isPrimary ? styles.labelPrimary : styles.labelGhost]}>{label}</Text>)}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  base: {
    paddingVertical: SPACING.md,
    paddingHorizontal: SPACING.lg,
    borderRadius: RADIUS.md,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 48,
  },
  primary: { backgroundColor: COLORS.primary, },
  ghost: { backgroundColor: 'transparent', borderWidth: 1, borderColor: COLORS.border },
  disabled: { opacity: 0.6, },
  label: { fontSize: 15, fontWeight: '600' },
  labelPrimary: { color: COLORS.bg },
  labelGhost: { color: COLORS.text },
});
