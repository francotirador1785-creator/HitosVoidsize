import { useRouter } from "expo-router";
import React from "react";
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export default function Nosotros() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.push("/")}>
          <Image
            source={require("../../assets/Logo/LogoVoidsize.jpeg")}
            style={styles.logo}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Nosotros</Text>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => router.push("/")}
        >
          <Text style={styles.backTxt}>Volver</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Equipo:</Text>
        <Text style={styles.text}>Proyecto desarrollado por:</Text>
        <Text style={styles.names}>• Franco Fabián</Text>
        <Text style={styles.names}>• Aquiles Galvan</Text>
        <Text style={styles.names}>• Enzo Romero</Text>
        <Text style={styles.names}>• Santino Cichero</Text>
        <Text style={styles.names}>• Matias Santamaria</Text>
        <Text style={styles.subtext}>Materia: Emprendimiento Productivo</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F7F5E6" },
  header: {
    backgroundColor: "#3B6604",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  logo: { width: 50, height: 50, borderRadius: 25 },
  headerTitle: { color: "#FFF", fontSize: 22, fontWeight: "bold" },
  backBtn: {
    backgroundColor: "#5B8A83",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  backTxt: { color: "#FFF", fontWeight: "bold" },
  content: { padding: 40, alignItems: "center" },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#3B6604",
    marginBottom: 15,
  },
  text: { fontSize: 18, color: "#333", marginBottom: 10 },
  names: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#5B8A83",
    marginVertical: 5,
  },
  subtext: { fontSize: 16, color: "#666", marginTop: 20 },
});
