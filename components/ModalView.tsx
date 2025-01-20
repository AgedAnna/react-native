import React, { useState } from "react";
import { View, Text, StyleSheet, Modal, Button } from "react-native";

interface ModalViewProps {
  modalVisible: boolean;
  changeCloseModal: () => void;
}

const ModalView: React.FC<ModalViewProps> = ({
  modalVisible,
  changeCloseModal,
}) => {
  return (
    <View style={styles.container}>
      <Modal visible={modalVisible} animationType="slide" transparent>
        <View
          style={{
            backgroundColor: "#ff0",
            width: "100%",
            padding: 20,
            height: 280,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: 15,
              marginBottom: 20,
              fontWeight: "bold",
            }}
          >
            Seja bem-vindo!
          </Text>

          <Button title="Fechar" onPress={changeCloseModal} />
        </View>
      </Modal>
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

export default ModalView;
