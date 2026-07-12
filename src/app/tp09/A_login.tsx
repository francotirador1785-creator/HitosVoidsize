import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  StyleSheet,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const ingresar = async () => {
    try {
      const datos = await AsyncStorage.getItem("usuario");

      if (!datos) {
        Alert.alert("Error", "No hay usuarios registrados");
        return;
      }

      const usuario = JSON.parse(datos);

      if (
        usuario.email === email &&
        usuario.password === password
      ) {
        await AsyncStorage.setItem("sesion", "activa");

        router.replace("/tp09/A_home");
      } else {
        Alert.alert("Error", "Credenciales incorrectas");
      }
    } catch (error) {
      console.log(error);
      Alert.alert("Error", "Ocurrió un problema al iniciar sesión");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Login</Text>

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        autoCapitalize="none"
        keyboardType="email-address"
      />

      <TextInput
        placeholder="Contraseña"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={styles.input}
      />

      <Button title="Ingresar" onPress={ingresar} />

      <View style={{ marginTop: 10 }}>
        <Button
          title="Crear cuenta"
          onPress={() => router.replace("/tp09/A_register")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  titulo: {
    fontSize: 28,
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 15,
    padding: 10,
  },
});