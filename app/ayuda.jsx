import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';

export default function Ayuda() {
  return (
    <View style={styles.container}>
      <Text variant="headlineMedium">Ayuda y Soporte</Text>
      <Text>Preguntas frecuentes y soporte técnico sobre motocicletas.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  }
});