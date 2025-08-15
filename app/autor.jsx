import { View, StyleSheet, Image, Linking } from 'react-native';
import { Text, Card, Button } from 'react-native-paper';
import { router } from 'expo-router';

export default function Autor() {
  const email = 'motos.app.soporte@email.com';
  const phoneNumber = '310xxxxxxx';
  const githubUrl = 'https://github.com/motos-app';

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <View style={styles.header}>
          <Image
            source={{ uri: 'https://placehold.co/150x150/000000/ffffff' }}
            style={styles.avatar}
            accessibilityLabel="Imagen de un diseñador de motocicletas"
          />
          <View style={styles.headerText}>
            <Text variant="headlineMedium" style={styles.nombre}>
              Diseñador de Motos
            </Text>
            <Text style={styles.info}>Desarrollador de aplicaciones móviles</Text>
          </View>
        </View>

        <Card.Content>
          <View style={styles.contactContainer}>
            <Button
              icon="email"
              mode="text"
              onPress={() => Linking.openURL(`mailto:${email}`)}
              style={styles.contactButton}
              labelStyle={styles.contactButtonText}
            >
              {email}
            </Button>
            <Button
              icon="phone"
              mode="text"
              onPress={() => Linking.openURL(`tel:${phoneNumber}`)}
              style={styles.contactButton}
              labelStyle={styles.contactButtonText}
            >
              {phoneNumber}
            </Button>
            <Button
              icon="github"
              mode="text"
              onPress={() => Linking.openURL(githubUrl)}
              style={styles.contactButton}
              labelStyle={styles.contactButtonText}
            >
              motos-app
            </Button>
          </View>
        </Card.Content>
      </Card>

      <Button
        mode="contained"
        style={styles.btnVolver}
        onPress={() => router.back()}
        labelStyle={styles.btnVolverText}
      >
        Volver
      </Button>
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
  },
  card: {
    width: '100%',
    maxWidth: 400,
    borderRadius: 8,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    backgroundColor: '#ffffff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 15,
    borderWidth: 2,
    borderColor: '#000000',
  },
  headerText: {
    flex: 1,
  },
  nombre: {
    fontWeight: 'bold',
    color: '#000000',
    fontSize: 22,
  },
  info: {
    fontSize: 14,
    color: '#666666',
  },
  contactContainer: {
    paddingVertical: 10,
  },
  contactButton: {
    justifyContent: 'flex-start',
    paddingHorizontal: 0,
  },
  contactButtonText: {
    textAlign: 'left',
    color: '#000000',
    fontWeight: 'normal',
    fontSize: 16,
  },
  btnVolver: {
    marginTop: 25,
    width: '80%',
    backgroundColor: '#000000',
    borderRadius: 8,
    paddingVertical: 8,
  },
  btnVolverText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});