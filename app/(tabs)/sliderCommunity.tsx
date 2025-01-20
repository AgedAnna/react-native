// import Slider from "@react-native-community/slider";
// import { Picker } from "@react-native-picker/picker";
// import React, { useState } from "react";
// import { View, Text, StyleSheet, Switch } from "react-native";

// const sliderCommunity = () => {
//   const [valor, setValor] = useState(0);
//   const [isActive, setIsActive] = useState(false);
//   const [pizza, setPizza] = useState<"1" | "2" | "3" | "4">("1");
//   const pizzaNames: { [key in "1" | "2" | "3" | "4"]: string } = {
//     "1": "Calabresa",
//     "2": "Mussarela",
//     "3": "Brigadeiro",
//     "4": "Frango",
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.logo}>Menu Pizza</Text>
//       <Picker
//         selectedValue={pizza}
//         onValueChange={(itemValue) => setPizza(itemValue)}
//         style={styles.picker}
//       >
//         <Picker.Item label="Calabresa" value="1" key={1} />
//         <Picker.Item label="Mussarela" value="2" key={2} />
//         <Picker.Item label="Brigadeiro" value="3" key={3} />
//         <Picker.Item label="Frango" value="4" key={4} />
//       </Picker>
//       <Text style={styles.pizzas}>
//         Você escolheu: Pizza {pizzaNames[pizza]}
//       </Text>
//       <Text style={styles.pizzas}>R$: 59,99</Text>

//       <Text style={styles.logo}>Slider</Text>
//       <Slider
//         minimumValue={0}
//         maximumValue={100}
//         onValueChange={(v) => setValor(v)}
//         value={valor}
//         minimumTrackTintColor="#00FF00"
//         maximumTrackTintColor="#FF0000"
//       ></Slider>

//       <Text style={styles.valor}>Valor selecionado: {valor.toFixed(0)}</Text>

//       <View style={styles.containerSwitch}>
//         <Text>Switch</Text>

//         <Switch
//           value={isActive}
//           onValueChange={(e) => setIsActive(e)}
//           thumbColor={isActive ? "#00FF00" : "#FF0000"}
//         />

//         <Text>Estado do Switch: {isActive ? "Ativo" : "Inativo"}</Text>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: 28,
//     padding: 20,
//   },

//   logo: {
//     fontSize: 15,
//     fontWeight: "bold",
//     textAlign: "center",
//   },

//   valor: {
//     fontSize: 12,
//     textAlign: "center",
//     fontWeight: "bold",
//   },

//   containerSwitch: {
//     marginTop: 40,
//   },
//   pizzas: {
//     marginTop: 20,
//     fontSize: 18,
//     textAlign: "center",
//   },
//   picker: {
//     marginHorizontal: 10,
//   },
// });

// export default sliderCommunity;
