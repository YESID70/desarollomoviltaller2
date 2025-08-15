import { ScrollView, StyleSheet } from 'react-native';
import { List, Text, useTheme } from 'react-native-paper';
import { useRouter } from 'expo-router';

export default function Index() {
  const router = useRouter();
  const { colors } = useTheme();

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.header, { color: colors.onBackground }]}>Pantallas</Text>
      
      <List.Section>
        <List.Item
          title="Autor"
          left={() => <List.Icon icon="account-tie" />}
          style={[styles.listItem, { backgroundColor: colors.surface, borderColor: colors.outline }]}
          titleStyle={styles.listItemTitle}
          onPress={() => router.push('/autor')}
        />
        <List.Item
          title="Login"
          left={() => <List.Icon icon="login" />}
          style={[styles.listItem, { backgroundColor: colors.surface, borderColor: colors.outline }]}
          titleStyle={styles.listItemTitle}
          onPress={() => router.push('/inicio-sesion')}
        />
        <List.Item
          title="Registro"
          left={() => <List.Icon icon="account-plus" />}
          style={[styles.listItem, { backgroundColor: colors.surface, borderColor: colors.outline }]}
          titleStyle={styles.listItemTitle}
          onPress={() => router.push('/formulario-registro')}
        />
        <List.Item
          title="Pantalla Principal"
          left={() => <List.Icon icon="home" />}
          style={[styles.listItem, { backgroundColor: colors.surface, borderColor: colors.outline }]}
          titleStyle={styles.listItemTitle}
          onPress={() => router.push('/pantalla-principal')}
        />
        <List.Item
          title="Inicio"
          left={() => <List.Icon icon="view-dashboard" />}
          style={[styles.listItem, { backgroundColor: colors.surface, borderColor: colors.outline }]}
          titleStyle={styles.listItemTitle}
          onPress={() => router.push('/home')}
        />
        <List.Item
          title="Lista de Elementos"
          left={() => <List.Icon icon="list-box" />}
          style={[styles.listItem, { backgroundColor: colors.surface, borderColor: colors.outline }]}
          titleStyle={styles.listItemTitle}
          onPress={() => router.push('/lista-elementos')}
        />
        <List.Item
          title="Lista de Servicios"
          left={() => <List.Icon icon="briefcase" />}
          style={[styles.listItem, { backgroundColor: colors.surface, borderColor: colors.outline }]}
          titleStyle={styles.listItemTitle}
          onPress={() => router.push('/lista-servicios')}
        />
        <List.Item
          title="Lista de Usuarios"
          left={() => <List.Icon icon="account-group" />}
          style={[styles.listItem, { backgroundColor: colors.surface, borderColor: colors.outline }]}
          titleStyle={styles.listItemTitle}
          onPress={() => router.push('/lista-usuarios')}
        />
        <List.Item
          title="Ajustes"
          left={() => <List.Icon icon="cog" />}
          style={[styles.listItem, { backgroundColor: colors.surface, borderColor: colors.outline }]}
          titleStyle={styles.listItemTitle}
          onPress={() => router.push('/configuracion')}
        />
      </List.Section>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  listItem: {
    marginBottom: 12,
    borderRadius: 12,
    borderWidth: 1,
  },
  listItemTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
});