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

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registrar = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Complete todos los campos");
      return;
    }

    const regex = /\S+@\S+\.\S+/;

    if (!regex.test(email)) {
      Alert.alert("Error", "Email inválido");
      return;
    }

    if (password.length < 4) {
      Alert.alert(
        "Error",
        "La contraseña debe tener al menos 4 caracteres"
      );
      return;
    }

    try {
      const usuario = {
        email,
        password,
      };

      await AsyncStorage.setItem(
        "usuario",
        JSON.stringify(usuario)
      );

      Alert.alert("Éxito", "Usuario registrado");

      router.replace("/tp09/A_login");
    } catch (error) {
      Alert.alert("Error", "No se pudo registrar el usuario");
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Registro</Text>

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

      <Button title="Registrarse" onPress={registrar} />

      <View style={{ marginTop: 10 }}>
        <Button
          title="Ir al Login"
          onPress={() => router.replace("/tp09/A_login")}
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