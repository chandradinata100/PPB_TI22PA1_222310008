import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20 ,fontWeight: 'bold' }}>PROFIL SAYA</Text>
      <Text>Nama  : Chandradinata </Text>
      <Text>NPM   : 222310008     </Text>
      <Text>Tempat / tanggal lahir : KA.Lahang / 03 Febuari 2004</Text>
      <Text>Alamat  : Jl. Kabandungan 1</Text>
      <Text>Jenis kelamin : Laki-laki</Text>
      <Text>Agama   : Kristen</Text>
      <Text>Nomor telepon : 088291045255</Text>
      <Text>Email   : chandradinata100@gmail.com</Text>
      <Text>Foto Profil : </Text>
      <Image source={require('./Gambar WhatsApp 2024-03-15 pukul 10.43.41_4875d0c8.jpg')} style={styles.image} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 100, // Sesuaikan lebar gambar sesuai kebutuhan
    height: 100, // Sesuaikan tinggi gambar sesuai kebutuhan
    marginTop: 20, // Sesuaikan jarak antara teks dan gambar sesuai kebutuhan
  },
});
