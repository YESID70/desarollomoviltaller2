import { View, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Text, useTheme, Card, List } from 'react-native-paper';
import usuarios from '../assets/usuarios-motos.json';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function DetalleUsuario() {
  const { id } = useLocalSearchParams();
  const { colors } = useTheme();
  const router = useRouter();
  const usuario = usuarios.find(u => u.id.toString() === id);

  if (!usuario) {
    return (
      <View style={[styles.container, styles.center, { backgroundColor: '#f5f5f5' }]}>
        <Text style={{ color: '#000000' }}>Usuario no encontrado.</Text>
      </View>
    );
  }

  const handleEditProfile = () => {
    // Lógica para editar el perfil
    console.log('Navegar a la pantalla de edición de perfil');
    // router.push('/editar-perfil');
  };

  const handleNotifications = () => {
    // Lógica para notificaciones
    console.log('Navegar a la pantalla de notificaciones');
    // router.push('/notificaciones');
  };

  const handleConfiguracion = () => {
    // Lógica para configuración
    console.log('Navegar a la pantalla de configuración');
    // router.push('/configuracion');
  };

  const handleAyuda = () => {
    // Lógica para ayuda
    console.log('Navegar a la pantalla de ayuda');
    // router.push('/ayuda');
  };

  return (
    <ScrollView style={[styles.container, { backgroundColor: '#f5f5f5' }]}>
      <Card style={styles.card}>
        <Card.Content style={styles.cardContent}>
          <Image
            source={{ uri: usuario.avatar }}
            style={styles.avatar}
          />
          <View style={styles.infoContainer}>
            <Text variant="headlineMedium" style={[styles.name, { color: '#000000' }]}>
              {usuario.nombre}
            </Text>
            <Text style={[styles.role, { color: '#666666' }]}>
              Entusiasta de Motos
            </Text>
          </View>
        </Card.Content>
      </Card>

      <Card style={styles.infoCard}>
        <Card.Content>
          <View style={styles.infoRow}>
            <MaterialCommunityIcons name="email-outline" size={24} color='#000000' />
            <View style={styles.infoTextContainer}>
              <Text style={[styles.label, { color: '#666666' }]}>Correo electrónico</Text>
              <Text style={[styles.value, { color: '#000000' }]}>{usuario.email}</Text>
            </View>
          </View>
          <View style={styles.infoRow}>
            <MaterialCommunityIcons name="phone-outline" size={24} color='#000000' />
            <View style={styles.infoTextContainer}>
              <Text style={[styles.label, { color: '#666666' }]}>Teléfono</Text>
              <Text style={[styles.value, { color: '#000000' }]}>{usuario.telefono}</Text>
            </View>
          </View>
        </Card.Content>
      </Card>

      <Card style={styles.infoCard}>
        <Card.Content>
          <List.Section title="Opciones de Usuario" titleStyle={[styles.optionsTitle, { color: '#000000' }]}>
            <List.Item
              title="Editar Perfil"
              left={props => <List.Icon {...props} icon="pencil-outline" color='#000000' />}
              onPress={handleEditProfile}
            />
            <List.Item
              title="Notificaciones"
              left={props => <List.Icon {...props} icon="bell-outline" color='#000000' />}
              onPress={handleNotifications}
            />
            <List.Item
              title="Configuración"
              left={props => <List.Icon {...props} icon="cog-outline" color='#000000' />}
              onPress={handleConfiguracion}
            />
            <List.Item
              title="Ayuda"
              left={props => <List.Icon {...props} icon="help-circle-outline" color='#000000' />}
              onPress={handleAyuda}
            />
          </List.Section>
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
  card: {
    marginBottom: 24,
    borderRadius: 8,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    backgroundColor: '#ffffff',
  },
  cardContent: {
    alignItems: 'center',
    padding: 24,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
    borderWidth: 2,
    borderColor: '#000000',
  },
  infoContainer: {
    alignItems: 'center',
  },
  name: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
  role: {
    fontSize: 16,
  },
  infoCard: {
    borderRadius: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    backgroundColor: '#ffffff',
    marginBottom: 16,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  infoTextContainer: {
    marginLeft: 16,
  },
  label: {
    fontSize: 14,
    marginBottom: 2,
  },
  value: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  optionsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  }
});