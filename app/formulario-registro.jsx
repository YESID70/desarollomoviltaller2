import { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { Text, TextInput, Button, useTheme } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function Registro() {
  const router = useRouter();
  const { colors } = useTheme();

  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [confirmarContrasena, setConfirmarContrasena] = useState('');

  const handleRegistro = () => {
    if (!nombre || !email || !contrasena || !confirmarContrasena) {
      Alert.alert('Error de registro', 'Todos los campos son obligatorios.');
      return;
    }
    if (contrasena !== confirmarContrasena) {
      Alert.alert('Error de registro', 'Las contraseñas no coinciden.');
      return;
    }
    // Lógica para registrar al usuario
    Alert.alert('Registro exitoso', `Bienvenido al mundo de las motos, ${nombre}. Ahora puedes iniciar sesión.`);
    console.log('Usuario registrado:', { nombre, email });
    router.replace('/inicio-sesion');
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer} style={[styles.container, { backgroundColor: '#f5f5f5' }]}>
      <Text style={[styles.title, { color: '#000000' }]}>Crear una cuenta</Text>
      <Text style={[styles.subtitle, { color: '#666666' }]}>
        Únete a la comunidad de amantes de las motos
      </Text>

      <TextInput
        label="Nombre completo"
        value={nombre}
        onChangeText={setNombre}
        mode="outlined"
        style={styles.input}
        left={<TextInput.Icon icon="account" />}
      />

      <TextInput
        label="Correo electrónico"
        value={email}
        onChangeText={setEmail}
        mode="outlined"
        keyboardType="email-address"
        autoCapitalize="none"
        style={styles.input}
        left={<TextInput.Icon icon="email" />}
      />

      <TextInput
        label="Contraseña"
        value={contrasena}
        onChangeText={setContrasena}
        mode="outlined"
        secureTextEntry
        style={styles.input}
        left={<TextInput.Icon icon="lock" />}
      />

      <TextInput
        label="Confirmar contraseña"
        value={confirmarContrasena}
        onChangeText={setConfirmarContrasena}
        mode="outlined"
        secureTextEntry
        style={styles.input}
        left={<TextInput.Icon icon="lock-check" />}
      />

      <Button
        mode="contained"
        onPress={handleRegistro}
        style={styles.botonRegistro}
        labelStyle={styles.botonRegistroTexto}
      >
        Crear cuenta
      </Button>

      <View style={styles.loginContainer}>
        <Text style={{ color: '#000000' }}>¿Ya tienes una cuenta? </Text>
        <TouchableOpacity onPress={() => router.replace('/inicio-sesion')}>
          <Text style={{ color: '#000000', fontWeight: 'bold' }}>Inicia sesión</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    padding: 30,
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 40,
  },
  input: {
    marginBottom: 15,
  },
  botonRegistro: {
    borderRadius: 8,
    paddingVertical: 8,
    marginTop: 10,
    backgroundColor: '#000000',
  },
  botonRegistroTexto: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
});