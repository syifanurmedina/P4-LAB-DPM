import React from 'react';
import { View, Text, Button, StyleSheet, Modal } from 'react-native';

const WinnerModal = ({ winningTeam, handleReset }) => {
  return (
    <Modal transparent={true} animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.winnerText}>{winningTeam} Menang!</Text>
          <Button title="Reset Pertandingan" onPress={handleReset} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'd4afb9',
  },
  modalContent: {
    backgroundColor: '#b8e0d2',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    width: 300,
  },
  winnerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default WinnerModal;
