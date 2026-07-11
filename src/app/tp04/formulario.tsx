import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function TP04() {
  const [nombre, setNombre] = useState("");
  const [password, setPassword] = useState("");

  const mostrarBienvenida = nombre.trim() !== "" && password.trim() !== "";

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Formulario de Acceso (TP04)</Text>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Nombre:</Text>
        <TextInput
          style={styles.input}
          placeholder="Escribí tu nombre..."
          value={nombre}
          onChangeText={setNombre}
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Contraseña:</Text>
        <TextInput
          style={styles.input}
          placeholder="Escribí tu contraseña..."
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
      </View>

      {mostrarBienvenida && (
        <View style={styles.cartel}>
          <Text style={styles.textoCartel}>¡Hola, {nombre}! 👋</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f6",
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  titulo: { fontSize: 24, fontWeight: "bold", marginBottom: 32 },
  inputGroup: { width: "100%", marginBottom: 20 },
  label: { fontSize: 16, fontWeight: "600", marginBottom: 8 },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#d1d1d6",
    borderRadius: 8,
    paddingHorizontal: 16,
  },
  cartel: {
    marginTop: 24,
    width: "100%",
    padding: 16,
    backgroundColor: "#e3f2fd",
    borderRadius: 8,
    alignItems: "center",
  },
  textoCartel: { fontSize: 18, fontWeight: "bold", color: "#0d47a1" },
});
