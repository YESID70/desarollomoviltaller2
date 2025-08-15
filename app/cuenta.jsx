import { View, StyleSheet, Image, Linking, ScrollView } from 'react-native';
import { Text, Card, Button, List, Chip, useTheme } from 'react-native-paper';
import { useRouter } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Perfil() {
  const { colors } = useTheme();
  const router = useRouter();

  const perfil = {
    nombre: 'Amante de las Motos',
    rol: 'Entusiasta y experto en motocicletas',
    bio: 'Apasionado por la velocidad, el diseño y la tecnología de las motocicletas. Dedicado a explorar las últimas novedades del mercado y compartir conocimientos.',
    contacto: {
      email: 'motos.app.soporte@email.com',
      telefono: '310xxxxxxx',
      github: 'https://github.com/motos-app',
      linkedin: 'https://www.linkedin.com/in/amante-motos/',
    },
    habilidades: ['Mecánica básica', 'Modelos clásicos', 'Rutas', 'Historia de las motos', 'Experiencia en manejo'],
    avatar: 'https://placehold.co/150x150/000000/ffffff',
  };

  return (
    <ScrollView style={[styles.container, { backgroundColor: '#f5f5f5' }]}>
      <Card style={styles.headerCard}>
        <View style={styles.header}>
          <Image
            source={{ uri: perfil.avatar }}
            style={styles.avatar}
            accessibilityLabel={`Foto de perfil de ${perfil.nombre}`}
          />
          <View style={styles.headerText}>
            <Text variant="headlineMedium" style={[styles.nombre, { color: '#000000' }]}>
              {perfil.nombre}
            </Text>
            <Text style={[styles.info, { color: '#666666' }]}>
              {perfil.rol}
            </Text>
          </View>
        </View>
      </Card>

      <Card style={styles.card}>
        <Card.Title
          title="Acerca de mí"
          titleStyle={[styles.cardTitle, { color: '#000000' }]}
          left={(props) => <MaterialCommunityIcons {...props} name="account-circle-outline" size={24} color='#000000' />}
        />
        <Card.Content>
          <Text style={[styles.bioText, { color: '#333333' }]}>
            {perfil.bio}
          </Text>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Title
          title="Información de contacto"
          titleStyle={[styles.cardTitle, { color: '#000000' }]}
          left={(props) => <MaterialCommunityIcons {...props} name="contacts-outline" size={24} color='#000000' />}
        />
        <Card.Content>
          <List.Item
            title={perfil.contacto.email}
            left={props => <List.Icon {...props} icon="email-outline" />}
            onPress={() => Linking.openURL(`mailto:${perfil.contacto.email}`)}
            style={styles.listItem}
          />
          <List.Item
            title={perfil.contacto.telefono}
            left={props => <List.Icon {...props} icon="phone-outline" />}
            onPress={() => Linking.openURL(`tel:${perfil.contacto.telefono}`)}
            style={styles.listItem}
          />
          <List.Item
            title="GitHub"
            description={perfil.contacto.github}
            left={props => <List.Icon {...props} icon="github" />}
            onPress={() => Linking.openURL(perfil.contacto.github)}
            style={styles.listItem}
          />
          <List.Item
            title="LinkedIn"
            description={perfil.contacto.linkedin}
            left={props => <List.Icon {...props} icon="linkedin" />}
            onPress={() => Linking.openURL(perfil.contacto.linkedin)}
            style={styles.listItem}
          />
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Title
          title="Habilidades"
          titleStyle={[styles.cardTitle, { color: '#000000' }]}
          left={(props) => <MaterialCommunityIcons {...props} name="tools" size={24} color='#000000' />}
        />
        <Card.Content style={styles.skillsContainer}>
          {perfil.habilidades.map((skill, index) => (
            <Chip key={index} style={[styles.chip, { backgroundColor: '#e0e0e0' }]} textStyle={{ color: '#000000' }}>
              {skill}
            </Chip>
          ))}
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
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  headerCard: {
    marginBottom: 20,
    borderRadius: 8,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
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
    fontSize: 22,
  },
  info: {
    fontSize: 14,
  },
  card: {
    marginBottom: 16,
    borderRadius: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  cardTitle: {
    fontWeight: 'bold',
  },
  bioText: {
    lineHeight: 22,
  },
  listItem: {
    paddingHorizontal: 0,
    paddingVertical: 4,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  chip: {
    backgroundColor: '#e0e0e0',
  },
  btnVolver: {
    marginTop: 25,
    marginBottom: 20,
    width: '100%',
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