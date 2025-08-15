import React from 'react';
import { View, StyleSheet, TouchableOpacity, Alert, Image } from 'react-native';
import { TextInput, Button, Text, useTheme } from 'react-native-paper';
import { useRouter } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import usuarios from '../assets/usuarios.json'; 

export default function InicioSesion() {
  const router = useRouter();
  const { colors } = useTheme();
  const [correo, setCorreo] = React.useState('');
  const [clave, setClave] = React.useState('');

  const iniciarSesion = () => {
    // Validar campos vacíos primero
    if (!correo || !clave) {
      Alert.alert('Error de inicio de sesión', 'Por favor, ingresa tu correo y contraseña.');
      return;
    }

    const usuario = usuarios.find((u) => u.email === correo);

    if (!usuario) {
      Alert.alert('Error de inicio de sesión', 'Credenciales Incorrectas.');
      return;
    }

    if (usuario.clave !== clave) {
      Alert.alert('Error de inicio de sesión', 'El correo o la contraseña son incorrectos.');
      return;
    }

    Alert.alert('¡Bienvenido!', `Sesión iniciada como: ${usuario.nombre}`);
    console.log('Sesión iniciada por:', usuario.nombre);
    // Aquí puedes redirigir al usuario a la página principal
    // router.replace('/home'); 
  };

  return (
    <View style={styles.contenedor}>
      <View style={styles.header}>
        {/* Puedes reemplazar esto con un logo real */}
        <Image 
          source={{ uri: 'https://placehold.co/100x100/000000/ffffff.png' }} 
          style={styles.logo} 
        />
        <Text variant="headlineSmall" style={[styles.titulo, { color: '#000000' }]}>
          Bienvenido de nuevo
        </Text>
        <Text variant="bodyMedium" style={[styles.subtitulo, { color: '#666666' }]}>
          Inicia sesión para continuar
        </Text>
      </View>

      <TextInput
        label="Correo electrónico"
        value={correo}
        onChangeText={setCorreo}
        mode="outlined"
        keyboardType="email-address"
        autoCapitalize="none"
        style={styles.campo}
        left={<TextInput.Icon icon="email-outline" />}
      />

      <TextInput
        label="Contraseña"
        value={clave}
        onChangeText={setClave}
        mode="outlined"
        secureTextEntry
        style={styles.campo}
        left={<TextInput.Icon icon="lock-outline" />}
      />

      <TouchableOpacity style={styles.olvidoClave}>
        <Text style={{ color: '#000000', fontWeight: 'bold' }}>¿Olvidaste tu contraseña?</Text>
      </TouchableOpacity>

      <Button
        mode="contained"
        onPress={iniciarSesion}
        style={[styles.botonIniciar, { backgroundColor: '#000000' }]}
        labelStyle={[styles.botonIniciarTexto, { color: '#ffffff' }]}
      >
        Iniciar sesión
      </Button>

      <View style={styles.divisorContainer}>
        <View style={[styles.linea, { backgroundColor: '#e0e0e0' }]} />
        <Text style={[styles.divisorTexto, { color: '#999999' }]}>o</Text>
        <View style={[styles.linea, { backgroundColor: '#e0e0e0' }]} />
      </View>

      <View style={styles.socialButtonsContainer}>
        <TouchableOpacity style={[styles.socialIcono, { borderColor: '#000000' }]} onPress={() => console.log('Iniciar sesión con Google')}>
          <MaterialCommunityIcons name="google" size={24} color="#000000" />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.socialIcono, { borderColor: '#000000' }]} onPress={() => console.log('Iniciar sesión con Apple')}>
          <MaterialCommunityIcons name="apple" size={24} color="#000000" />
        </TouchableOpacity>
      </View>

      <View style={styles.registroContainer}>
        <Text>¿No tienes una cuenta? </Text>
        <TouchableOpacity onPress={() => router.push('/registro')}>
          <Text style={{ color: '#000000', fontWeight: 'bold' }}>Regístrate</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    padding: 30,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: '#000000',
  },
  titulo: {
    fontWeight: 'bold',
  },
  subtitulo: {
    marginTop: 5,
  },
  campo: {
    marginBottom: 15,
  },
  olvidoClave: {
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  botonIniciar: {
    borderRadius: 8,
    paddingVertical: 8,
    marginBottom: 20,
  },
  botonIniciarTexto: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  divisorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  linea: {
    flex: 1,
    height: 1,
  },
  divisorTexto: {
    width: 20,
    textAlign: 'center',
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  socialIcono: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    marginHorizontal: 10,
  },
  registroContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
  },
});