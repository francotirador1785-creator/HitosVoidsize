import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Image,
  Alert,
  ScrollView,
  StyleSheet,
} from "react-native";

import * as ImagePicker from "expo-image-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState("");
  const [categoria, setCategoria] = useState("");
  const [imagen, setImagen] = useState<string | null>(null);

  const seleccionarImagen = async () => {
    const permiso = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permiso.status !== "granted") {
      Alert.alert("Permiso denegado", "Se necesita permiso para acceder a la galería.");
      return;
    }

    const resultado = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaType.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!resultado.canceled) {
      setImagen(resultado.assets[0].uri);
    }
  };

  const guardarProducto = async () => {
    if (
      nombre.trim() === "" ||
      descripcion.trim() === "" ||
      precio.trim() === "" ||
      categoria.trim() === ""
    ) {
      Alert.alert("Error", "Todos los campos son obligatorios");
      return;
    }

    if (isNaN(Number(precio)) || Number(precio) <= 0) {
      Alert.alert("Error", "Ingrese un precio válido");
      return;
    }

    const producto = {
      id: Date.now(),
      nombre,
      descripcion,
      precio,
      categoria,
      imagen,
    };

    try {
      const productosGuardados = await AsyncStorage.getItem("productos");

      const lista = productosGuardados
        ? JSON.parse(productosGuardados)
        : [];

      lista.push(producto);

      await AsyncStorage.setItem(
        "productos",
        JSON.stringify(lista)
      );

      Alert.alert("Éxito", "Producto guardado correctamente");

      setNombre("");
      setDescripcion("");
      setPrecio("");
      setCategoria("");
      setImagen(null);
    } catch (error) {
      Alert.alert("Error", "No se pudo guardar el producto.");
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Crear Producto</Text>

      <Text>Nombre</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre del producto"
        value={nombre}
        onChangeText={setNombre}
      />

      <Text>Descripción</Text>
      <TextInput
        style={[styles.input, { height: 90 }]}
        multiline
        placeholder="Descripción"
        value={descripcion}
        onChangeText={setDescripcion}
      />

      <Text>Precio</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Precio"
        value={precio}
        onChangeText={setPrecio}
      />

      <Text>Categoría</Text>
      <TextInput
        style={styles.input}
        placeholder="Categoría"
        value={categoria}
        onChangeText={setCategoria}
      />

      <View style={{ marginBottom: 20 }}>
        <Button
          title="Seleccionar Imagen"
          onPress={seleccionarImagen}
        />
      </View>

      {imagen && (
        <Image
          source={{ uri: imagen }}
          style={styles.imagen}
        />
      )}

      <Button
        title="Guardar Producto"
        onPress={guardarProducto}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 40,
  },

  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
  },

  imagen: {
    width: 220,
    height: 220,
    borderRadius: 10,
    alignSelf: "center",
    marginBottom: 20,
  },
});