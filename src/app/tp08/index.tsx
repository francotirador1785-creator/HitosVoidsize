import React, { useContext } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

import { ProveedorTema, ContextoTema } from "./ContextoTema";
import { ProveedorAuth, ContextoAuth } from "./ContextoAuth";

function PantallaLogin() {
  const contexto = useContext(ContextoAuth);

  if (!contexto) return null;

  const { iniciarSesion } = contexto;

  return (
    <View style={estilos.contenedor}>
      <Text style={estilos.titulo}>Context API</Text>

      <Button
        title="Iniciar sesión"
        onPress={() => iniciarSesion("Matías")}
      />
    </View>
  );
}

function PantallaInicio() {
  const auth = useContext(ContextoAuth);
  const temaContexto = useContext(ContextoTema);

  if (!auth || !temaContexto) return null;

  const { usuario, cerrarSesion } = auth;
  const { tema, cambiarTema } = temaContexto;

  return (
    <View
      style={[
        estilos.contenedor,
        {
          backgroundColor: tema === "claro" ? "#FFFFFF" : "#333333",
        },
      ]}
    >
      <Text
        style={{
          color: tema === "claro" ? "#000000" : "#FFFFFF",
          fontSize: 24,
          marginBottom: 20,
        }}
      >
        Bienvenido {usuario?.nombre}
      </Text>

      <Text
        style={{
          color: tema === "claro" ? "#000000" : "#FFFFFF",
          fontSize: 18,
          marginBottom: 20,
        }}
      >
        Tema actual: {tema}
      </Text>

      <Button
        title="Cambiar tema"
        onPress={cambiarTema}
      />

      <View style={{ height: 20 }} />

      <Button
        title="Cerrar sesión"
        onPress={cerrarSesion}
      />
    </View>
  );
}

function Principal() {
  const auth = useContext(ContextoAuth);

  if (!auth) return null;

  return auth.usuario ? <PantallaInicio /> : <PantallaLogin />;
}

function Aplicacion() {
  return (
    <ProveedorTema>
      <Principal />
    </ProveedorTema>
  );
}

export default function App() {
  return (
    <ProveedorAuth>
      <Aplicacion />
    </ProveedorAuth>
  );
}

const estilos = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  titulo: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 30,
  },
});