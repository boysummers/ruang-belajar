import React from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';

const tips = [
  ['01', 'Gunakan teknik 25–5', 'Belajar fokus selama 25 menit, lalu istirahat 5 menit.'],
  ['02', 'Tentukan target harian', 'Pilih 2–3 tugas terpenting agar kegiatan lebih terarah.'],
  ['03', 'Jauhkan distraksi', 'Simpan ponsel dan matikan notifikasi saat belajar.'],
  ['04', 'Evaluasi kemajuan', 'Tinjau tugas yang selesai dan perbaiki rencana esok hari.']
];

export function TipsScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Belajar lebih efektif 🌱</Text>
      <Text style={styles.subheading}>Kebiasaan sederhana yang bisa kamu mulai hari ini.</Text>
      {tips.map(([number, title, description]) => (
        <View key={number} style={styles.card}>
          <Text style={styles.number}>{number}</Text>
          <View style={styles.content}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: { padding: 20 },
  heading: { fontSize: 23, fontWeight: '800', color: '#20332D', marginTop: 8 },
  subheading: { color: '#71847B', marginTop: 6, marginBottom: 18 },
  card: { backgroundColor: '#FFFFFF', padding: 16, borderRadius: 14, marginBottom: 12, flexDirection: 'row', alignItems: 'flex-start' },
  number: { fontSize: 18, fontWeight: '800', color: '#E2A92D', marginRight: 14 },
  content: { flex: 1 },
  title: { color: '#20332D', fontWeight: '800', fontSize: 15 },
  description: { color: '#71847B', lineHeight: 20, marginTop: 5 }
});