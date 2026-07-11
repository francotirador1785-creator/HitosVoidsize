import { router } from "expo-router";
import { View, Text, Button } from "react-native";

export default function Home() {
  const pelicula = {
    titulo: "Interstellar",
    anio: "2014",
    genero: "Ciencia ficción",
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 24, marginBottom: 20 }}>
        App Películas
      </Text>

      <Button
        title="Ir a Película"
        onPress={() =>
          router.push({
            pathname: "/tp06/Pelicula",
            params: pelicula,
          })
        }
      />

      <View style={{ height: 15 }} />

      <Button
        title="Contacto"
        onPress={() => router.push("/tp06/Contacto")}
      />
    </View>
  );
}