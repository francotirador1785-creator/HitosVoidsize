import { router } from "expo-router";
import { View, Text, Button, StyleSheet } from "react-native";

export default function Contacto() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Contacto</Text>

      <Text style={styles.texto}>
        📧 matifrancocine@gmail.com
      </Text>

      <Text style={styles.texto}>
        📞 +54 11 6767-6677
      </Text>

      <Text style={styles.texto}>
        📍 Buenos Aires, Argentina
      </Text>

      <View style={{ marginTop: 20 }}>
        <Button
          title="Volver al Inicio"
          onPress={() => router.replace("/")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  texto: {
    fontSize: 18,
    marginBottom: 10,
  },
});