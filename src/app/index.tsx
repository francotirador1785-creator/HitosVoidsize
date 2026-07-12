import { Link } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function Home() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>
        Mis Prácticas - Franco Fabián y Matías Santamaría
      </Text>

      <View style={styles.menu}>
        <Link href="/tp01/perfil" style={styles.link}>
          👤 Ir a Perfil (TP01)
        </Link>

        <Link href="/tp02/saludo" style={styles.link}>
          👋 Ir a Saludo (TP02)
        </Link>

        <Link href="/tp03/tresCajas" style={styles.link}>
          🎨 Ir a las Tres Cajas (TP03)
        </Link>

        <Link href="/tp04/formulario" style={styles.link}>
          📝 Ir al Formulario (TP04)
        </Link>

        <Link href="/tp05" style={styles.link}>
          📊 Ir a la Lista de Usuarios (TP05)
        </Link>

        <Link href="/tp06/Navegador" style={styles.link}>
          🎬 Ir a la Lista de Películas (TP06)
        </Link>

        <Link href="/tp07/aplicacion" style={styles.link}>
          📱 Ir a la Aplicación (TP07)
        </Link>

           <Link href="/tp08" style={styles.link}>
          🌙 Ir a Context API (TP08)
        </Link>
        <Link href={"/tp09/A_index"} style={styles.link}>
          🔐 Ir a AsyncStorage (TP09)
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
    rowGap: 15,
  },
  link: {
    fontSize: 18,
    color: "#0066cc",
    padding: 14,
    backgroundColor: "#fff",
    borderRadius: 8,
    textAlign: "center",
  },
});