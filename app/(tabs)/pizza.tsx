import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Switch,
  Button,
  Alert,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import Slider from "@react-native-community/slider";

const Pizza = () => {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [sexo, setSexo] = useState();
  const [valor, setValor] = useState(0);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const createdAccount = () => {
    Alert.alert(
      "Conta criada",
      `Nome: ${nome}, Idade: ${idade}, Sexo: ${
        sexo === 1 ? "Feminino" : "Masculino"
      }, Limite: ${valor.toFixed(0)}, Estudante: ${isEnabled ? "Sim" : "Nao"}`,
      [{ text: "OK" }]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Banco Anna</Text>

      <TextInput
        value={nome}
        onChangeText={(name) => setNome(name)}
        style={styles.input}
        placeholder="Digite seu nome"
      />

      <TextInput
        value={idade}
        onChangeText={(idade) => setIdade(idade)}
        style={styles.input}
        placeholder="Digite sua idade"
        keyboardType="numeric"
      />

      <Picker
        selectedValue={sexo}
        onValueChange={(itemValue) => setSexo(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Feminino" value="1" key={1} />
        <Picker.Item label="Masculino" value="2" key={2} />
      </Picker>

      <Text style={{ textAlign: "center", fontWeight: "bold" }}>
        Seu Limite:
      </Text>
      <Slider
        minimumValue={0}
        maximumValue={100}
        onValueChange={(v) => setValor(v)}
        value={valor}
        minimumTrackTintColor="#00FF00"
        maximumTrackTintColor="#FF0000"
      />
      <Text style={styles.valor}>Valor selecionado: {valor.toFixed(0)}</Text>

      <View style={styles.switchContainer}>
        <Text style={styles.switchText}>Estudante: </Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>

      <Button
        title="Abrir a Conta"
        disabled={!nome || !idade}
        onPress={createdAccount}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 28,
    padding: 20,
  },

  title: {
    textAlign: "center",
    fontWeight: "700",
    margin: 10,
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
  },

  picker: {
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "#00ff00",
  },

  valor: {
    fontSize: 12,
    textAlign: "center",
    fontWeight: "bold",
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center", // Alinha os elementos no centro
    marginVertical: 10, // Ajusta o espaço vertical entre o Switch e outros componentes
  },

  switchText: {
    marginRight: 10, // Espaçamento entre o texto e o Switch
    fontSize: 16, // Tamanho da fonte do texto
  },
});

export default Pizza;
