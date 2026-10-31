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

export default function IndexScreen() {
  const router = useRouter();

  const hitos = [
    {
      id: 1,
      title: "Hito 1: Modelo de Negocio Canvas y FODA",
      route: "/Hito1/ModeloNegocio",
    },
    {
      id: 2,
      title: "Hito 2: Mapa de Empatía y Propuesta de Valor",
      route: "/Hito2/MapaEmpatiayFoda",
    },
    { id: 3, title: "Hito 3: Elevator Pitch", route: "/Hito3/ElevatorPitch" },
    {
      id: 4,
      title: "Hito 4: Misión, Visión y Valores",
      route: "/Hito4/MisionVisionValores",
    },
    { id: 5, title: "Hito 5: TAM, SAM y SOM", route: "/Hito5/TamSamSom" },
    { id: 6, title: "Hito 6: MVP", route: "/Hito6/Mvp" },
    {
      id: 7,
      title: "Hito 7: Gestión de Costos y Recursos",
      route: "/Hito7/GestionRecursosCostos",
    },
  ];

  return (
    <View style={styles.mainContainer}>
      <View style={styles.header}>
        <Image
          source={require("../../assets/Logo/LogoVoidsize.jpeg")}
          style={styles.logo}
          resizeMode="contain"
        />
        <View style={styles.navLinks}>
          <TouchableOpacity onPress={() => router.push("/")}>
            <Text style={[styles.navText, styles.activeNav]}>Hitos</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push("/SobreVoidsize")}>
            <Text style={styles.navText}>Sobre Voidsize</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push("/Nosotros")}>
            <Text style={styles.navText}>Nosotros</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.buttonsContainer}>
          {hitos.map((hito) => (
            <TouchableOpacity
              key={hito.id}
              style={styles.hitoButton}
              activeOpacity={0.8}
              onPress={() => router.push(hito.route as any)}
            >
              <Text style={styles.hitoButtonText}>{hito.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: { flex: 1, backgroundColor: "#F7F5E6" },
  header: {
    backgroundColor: "#3B6604",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 12,
    elevation: 4,
  },
  logo: { width: 55, height: 55, borderRadius: 28 },
  navLinks: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    flex: 1,
    marginLeft: 15,
  },
  navText: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "900",
    textDecorationLine: "underline",
    letterSpacing: 0.5,
  },
  activeNav: { opacity: 1 },
  scrollContent: { paddingVertical: 35, alignItems: "center" },
  buttonsContainer: {
    width: "100%",
    maxWidth: 550,
    alignItems: "center",
    gap: 16,
    paddingHorizontal: 20,
  },
  hitoButton: {
    backgroundColor: "#5B8A83",
    width: "100%",
    paddingVertical: 14,
    paddingHorizontal: 15,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 3,
  },
  hitoButtonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "900",
    letterSpacing: 0.5,
    textAlign: "center",
  },
});
