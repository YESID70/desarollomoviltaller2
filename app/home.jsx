import React, { useState } from 'react';
import { View, Image, StyleSheet, ScrollView } from 'react-native';
import { Text, Button, Card, Searchbar, useTheme } from 'react-native-paper';
import { useRouter } from 'expo-router';
import datosMotos from '../assets/motos.json';

export default function ListaTarjetas() {
  const router = useRouter();
  const { colors } = useTheme();
  const [lista, setLista] = useState(datosMotos);
  const [busqueda, setBusqueda] = useState('');

  const handleSearch = (query) => {
    setBusqueda(query);
    if (query) {
      const filtrados = datosMotos.filter(item =>
        item.titulo.toLowerCase().includes(query.toLowerCase())
      );
      setLista(filtrados);
    } else {
      setLista(datosMotos);
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: '#f5f5f5' }]}>
      <Searchbar
        placeholder="Buscar motocicletas..."
        onChangeText={handleSearch}
        value={busqueda}
        style={styles.searchbar}
      />
      <ScrollView>
        {lista.map((item, index) => (
          <Card key={index} style={styles.card}>
            <Card.Cover source={{ uri: item.urlImagen }} style={styles.cardImage} />
            <Card.Content style={styles.cardContent}>
              <Text variant="titleLarge" style={[styles.cardTitle, { color: '#000000' }]}>
                {item.titulo}
              </Text>
              <Text variant="bodyMedium" style={[styles.cardDescription, { color: '#333333' }]}>
                {item.descripcion}
              </Text>
            </Card.Content>
            <Card.Actions>
              <Button
                mode="text"
                onPress={() => router.push({ pathname: '/detalle-elemento', params: { id: item.id } })}
                labelStyle={{ color: '#000000' }}
              >
                Ver detalles
              </Button>
            </Card.Actions>
          </Card>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  searchbar: {
    marginBottom: 16,
    borderRadius: 8,
    backgroundColor: '#ffffff',
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
  cardImage: {
    height: 180,
  },
  cardContent: {
    paddingTop: 12,
  },
  cardTitle: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
  cardDescription: {
    lineHeight: 20,
  },
});