import { useState } from 'react';
import { View, StyleSheet, ScrollView, Alert } from 'react-native';
import { Text, Switch, List, useTheme, Button } from 'react-native-paper';
import { useRouter } from 'expo-router';

export default function Configuracion() {
  const router = useRouter();
  const { colors } = useTheme();
  const [notificaciones, setNotificaciones] = useState(false);

  const handleCerrarSesion = () => {
    Alert.alert(
      'Cerrar sesión',
      '¿Estás seguro de que quieres cerrar sesión?',
      [
        { text: 'Cancelar', style: 'cancel' },
        { text: 'Sí, cerrar sesión', onPress: () => {
          console.log('Sesión cerrada');
          router.replace('/inicio-sesion');
        }},
      ],
      { cancelable: true }
    );
  };

  return (
    <ScrollView style={[styles.container, { backgroundColor: '#f5f5f5' }]}>
      <Text style={[styles.header, { color: '#000000' }]}>Configuración</Text>
      
      <List.Section title="Cuenta" titleStyle={[styles.sectionTitle, { color: '#333333' }]}>
        <List.Item
          title="Mi cuenta"
          left={() => <List.Icon icon="account-circle-outline" />}
          style={[styles.listItem, { backgroundColor: '#ffffff', borderColor: '#e0e0e0' }]}
          onPress={() => router.push('/cuenta')}
        />
        <List.Item
          title="Privacidad"
          left={() => <List.Icon icon="shield-lock-outline" />}
          style={[styles.listItem, { backgroundColor: '#ffffff', borderColor: '#e0e0e0' }]}
          onPress={() => router.push('/privacidad')}
        />
        <List.Item
          title="Seguridad"
          left={() => <List.Icon icon="lock-outline" />}
          style={[styles.listItem, { backgroundColor: '#ffffff', borderColor: '#e0e0e0' }]}
          onPress={() => router.push('/seguridad')}
        />
      </List.Section>

      <List.Section title="General" titleStyle={[styles.sectionTitle, { color: '#333333' }]}>
        <List.Item
          title="Notificaciones"
          left={() => <List.Icon icon="bell-outline" />}
          right={() => (
            <Switch
              value={notificaciones}
              onValueChange={setNotificaciones}
              color='#000000'
            />
          )}
          style={[styles.listItem, { backgroundColor: '#ffffff', borderColor: '#e0e0e0' }]}
        />
        <List.Item
          title="Ayuda"
          left={() => <List.Icon icon="help-circle-outline" />}
          style={[styles.listItem, { backgroundColor: '#ffffff', borderColor: '#e0e0e0' }]}
          onPress={() => router.push('/ayuda')}
        />
      </List.Section>

      <Button
        mode="outlined"
        onPress={handleCerrarSesion}
        style={[styles.botonCerrar, { borderColor: '#e53935', marginTop: 24 }]}
        labelStyle={{ color: '#e53935' }}
        icon="logout"
      >
        Cerrar sesión
      </Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  listItem: {
    marginBottom: 12,
    borderRadius: 8,
    borderWidth: 1,
  },
  botonCerrar: {
    borderRadius: 8,
    paddingVertical: 8,
  },
});