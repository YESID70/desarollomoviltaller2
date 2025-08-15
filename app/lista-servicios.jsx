import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Text, Button, Card, useTheme } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const serviciosMotos = [
  {
    id: '1',
    titulo: 'Mantenimiento Básico',
    descripcion: 'Servicio de cambio de aceite y revisión general.',
    icono: 'wrench',
  },
  {
    id: '2',
    titulo: 'Reparación de Motor',
    descripcion: 'Diagnóstico y reparación de fallas en el motor.',
    icono: 'engine',
  },
  {
    id: '3',
    titulo: 'Lavado y Detallado',
    descripcion: 'Limpieza profunda y detallado para que tu moto luzca como nueva.',
    icono: 'car-wash',
  },
  {
    id: '4',
    titulo: 'Asesoría en Accesorios',
    descripcion: 'Ayuda para elegir los mejores accesorios para tu moto.',
    icono: 'helmet',
  },
];

export default function ListaServicios() {
  const router = useRouter();
  const { colors } = useTheme();

  return (
    <ScrollView style={[styles.container, { backgroundColor: '#f5f5f5' }]}>
      <Text style={[styles.title, { color: '#000000' }]}>Servicios para tu Moto</Text>
      {serviciosMotos.map(({ id, titulo, descripcion, icono }) => (
        <TouchableOpacity key={id} onPress={() => router.push({ pathname: '/detalle-servicio', params: { id: id } })}>
          <Card style={styles.card}>
            <Card.Content style={styles.cardContent}>
              <View style={styles.iconContainer}>
                <MaterialCommunityIcons name={icono} size={30} color='#000000' />
              </View>
              <View style={styles.infoContainer}>
                <Text style={[styles.cardTitle, { color: '#000000' }]}>{titulo}</Text>
                <Text style={[styles.cardDescription, { color: '#666666' }]}>{descripcion}</Text>
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
  iconContainer: {
    marginRight: 16,
  },
  infoContainer: {
    flex: 1,
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 4,
  },
  cardDescription: {
    fontSize: 14,
  },
});