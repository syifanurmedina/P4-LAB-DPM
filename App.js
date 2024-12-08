import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Scoreboard from './src/Scoreboard';
import WinnerModal from './src/WinnerModal';

const App = () => {
  const [teamA, setTeamA] = useState('Tim A');
  const [teamB, setTeamB] = useState('Tim B');
  const [scoreA, setScoreA] = useState(0);
  const [scoreB, setScoreB] = useState(0);
  const [isWinner, setIsWinner] = useState(false);
  const [winningTeam, setWinningTeam] = useState('');

  const handleReset = () => {
    setScoreA(0);
    setScoreB(0);
    setIsWinner(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pertandingan: {teamA} vs {teamB}</Text>
      <Scoreboard
        teamA={teamA}
        teamB={teamB}
        scoreA={scoreA}
        scoreB={scoreB}
        setScoreA={setScoreA}
        setScoreB={setScoreB}
        setIsWinner={setIsWinner}
        setWinningTeam={setWinningTeam}
      />
      {isWinner && (
        <WinnerModal 
          winningTeam={winningTeam} 
          handleReset={handleReset} 
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e8d1c5',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default App;
