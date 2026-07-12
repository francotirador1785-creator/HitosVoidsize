import { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";

export default function Home() {
  const [usuario, setUsuario] = useState("");

  useEffect(() => {
    cargarUsuario();
  }, []);

  const cargarUsuario = async () => {
    try {
      const datos = await AsyncStorage.getItem("usuario");

      if (datos !== null) {
        const user = JSON.parse(datos);
        setUsuario(user.email ?? "");
      }
    } catch (error) {
      console.log("Error al cargar usuario:", error);
    }
  };

  const cerrarSesion = async () => {
    try {
      await AsyncStorage.removeItem("sesion");
      router.replace("/tp09/A_login");
    } catch (error) {
      console.log("Error al cerrar sesión:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Bienvenido</Text>
      <Text style={styles.texto}>{usuario}</Text>

      <Button
        title="Cerrar sesión"
        onPress={cerrarSesion}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  titulo: {
    fontSize: 30,
    marginBottom: 20,
  },
  texto: {
    fontSize: 20,
    marginBottom: 20,
  },
});