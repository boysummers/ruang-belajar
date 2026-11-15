import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import { TaskCard } from '../components/TaskCard';
import { SectionTitle } from '../components/SectionTitle';
import { PrimaryButton } from '../components/PrimaryButton';

export function TasksScreen({ navigation, tasks, onToggleTask }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <SectionTitle title="Daftar tugas" subtitle="Kelola kegiatan belajar dan kebiasaan baikmu." />
      {tasks.length === 0
        ? <Text style={styles.empty}>Belum ada tugas. Tambahkan tugas pertamamu!</Text>
        : tasks.map(task => (
          <TaskCard key={task.id} task={task} onToggle={() => onToggleTask(task.id)} />
        ))}
      <PrimaryButton title="+ Tambah tugas" onPress={() => navigation.navigate('Tambah Tugas')} />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: { padding: 20 },
  empty: { color: '#71847B', backgroundColor: '#FFFFFF', padding: 18, borderRadius: 12 }
});