import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function TresCajas() {
  const [cajaSeleccionada, setCajaSeleccionada] = useState<number | null>(null);

  const toggleCaja = (id: number) => {
    setCajaSeleccionada(cajaSeleccionada === id ? null : id);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Estilización con StyleSheet (TP03)</Text>

      <View style={styles.contenedorCajas}>
        <Pressable onPress={() => toggleCaja(1)}>
          <View
            style={[
              styles.caja,
              styles.roja,
              cajaSeleccionada === 1 && styles.activa,
            ]}
          />
        </Pressable>

        <Pressable onPress={() => toggleCaja(2)}>
          <View
            style={[
              styles.caja,
              styles.verde,
              cajaSeleccionada === 2 && styles.activa,
            ]}
          />
        </Pressable>

        <Pressable onPress={() => toggleCaja(3)}>
          <View
            style={[
              styles.caja,
              styles.azul,
              cajaSeleccionada === 3 && styles.activa,
            ]}
          />
        </Pressable>
      </View>

      <Text style={styles.textoEstado}>
        {cajaSeleccionada
          ? `Caja ${cajaSeleccionada} activa`
          : "Ninguna caja activa"}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e0e0e0",
    alignItems: "center",
    justifyContent: "center",
  },
  titulo: { fontSize: 20, fontWeight: "bold", marginBottom: 20 },
  contenedorCajas: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "95%",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
  },
  caja: { width: 80, height: 80, borderRadius: 8 },
  roja: { backgroundColor: "#ff4444" },
  verde: { backgroundColor: "#00c851" },
  azul: { backgroundColor: "#33b5e5" },
  activa: { backgroundColor: "#aa66cc", borderWidth: 3 },
  textoEstado: { fontSize: 18, marginTop: 15, fontStyle: "italic" },
});
