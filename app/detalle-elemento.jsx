import { useState, useEffect } from 'react';
import { View, Image, StyleSheet, ScrollView } from 'react-native';
import { Text, Card, useTheme } from 'react-native-paper';
import { useLocalSearchParams } from 'expo-router';
import datosMotos from '../assets/motos.json';

export default function DetalleElemento() {
  const { id } = useLocalSearchParams();
  const { colors } = useTheme();
  const [elemento, setElemento] = useState(null);

  useEffect(() => {
    const item = datosMotos.find(e => e.id.toString() === id);
    setElemento(item);
  }, [id]);

  if (!elemento) {
    return (
      <View style={[styles.container, styles.center, { backgroundColor: '#f5f5f5' }]}>
        <Text style={{ color: '#000000' }}>Motocicleta no encontrada.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={[styles.container, { backgroundColor: '#f5f5f5' }]}>
      <Image
        source={{ uri: elemento.urlImagen }}
        style={styles.imagen}
        resizeMode="cover"
      />
      <Card style={styles.card}>
        <Card.Content>
          <Text variant="headlineSmall" style={[styles.titulo, { color: '#000000' }]}>
            {elemento.titulo}
          </Text>
          <Text variant="bodyLarge" style={[styles.descripcion, { color: '#333333' }]}>
            {elemento.descripcion}
          </Text>
          <Text style={[styles.fecha, { color: '#666666' }]}>
            Año de fabricación: {elemento.año}
          </Text>
        </Card.Content>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagen: {
    width: '100%',
    height: 250,
  },
  card: {
    margin: 16,
    marginTop: -40,
    borderRadius: 8,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    backgroundColor: '#ffffff',
  },
  titulo: {
    fontWeight: 'bold',
    marginBottom: 8,
  },
  descripcion: {
    marginBottom: 16,
    lineHeight: 22,
  },
  fecha: {
    fontStyle: 'italic',
  },
});