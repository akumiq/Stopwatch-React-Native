import React, {Component} from 'react';
import {StyleSheet, StatusBar, View} from 'react-native';

import {Timer} from './components';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          translucent
          backgroundColor="#0D0D0D"
          barStyle="light-content"
        />

        <Timer />
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D0D',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
