/* import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  FlatList,
} from "react-native";

// Definimos la estructura que TypeScript espera de cada usuario que viene de la API
interface Usuario {
  id: number;
  name: string;
  email: string;
  username: string;
}

export default function TP05() {
  // 1. Estados iniciales exigidos por la cátedra
  const [data, setData] = useState<Usuario[]>([]);
  const [loading, setLoading] = useState(true);

  // 2. useEffect con array de dependencias vacío para evitar bucles infinitos
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        console.log("Datos recibidos de la API:", json);
        setData(json); // Guardamos la lista de usuarios
        setLoading(false); // Apagamos el rulo de carga
      })
      .catch((error) => {
        console.error("Error al obtener datos:", error);
        setLoading(false); // Apagamos la carga incluso si hay error para no tildar la app
      });
  }, []); // <-- Candado crítico exigido por la profe

  // 3. Interfaz condicional: Si está cargando, muestra el ActivityIndicator nativo
  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#0066cc" />
        <Text style={styles.loadingText}>Cargando usuarios de la API...</Text>
      </View>
    );
  }

  // 4. Interfaz final: Renderiza los datos obtenidos de internet de forma prolija
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Usuarios Cargados: {data.length}</Text>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.tarjetaUsuario}>
            <Text style={styles.nombre}>{item.name}</Text>
            <Text style={styles.detalle}>
              @{item.username} | {item.email}
            </Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f4f4f6", padding: 20 },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f4f4f6",
  },
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#333",
    textAlign: "center",
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: "#666",
    fontStyle: "italic",
  },
  tarjetaUsuario: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    marginBottom: 10,
    elevation: 2,
  },
  nombre: { fontSize: 18, fontWeight: "bold", color: "#111" },
  detalle: { fontSize: 14, color: "#666", marginTop: 4 },
}); */
