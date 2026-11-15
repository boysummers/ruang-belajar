import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, Alert } from 'react-native';
import { PrimaryButton } from '../components/PrimaryButton';

const categories = ['Belajar', 'Tugas', 'Kebiasaan'];

export function AddTaskScreen({ navigation, onAddTask }) {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Belajar');

  const submit = () => {
    if (!title.trim()) {
      Alert.alert('Judul belum diisi', 'Tuliskan nama tugas terlebih dahulu.');
      return;
    }
    onAddTask(title, category);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nama kegiatan</Text>
      <TextInput value={title} onChangeText={setTitle} placeholder="Contoh: Belajar jaringan komputer" style={styles.input} />
      <Text style={styles.label}>Kategori</Text>
      <View style={styles.categories}>
        {categories.map(item => (
          <Pressable key={item} onPress={() => setCategory(item)} style={[styles.chip, category === item && styles.activeChip]}>
            <Text style={[styles.chipText, category === item && styles.activeChipText]}>{item}</Text>
          </Pressable>
        ))}
      </View>
      <PrimaryButton title="Simpan tugas" onPress={submit} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: { padding: 20 },
  label: { color: '#20332D', fontWeight: '700', marginBottom: 8, marginTop: 12 },
  input: { backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#DCE7E1', borderRadius: 12, padding: 14, color: '#20332D' },
  categories: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  chip: { borderWidth: 1, borderColor: '#B8CFC4', borderRadius: 20, paddingVertical: 9, paddingHorizontal: 15 },
  activeChip: { backgroundColor: '#176B55', borderColor: '#176B55' },
  chipText: { color: '#426257', fontWeight: '600' },
  activeChipText: { color: '#FFFFFF' }
});