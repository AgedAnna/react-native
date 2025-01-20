// import { Component } from "react";
// import { StyleSheet, View, FlatList, Text } from "react-native";

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });

// class FlatListView extends Component {
//   constructor(props: {}) {
//     super(props);
//     this.state = {
//       feed: [
//         { id: "1", nome: "Anna", idade: 20, email: "anna@gmail.com" },
//         { id: "2", nome: "Jorge", idade: 49, email: "jorge@gmail.com" },
//         { id: "3", nome: "David", idade: 23, email: "david@gmail.com" },
//         { id: "4", nome: "Paulo", idade: 14, email: "paulo@gmail.com" },
//       ],
//     };
//   }
//   render() {
//     return (
//       <View style={styles.container}>
//         <FlatList
//           data={this.state.feed}
//           keyExtractor={(item) => item.id}
//           renderItem={({ item }) => <Pessoa data={item} />}
//         />
//       </View>
//     );
//   }
// }

// export default FlatListView;

// class Pessoa extends Component {
//   render() {
//     return (
//       <View>
//         <Text>{this.props.data.nome}</Text>
//         <Text>{this.props.data.idade}</Text>
//         <Text>{this.props.data.email}</Text>
//       </View>
//     );
//   }
// }
