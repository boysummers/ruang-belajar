import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

export function TaskCard({ task, onToggle }) {
  return (
    <Pressable onPress={onToggle} style={styles.card}>
      <View style={[styles.check, task.done && styles.checked]}>
        <Text style={styles.checkText}>{task.done ? '✓' : ''}</Text>
      </View>
      <View style={styles.info}>
        <Text style={[styles.title, task.done && styles.completed]}>{task.title}</Text>
        <Text style={styles.category}>{task.category}</Text>
      </View>
      <Text style={styles.action}>{task.done ? 'Selesai' : 'Tandai'}</Text>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  card: { backgroundColor: '#FFFFFF', borderRadius: 14, padding: 14, marginBottom: 10, flexDirection: 'row', alignItems: 'center', elevation: 1 },
  check: { width: 25, height: 25, borderRadius: 8, borderWidth: 1.5, borderColor: '#8AA99E', alignItems: 'center', justifyContent: 'center', marginRight: 12 },
  checked: { backgroundColor: '#176B55', borderColor: '#176B55' },
  checkText: { color: '#FFFFFF', fontWeight: '800' },
  info: { flex: 1 },
  title: { color: '#20332D', fontSize: 14, fontWeight: '700' },
  completed: { textDecorationLine: 'line-through', color: '#87968F' },
  category: { color: '#71847B', fontSize: 12, marginTop: 4 },
  action: { color: '#176B55', fontSize: 11, fontWeight: '700' }
});