import React, {Component} from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

import LogIn from './src/Login';

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <LogIn />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
