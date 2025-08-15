import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, useTheme, Card } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useLocalSearchParams } from 'expo-router';

const serviciosMotos = [
  {
    id: '1',
    titulo: 'Mantenimiento Básico',
    descripcion: 'Servicio de cambio de aceite, filtros y revisión de frenos para mantener tu moto en óptimas condiciones.',
    icono: 'wrench',
  },
  {
    id: '2',
    titulo: 'Revisión Técnica',
    descripcion: 'Inspección completa para garantizar la seguridad y el buen funcionamiento de todos los sistemas de tu motocicleta.',
    icono: 'clipboard-list',
  },
  {
    id: '3',
    titulo: 'Repuestos Originales',
    descripcion: 'Venta de repuestos y accesorios originales de las mejores marcas para tu moto.',
    icono: 'tools',
  },
  {
    id: '4',
    titulo: 'Asesoría en Compra',
    descripcion: 'Asesoramiento personalizado para ayudarte a elegir la motocicleta ideal según tus necesidades y presupuesto.',
    icono: 'car-key',
  },
];

export default function DetalleServicio() {
  const { id } = useLocalSearchParams();
  const { colors } = useTheme();
  const servicio = serviciosMotos.find(s => s.id === id);

  if (!servicio) {
    return (
      <View style={[styles.container, styles.center, { backgroundColor: '#f5f5f5' }]}>
        <Text style={{ color: '#000000' }}>Servicio no encontrado.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={[styles.container, { backgroundColor: '#f5f5f5' }]}>
      <View style={styles.header}>
        <MaterialCommunityIcons name={servicio.icono} size={60} color='#000000' />
        <Text variant="headlineMedium" style={[styles.title, { color: '#000000' }]}>
          {servicio.titulo}
        </Text>
      </View>

      <Card style={styles.card}>
        <Card.Content>
          <Text variant="bodyLarge" style={{ color: '#333333' }}>
            {servicio.descripcion}
          </Text>
        </Card.Content>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 24,
  },
  title: {
    fontWeight: 'bold',
    marginTop: 12,
    textAlign: 'center',
  },
  card: {
    borderRadius: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    backgroundColor: '#ffffff',
  },
});