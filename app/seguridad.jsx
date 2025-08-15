import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';

export default function Seguridad() {
  return (
    <View style={styles.container}>
      <Text variant="headlineMedium">Pantalla de Seguridad</Text>
      <Text>Ajustes relacionados con la seguridad de la cuenta.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }
});
