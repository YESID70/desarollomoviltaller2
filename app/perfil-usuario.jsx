import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Text, Card, useTheme } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import usuariosMotos from '../assets/usuarios-motos.json';
import { useRouter } from 'expo-router';

export default function PerfilUsuario() {
  const router = useRouter();
  const { colors } = useTheme();

  return (
    <ScrollView style={[styles.container, { backgroundColor: '#f5f5f5' }]}>
      <Text style={[styles.title, { color: '#000000' }]}>Entusiastas de Motos</Text>
      {usuariosMotos.map((usuario) => (
        <TouchableOpacity
          key={usuario.id}
          onPress={() => router.push({ pathname: '/detalle-usuario', params: { id: usuario.id } })}
        >
          <Card
            style={styles.card}
          >
            <Card.Content style={styles.cardContent}>
              <MaterialCommunityIcons name="account-circle" size={60} color='#000000' style={styles.icon} />
              <View>
                <Text style={[styles.name, { color: '#000000' }]}>{usuario.nombre}</Text>
                <Text style={[styles.email, { color: '#666666' }]}>{usuario.email}</Text>
              </View>
              <MaterialCommunityIcons name="chevron-right" size={24} color='#000000' />
            </Card.Content>
          </Card>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  card: {
    marginBottom: 16,
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
    justifyContent: 'space-between',
    padding: 16,
  },
  icon: {
    marginRight: 16,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 14,
  },
});