import { StyleSheet, Text, View } from "react-native";

export default function Perfil() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Nombre: Franco Fabian</Text>
      <Text style={styles.texto}>Edad: 18</Text>
      <Text style={styles.texto}>Curso: 7mo 1ra Programacion</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  texto: { fontSize: 18, marginBottom: 10, color: "#333" },
});
