import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export function SectionTitle({ title, subtitle }) {
  return (
    <View style={styles.wrap}>
      <Text style={styles.title}>{title}</Text>
      {!!subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
    </View>
  );
}
const styles = StyleSheet.create({
  wrap: { marginBottom: 14, marginTop: 4 },
  title: { fontSize: 21, fontWeight: '800', color: '#20332D' },
  subtitle: { fontSize: 13, color: '#71847B', marginTop: 4 }
});