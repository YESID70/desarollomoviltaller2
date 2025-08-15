import { View, Image, StyleSheet } from 'react-native';
import { Text, Button, useTheme } from 'react-native-paper';
import { useRouter } from 'expo-router';

export default function Bienvenida() {
  const router = useRouter();
  const { colors } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: '#f5f5f5' }]}>
      <Image
        source={{ uri: 'https://placehold.co/200x200/000000/ffffff.png' }}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={[styles.title, { color: '#000000' }]}>¡Bienvenido al mundo de las motos!</Text>
      <Text style={[styles.subtitle, { color: '#666666' }]}>
        Descubre modelos, servicios y más
      </Text>
      <Button
        mode="contained"
        style={[styles.button, { backgroundColor: '#000000' }]}
        contentStyle={styles.buttonContent}
        labelStyle={styles.buttonLabel}
        onPress={() => router.replace('/inicio-sesion')}
      >
        Empezar
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
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 40,
    borderRadius: 100,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 40,
  },
  button: {
    width: '80%',
    borderRadius: 8,
  },
  buttonContent: {
    paddingVertical: 8,
  },
  buttonLabel: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});