import { useLocalSearchParams, router } from "expo-router";
import { View, Text, Button, StyleSheet, Image } from "react-native";

export default function Pelicula() {
  const { titulo, anio, genero } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Detalle de la Película</Text>

      <Image
        source={{
          // Imagen pública y estable de Interstellar en Unsplash
          uri: "https://revistaatticus.es/wp-content/uploads/2014/11/WCartel-pelicula-Interstellar-Interestelar.jpg",
        }}
        style={styles.portada}
        resizeMode="cover"
      />

      {/* Contenedor interno para asegurar que el bloque de texto también esté centrado */}
      <View style={styles.infoContainer}>
        <Text style={styles.texto}>🎬 Título: {titulo || "Interstellar"}</Text>
        <Text style={styles.texto}>📅 Año: {anio || "2014"}</Text>
        <Text style={styles.texto}>🎭 Género: {genero || "Ciencia Ficción"}</Text>
      </View>

      <View style={styles.boton}>
        <Button title="Volver" onPress={() => router.back()} color="#6200ee" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#212121",
    textAlign: "center",
  },
  portada: {
    width: 220,
    height: 330,
    borderRadius: 10,
    marginBottom: 24,
    backgroundColor: "#e0e0e0",
  },
  infoContainer: {
    alignItems: "center", // Centra los textos uno respecto al otro
    marginBottom: 20,
  },
  texto: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: "center", // Centra el texto internamente
    color: "#424242",
  },
  boton: {
    marginTop: 10,
    width: "50%",
  },
});