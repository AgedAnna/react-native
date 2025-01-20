import ModalView from "@/components/ModalView";
import React, { useState } from "react";
import { View, Text, StyleSheet, Modal, Button } from "react-native";

const ModalViewPage = () => {
  const [openModal, setOpenModal] = useState(false);

  const changeOpenModal = () => {
    setOpenModal(true);
  };

  const changeCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Modal</Text>

      <Button title="Abrir Modal" onPress={changeOpenModal} />

      <ModalView changeCloseModal={changeCloseModal} modalVisible={openModal} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 28,
    padding: 20,
    backgroundColor: "#ddd",
  },

  title: {
    textAlign: "center",
    fontWeight: "700",
    margin: 10,
  },
});

export default ModalViewPage;
