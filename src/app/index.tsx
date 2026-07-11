import { Link } from "expo-router";
import { ScrollView, StyleSheet, Text, View, Pressable } from "react-native";

export default function Home() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>
        Mis Prácticas - Franco Fabián y Matías Santamaría
      </Text>

      <View style={styles.menu}>
        <Link href="/tp01/perfil" asChild>
          <Pressable style={styles.boton}>
            <Text style={styles.link}>👤 Ir a Perfil (TP01)</Text>
          </Pressable>
        </Link>

        <Link href="/tp02/saludo" asChild>
          <Pressable style={styles.boton}>
            <Text style={styles.link}>👋 Ir a Saludo (TP02)</Text>
          </Pressable>
        </Link>

        <Link href="/tp03/tresCajas" asChild>
          <Pressable style={styles.boton}>
            <Text style={styles.link}>🎨 Ir a las Tres Cajas (TP03)</Text>
          </Pressable>
        </Link>

        <Link href="/tp04/formulario" asChild>
          <Pressable style={styles.boton}>
            <Text style={styles.link}>📝 Ir al Formulario (TP04)</Text>
          </Pressable>
        </Link>

        <Link href="/tp05" asChild>
          <Pressable style={styles.boton}>
            <Text style={styles.link}>📊 Ir a la Lista de Usuarios (TP05)</Text>
          </Pressable>
        </Link>

        <Link href="/tp06/Navegador" asChild>
          <Pressable style={styles.boton}>
            <Text style={styles.link}>🎬 Ir a la Lista de Películas (TP06)</Text>
          </Pressable>
        </Link>

        <Link href="/tp07/aplicacion" asChild>
          <Pressable style={styles.boton}>
            <Text style={styles.link}>📱 Ir a la Aplicación (TP07)</Text>
          </Pressable>
        </Link>

        <Link href="/tp08" asChild>
          <Pressable style={styles.boton}>
            <Text style={styles.link}>🌙 Ir a Context API (TP08)</Text>
          </Pressable>
        </Link>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    paddingVertical: 20,
  },
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#333",
    textAlign: "center",
    paddingHorizontal: 15,
  },
  menu: {
    width: "80%",
    gap: 15,
  },
  boton: {
    backgroundColor: "#fff",
    padding: 14,
    borderRadius: 8,
  },
  link: {
    fontSize: 18,
    color: "#0066cc",
    textAlign: "center",
  },
});