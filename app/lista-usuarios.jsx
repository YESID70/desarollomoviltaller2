import { useState } from 'react';
import { View, TextInput, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Text, Card, useTheme } from 'react-native-paper';
import usuariosMotos from '../assets/usuarios-motos.json';
import { useRouter } from 'expo-router';

export default function ListaUsuarios() {
  const [textoBuscar, setTextoBuscar] = useState('');
  const router = useRouter();
  const { colors } = useTheme();

  const filtrados = usuariosMotos.filter(user =>
    user.nombre.toLowerCase().includes(textoBuscar.toLowerCase())
  );

  return (
    <View style={[styles.container, { backgroundColor: '#f5f5f5' }]}>
      <TextInput
        style={[styles.buscar, { borderColor: '#e0e0e0', color: '#000000' }]}
        placeholder="Buscar entusiasta..."
        value={textoBuscar}
        onChangeText={setTextoBuscar}
        placeholderTextColor="#666666"
      />
      <FlatList
        data={filtrados}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => router.push({ pathname: '/perfil-usuario', params: { id: item.id } })}
          >
            <Card style={styles.card}>
              <Card.Content style={styles.cardContent}>
                <Image
                  source={{ uri: item.avatar }}
                  style={styles.avatar}
                />
                <View>
                  <Text style={[styles.name, { color: '#000000' }]}>{item.nombre}</Text>
                  <Text style={[styles.role, { color: '#666666' }]}>Entusiasta de Motos</Text>
                </View>
              </Card.Content>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  buscar: {
    height: 50,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
    backgroundColor: '#ffffff',
  },
  card: {
    marginBottom: 12,
    borderRadius: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    backgroundColor: '#ffffff',
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
    borderWidth: 2,
    borderColor: '#000000',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  role: {
    fontSize: 14,
  },
});