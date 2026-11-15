# Ruang Belajar — React Native (Expo SDK 58)

Aplikasi pengelola tugas belajar dan kebiasaan positif.

## Menjalankan aplikasi
Persyaratan: Node.js 22.13 atau lebih baru (jalur Node 22), atau Node.js 24.3+.

1. Ekstrak ZIP ini.
2. Buka terminal pada folder `RuangBelajar_RN`.
3. Jalankan:
   ```bash
   npm install
   npx expo install --fix
   npx expo-doctor
   npx expo start -c
   ```
4. Scan QR code dengan Expo Go SDK 58 atau jalankan Android Emulator dengan tombol `a`.

Jika sebelumnya sudah pernah memasang dependensi SDK 54, hapus folder `node_modules` dan file `package-lock.json`, kemudian ulangi perintah di atas.

## Fitur
- Beranda dengan ringkasan progres.
- Daftar tugas; tekan kartu untuk menandai selesai/belum selesai.
- Tambah tugas dengan kategori Belajar, Tugas, atau Kebiasaan.
- Halaman tips belajar.
- Navigasi antarhalaman menggunakan React Navigation Native Stack.

## Komponen, state, dan props
Komponen reusable: `ProgressSummary`, `TaskCard`, `SectionTitle`, `PrimaryButton`.
State `tasks` berada di `App.js` dengan `useState`, lalu dikirim ke halaman melalui props.
Callback `onAddTask` dan `onToggleTask` mengirim aksi dari komponen anak ke komponen induk.
Navigasi dibuat dengan `NavigationContainer` dan `createNativeStackNavigator`.

## Catatan
Data tugas disimpan sementara di state aplikasi. Pengembangan berikutnya dapat menambahkan AsyncStorage atau database.
