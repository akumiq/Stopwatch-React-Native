import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const Timer = () => {
  return (
    <View style={styles.timerContainer}>
      <Text style={styles.textTimer}>00:</Text>
      <Text style={styles.textTimer}>00,</Text>
      <Text style={styles.textTimer}>00</Text>
    </View>
  );
};

export default Timer;

const styles = StyleSheet.create({
  timerContainer: {flexDirection: 'row'},
  textTimer: {
    fontSize: 80,
    fontWeight: '200',
    color: '#FFFFFF',
  },
});
