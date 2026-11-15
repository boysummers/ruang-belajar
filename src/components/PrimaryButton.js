import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';

export function PrimaryButton({ title, onPress, secondary = false }) {
  return (
    <Pressable onPress={onPress} style={[styles.button, secondary && styles.secondary]}>
      <Text style={[styles.text, secondary && styles.secondaryText]}>{title}</Text>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  button: { backgroundColor: '#176B55', paddingVertical: 14, paddingHorizontal: 18, borderRadius: 12, alignItems: 'center', marginTop: 10 },
  secondary: { backgroundColor: '#E2EFE9' },
  text: { color: '#FFFFFF', fontWeight: '700', fontSize: 14 },
  secondaryText: { color: '#176B55' }
});