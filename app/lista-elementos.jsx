import { useState, useEffect } from 'react';
import { View, FlatList, Image, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, Button, Card, useTheme } from 'react-native-paper';
import { router } from 'expo-router';
import datosMotos from '../assets/motos.json';

export default function ListaElementos() {
  const [textoBuscar, setTextoBuscar] = useState('');
  const [listaFiltrada, setListaFiltrada] = useState(datosMotos);
  const { colors } = useTheme();

  useEffect(() => {
    const filtrados = datosMotos.filter(item =>
      item.titulo.toLowerCase().includes(textoBuscar.toLowerCase())
    );
    setListaFiltrada(filtrados);
  }, [textoBuscar]);

  const renderItem = ({ item }) => (
    <Card style={styles.card}>
      <TouchableOpacity onPress={() => router.push(`/detalle-elemento?id=${item.id}`)}>
        <Card.Cover source={{ uri: item.urlImagen }} style={styles.cardImage} />
        <Card.Content style={styles.cardContent}>
          <Text variant="titleLarge" style={[styles.title, { color: '#000000' }]}>
            {item.titulo}
          </Text>
          <Text style={[styles.description, { color: '#333333' }]}>
            {item.descripcion.substring(0, 100)}...
          </Text>
        </Card.Content>
      </TouchableOpacity>
      <Card.Actions style={styles.cardActions}>
        <Button
          mode="text"
          onPress={() => router.push(`/detalle-elemento?id=${item.id}`)}
          labelStyle={{ color: '#000000' }}
        >
          Ver detalles
        </Button>
      </Card.Actions>
    </Card>
  );

  return (
    <View style={[styles.container, { backgroundColor: '#f5f5f5' }]}>
      <TextInput
        style={[styles.search, { borderColor: '#e0e0e0', color: '#000000' }]}
        placeholder="Buscar motocicleta..."
        value={textoBuscar}
        onChangeText={setTextoBuscar}
        placeholderTextColor="#666666"
      />
      <FlatList
        data={listaFiltrada}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  search: {
    height: 50,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
    backgroundColor: '#ffffff',
  },
  listContent: {
    paddingBottom: 24,
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
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  cardContent: {
    padding: 16,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
  description: {
    lineHeight: 20,
  },
  cardActions: {
    justifyContent: 'flex-end',
    paddingHorizontal: 16,
    paddingBottom: 12,
  },
});