import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { HomeScreen } from './src/screens/HomeScreen';
import { TasksScreen } from './src/screens/TasksScreen';
import { TipsScreen } from './src/screens/TipsScreen';
import { AddTaskScreen } from './src/screens/AddTaskScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  // State utama disimpan di komponen induk agar dapat dipakai beberapa halaman.
  const [tasks, setTasks] = useState([
    { id: '1', title: 'Membaca materi React Native', category: 'Belajar', done: false },
    { id: '2', title: 'Mengerjakan latihan matematika', category: 'Tugas', done: true },
    { id: '3', title: 'Merapikan meja belajar', category: 'Kebiasaan', done: false }
  ]);

  const addTask = (title, category) => {
    setTasks(current => [
      ...current,
      { id: Date.now().toString(), title: title.trim(), category, done: false }
    ]);
  };

  const toggleTask = (id) => {
    setTasks(current => current.map(task =>
      task.id === id ? { ...task, done: !task.done } : task
    ));
  };

  return (
    <NavigationContainer>
      <StatusBar style="dark" />
      <Stack.Navigator
        initialRouteName="Beranda"
        screenOptions={{
          headerStyle: { backgroundColor: '#176B55' },
          headerTintColor: '#FFFFFF',
          headerTitleStyle: { fontWeight: '700' },
          contentStyle: { backgroundColor: '#F4F7F5' }
        }}
      >
        <Stack.Screen name="Beranda">
          {props => <HomeScreen {...props} tasks={tasks} />}
        </Stack.Screen>
        <Stack.Screen name="Daftar Tugas">
          {props => <TasksScreen {...props} tasks={tasks} onToggleTask={toggleTask} />}
        </Stack.Screen>
        <Stack.Screen name="Tambah Tugas">
          {props => <AddTaskScreen {...props} onAddTask={addTask} />}
        </Stack.Screen>
        <Stack.Screen name="Tips Belajar" component={TipsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}