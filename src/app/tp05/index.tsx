import React, { useEffect, useState } from "react";
import { View, Text, ActivityIndicator, StyleSheet, ScrollView } from "react-native";

interface Usuario {
  id: number;
  name: string;
  username: string;
  email: string;
}

// Lista de nombres y apellidos comunes en español para reemplazar los de la API
const nombresComunes = [
  { name: "Juan Pérez", username: "juanito" },
  { name: "María García", username: "mariag" },
  { name: "Carlos Rodríguez", username: "carlitos" },
  { name: "Ana Martínez", username: "anam" },
  { name: "Luis López", username: "luis_l" },
  { name: "Laura González", username: "laurita" },
  { name: "José Hernández", username: "jose_h" },
  { name: "Sofía Gómez", username: "sofig" },
  { name: "Diego Fernández", username: "dieguito" },
  { name: "Lucía Díaz", username: "lucia_d" },
];

export default function App() {
  const [data, setData] = useState<Usuario[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json: Usuario[]) => {
        // Modificamos los usuarios antes de guardarlos en el estado
        const usuariosModificados = json.map((usuario, index) => {
          // Usamos el index para asignarle un nombre de nuestra lista común
          const reemplazo = nombresComunes[index] || { name: usuario.name, username: usuario.username };
          
          return {
            ...usuario,
            name: reemplazo.name,
            username: reemplazo.username,
            // Opcional: adaptamos el email al nuevo nombre
            email: `${reemplazo.username}@gmail.com`, 
          };
        });

        setData(usuariosModificados);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al obtener datos:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="blue" />
        <Text>Cargando usuarios...</Text>
      </View>
    );
  }

  return (
    // Cambié View por ScrollView por si los 10 usuarios no caben en tu pantalla
    <ScrollView style={styles.container}>
      <Text style={styles.title}>
        Usuarios cargados: {data.length}
      </Text>

      {data.map((usuario) => (
        <View key={usuario.id} style={styles.card}>
          <Text style={styles.name}>{usuario.name}</Text>
          <Text>@{usuario.username}</Text>
          <Text>{usuario.email}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#f2f2f2",
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  name: {
    fontWeight: "bold",
    fontSize: 18,
  },
});