import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Mis Prácticas - Franco Fabián y Matias Santamaria
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
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#333",
    textAlign: "center",
    paddingHorizontal: 15,
  },
  menu: { gap: 15, width: "80%" },
  link: {
    fontSize: 18,
    color: "#0066cc",
    padding: 14,
    backgroundColor: "#fff",
    borderRadius: 8,
    textAlign: "center",
    elevation: 2,
  },
});
