import { Component } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00aeef",
  },
  img: {},
  timer: {
    marginTop: -150,
    color: "white",
    fontSize: 65,
    fontWeight: "bold",
  },
  btnArea: {
    flexDirection: "row",
    marginTop: 70,
    height: 40,
  },
  button: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    height: 40,
    margin: 15,
    borderRadius: 9,
  },
  btnText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#00aeef",
  },
});

class Cronometro extends Component {
  timer: null;
  constructor(props: {}) {
    super(props);
    this.state = {
      number: 0,
      go: "go",
    };

    this.timer = null;

    this.go = this.go.bind(this);
    this.stop = this.stop.bind(this);
  }

  go() {
    if (this.timer != null) {
      clearInterval(this.timer);
      this.timer = null;
      this.setState({ button: "go" });
    } else {
      this.timer = setInterval(() => {
        this.setState({ number: this.state.number + 0.1 });
      }, 100);

      this.setState({ go: "continue" });
    }
  }

  stop() {
    if (this.timer != null) {
      clearInterval(this.timer);
      this.timer = null;
    }

    this.setState({ number: 0, go: "go" });
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require("../../assets/images/cronometro.png")}
          style={styles.img}
        />

        <Text style={styles.timer}>{this.state.number.toFixed(1)}</Text>

        <View style={styles.btnArea}>
          <TouchableOpacity style={styles.button} onPress={this.go}>
            <Text style={styles.btnText}>{this.state.go}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={this.stop}>
            <Text style={styles.btnText}>stop</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Cronometro;
