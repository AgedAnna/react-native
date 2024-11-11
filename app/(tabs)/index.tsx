import { Component } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: 250,
    height: 250,
  },
  frase: {
    fontSize: 20,
    color: "#dd7b22",
    margin: 30,
    fontStyle: "italic",
    textAlign: "center",
  },

  button: {
    borderRadius: 25,
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: "#dd7b22",
  },

  btnArea: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  btnText: {
    fontWeight: "bold",
  },
});


interface AppState {
  textoFrase: string;
  img: any;
}

class App extends Component<AppState> {
  frases: string[];
  constructor(props: AppState) {
    super(props);
    this.state = {
      textoFrase: "",
      img: require("../../assets/images/biscoito.png"),
    };

    this.quebrarBiscoito = this.quebrarBiscoito.bind(this);

    this.frases = [
      "Grandes aventuras aguardam você, basta dar o primeiro passo.",
      "Sua paciência será recompensada com momentos de felicidade inesperada.",
      "Confie no processo; tudo está se alinhando para o seu sucesso.",
      "As oportunidades são como o nascer do sol: não espere demais para aproveitá-las.",
      "A paz interior é o melhor presente que você pode dar a si mesmo.",
      "Você é mais forte do que pensa e mais capaz do que imagina.",
      "Pequenos passos te levarão a grandes conquistas.",
    ];
  }

  quebrarBiscoito() {
    let number = Math.floor(Math.random() * this.frases.length);

    this.setState({
      textoFrase: '"' + this.frases[number] + '"',
      img: require("../../assets/images/biscoitoAberto.png"),
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={this.state.img} style={styles.img} />
        <Text style={styles.frase}>{this.state.textoFrase}</Text>
        <TouchableOpacity style={styles.button} onPress={this.quebrarBiscoito}>
          <View style={styles.btnArea}>
            <Text style={styles.btnText}>Quebrar Biscoito</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default App;
