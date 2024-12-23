import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Image } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/AppNavigator";

// Definir el tipo para la navegación
type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, "HomeScreen">;

const HomeScreen = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");

  // Tipar el hook de navegación
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const handleNavigate = () => {
    navigation.navigate("Detail", { nombre, apellido });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Formulario</Text>
      <TextInput
        placeholder="Nombre"
        style={styles.input}
        value={nombre}
        onChangeText={setNombre}
      />
      <TextInput
        placeholder="Apellido"
        style={styles.input}
        value={apellido}
        onChangeText={setApellido}
      />
      <Button title="Enviar" onPress={handleNavigate} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  title: { fontSize: 24, marginBottom: 20, textAlign: "center" },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 15,
    padding: 10,
    fontSize: 16,
  },
});

export default HomeScreen;
