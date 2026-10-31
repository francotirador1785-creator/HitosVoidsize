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
      title: "Hito 1",
      route: "/Hito1/ModeloNegocio",
    },
    {
      id: 2,
      title: "Hito 2",
      route: "/Hito2/MapaEmpatiayFoda",
    },
    { id: 3, title: "Hito 3", route: "/Hito3/ElevatorPitch" },
    {
      id: 4,
      title: "Hito 4",
      route: "/Hito4/MisionVisionValores",
    },
    { id: 5, title: "Hito 5", route: "/Hito5/TamSamSom" },
    { id: 6, title: "Hito 6", route: "/Hito6/Mvp" },
    {
      id: 7,
      title: "Hito 7",
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
        {/* Logo gigante de fondo transparente detrás de los botones */}
        <View style={styles.backgroundLogoContainer} pointerEvents="none">
          <Image
            source={require("../../assets/Logo/LogoVoidsize.jpeg")}
            style={styles.backgroundLogo}
            resizeMode="contain"
          />
        </View>

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
    zIndex: 10,
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
    fontSize: 35,
    fontWeight: "900",
    textDecorationLine: "underline",
    letterSpacing: 0.5,
  },
  activeNav: { opacity: 1 },
  scrollContent: {
    flexGrow: 1,
    paddingVertical: 35,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  backgroundLogoContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 0,
  },
  backgroundLogo: {
    width: "70%",
    height: "70%",
    opacity: 0.8,
  },
  buttonsContainer: {
    width: "100%",
    maxWidth: 550,
    alignItems: "center",
    gap: 16,
    paddingHorizontal: 20,
    zIndex: 1,
  },
  hitoButton: {
    backgroundColor: "#5B8A83",
    width: "100%",
    paddingVertical: 25,
    paddingHorizontal: 26,
    borderRadius: 30,
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
    fontSize: 35, // Texto grande y destacado como querías
    fontWeight: "900",
    letterSpacing: 1.2,
    textAlign: "center",
  },
});
