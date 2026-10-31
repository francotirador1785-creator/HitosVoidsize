import { useRouter } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function HitoScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Banner Superior con Título y Botón Volver */}
      <View style={styles.banner}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.push("/")}
        >
          <Text style={styles.backText}>← Volver</Text>
        </TouchableOpacity>
        <Text style={styles.bannerTitle}>Hito 5: TAM, SAM y SOM</Text>
      </View>

      {/* Contenedor de la Imagen */}
      <View style={styles.imageContainer}>
        <Image
          source={require("../../../assets/images/TamSamySom.jpeg")}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F7F5E6" },
  banner: {
    backgroundColor: "#3B6604",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
    elevation: 4,
  },
  backButton: {
    backgroundColor: "#5B8A83",
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 8,
  },
  backText: { color: "#fff", fontWeight: "bold", fontSize: 14 },
  bannerTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 20,
    flex: 1,
    textAlign: "center",
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  image: { width: "100%", height: "100%" },
});
