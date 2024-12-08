import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Scoreboard = ({
  teamA,
  teamB,
  scoreA,
  scoreB,
  setScoreA,
  setScoreB,
  setIsWinner,
  setWinningTeam,
}) => {
  const handleIncrement = (team) => {
    if (team === 'A') {
      setScoreA(scoreA + 1);
      if (scoreA + 1 === 10) {
        setIsWinner(true);
        setWinningTeam(teamA);
      }
    } else {
      setScoreB(scoreB + 1);
      if (scoreB + 1 === 10) {
        setIsWinner(true);
        setWinningTeam(teamB);
      }
    }
  };

  const handleDecrement = (team) => {
    if (team === 'A' && scoreA > 0) {
      setScoreA(scoreA - 1);
    } else if (team === 'B' && scoreB > 0) {
      setScoreB(scoreB - 1);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.scoreSection}>
        <Text style={styles.scoreText}>{teamA}: {scoreA}</Text>
        <View style={styles.buttonGroup}>
          <Button title="+" onPress={() => handleIncrement('A')} />
          <Button title="-" onPress={() => handleDecrement('A')} />
        </View>
      </View>

      <View style={styles.scoreSection}>
        <Text style={styles.scoreText}>{teamB}: {scoreB}</Text>
        <View style={styles.buttonGroup}>
          <Button title="+" onPress={() => handleIncrement('B')} />
          <Button title="-" onPress={() => handleDecrement('B')} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 20,
  },
  scoreSection: {
    marginBottom: 20,
    alignItems: 'center',
  },
  scoreText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  buttonGroup: {
    flexDirection: 'row',
    gap: 10,
  },
});

export default Scoreboard;
