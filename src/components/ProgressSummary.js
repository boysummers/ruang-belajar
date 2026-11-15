import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export function ProgressSummary({ total, completed }) {
  const percent = total === 0 ? 0 : Math.round((completed / total) * 100);
  return (
    <View style={styles.card}>
      <Text style={styles.eyebrow}>PROGRES HARI INI</Text>
      <Text style={styles.number}>{percent}%</Text>
      <Text style={styles.caption}>{completed} dari {total} tugas selesai</Text>
      <View style={styles.track}>
        <View style={[styles.fill, { width: `${percent}%` }]} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  card: { backgroundColor: '#176B55', borderRadius: 18, padding: 20, marginBottom: 18 },
  eyebrow: { color: '#D6F2E7', fontSize: 11, fontWeight: '700', letterSpacing: 1 },
  number: { color: '#FFFFFF', fontSize: 38, fontWeight: '800', marginTop: 7 },
  caption: { color: '#E7F7F0', marginTop: 2, marginBottom: 14 },
  track: { height: 9, backgroundColor: '#4B8F7D', borderRadius: 9, overflow: 'hidden' },
  fill: { height: 9, backgroundColor: '#F6C85F', borderRadius: 9 }
});