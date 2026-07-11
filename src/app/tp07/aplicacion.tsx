import React, { useState } from "react";
import { View, Text, Button } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function Login({ onLogin }: { onLogin: () => void }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 25, marginBottom: 20 }}>Login</Text>
      <Button title="Ingresar" onPress={onLogin} />
    </View>
  );
}

function Inicio() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Inicio</Text>
    </View>
  );
}

function Perfil() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Perfil</Text>
    </View>
  );
}

function Configuracion() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Configuración</Text>
    </View>
  );
}

function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Inicio" component={Inicio} />
      <Tab.Screen name="Perfil" component={Perfil} />
      <Tab.Screen name="Configuración" component={Configuracion} />
    </Tab.Navigator>
  );
}

function Menu({ salir }: { salir: () => void }) {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Principal" component={Tabs} />
      <Drawer.Screen name="Salir">
        {() => (
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Button title="Cerrar sesión" onPress={salir} />
          </View>
        )}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
}

export default function Aplicacion() {
  const [login, setLogin] = useState(false);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {login ? (
        <Stack.Screen name="App">
          {() => <Menu salir={() => setLogin(false)} />}
        </Stack.Screen>
      ) : (
        <Stack.Screen name="Login">
          {() => <Login onLogin={() => setLogin(true)} />}
        </Stack.Screen>
      )}
    </Stack.Navigator>
  );
}