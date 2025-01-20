import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";

const Pizza = () => {
    const [pizza, setPizza] = useState<"1" | "2" | "3" | "4">("1");
    const pizzaNames: { [key in "1" | "2" | "3" | "4"]: string } = {
      "1": "Calabresa",
      "2": "Mussarela",
      "3": "Brigadeiro",
      "4": "Frango",
    };
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Menu Pizza</Text>
      <Picker
        selectedValue={pizza}
        onValueChange={(itemValue) => setPizza(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Calabresa" value="1" key={1} />
        <Picker.Item label="Mussarela" value="2" key={2} />
        <Picker.Item label="Brigadeiro" value="3" key={3} />
        <Picker.Item label="Frango" value="4" key={4} />
      </Picker>
      <Text style={styles.pizzas}>Você escolheu: Pizza {pizzaNames[pizza]}</Text>
      <Text style={styles.pizzas}>R$: 59,99</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 28,
    padding: 20,
  },
  logo: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  pizzas: {
    marginTop: 20,
    fontSize: 18,
    textAlign: "center",
  },
  picker: {
    marginHorizontal: 10,
  },
});

export default Pizza;
