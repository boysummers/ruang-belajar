import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { ProgressSummary } from '../components/ProgressSummary';
import { TaskCard } from '../components/TaskCard';
import { SectionTitle } from '../components/SectionTitle';
import { PrimaryButton } from '../components/PrimaryButton';

export function HomeScreen({ navigation, tasks }) {
  const completed = tasks.filter(task => task.done).length;
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.greeting}>Halo, Pejuang Belajar! 👋</Text>
      <Text style={styles.intro}>Atur langkah kecilmu, capai tujuan besarmu.</Text>
      <ProgressSummary total={tasks.length} completed={completed} />
      <SectionTitle title="Prioritas tugas" subtitle="Tekan tugas untuk mengubah statusnya." />
      {tasks.slice(0, 3).map(task => (
        <TaskCard key={task.id} task={task} onToggle={() => {}} />
      ))}
      <PrimaryButton title="Lihat semua tugas" onPress={() => navigation.navigate('Daftar Tugas')} />
      <PrimaryButton title="+ Tambah tugas baru" secondary onPress={() => navigation.navigate('Tambah Tugas')} />
      <PrimaryButton title="Baca tips belajar" secondary onPress={() => navigation.navigate('Tips Belajar')} />
      <View style={styles.quote}>
        <Text style={styles.quoteText}>“Konsisten sedikit demi sedikit lebih baik daripada menunggu sempurna.”</Text>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: { padding: 20, paddingBottom: 35 },
  greeting: { color: '#20332D', fontSize: 24, fontWeight: '800', marginTop: 8 },
  intro: { color: '#71847B', fontSize: 14, marginTop: 5, marginBottom: 20 },
  quote: { padding: 16, marginTop: 18, borderLeftWidth: 4, borderLeftColor: '#F0BD4E', backgroundColor: '#FFF8E8', borderRadius: 10 },
  quoteText: { color: '#755D2C', fontStyle: 'italic', lineHeight: 21 }
});