/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import Analytics from 'mobile-center-analytics'
import Crashes from 'mobile-center-crashes'

export default class TestMobileCenter extends Component {

  sendEvent(){
    Analytics.trackEvent('Clicked analytics button', {
      prop: new Date().getSeconds() 
    })
  }

  nativeCrash(){
    Crashes.generateTestCrash();
  }

  jsCrash(){
    this.func1();
  }

  func1(){
    throw new Error('my js error');
  }

  constructor(props){
    super(props);
    this.state = {logs:[]};
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native
        </Text>
        <Button title='Analytics' onPress = {() => this.sendEvent()}/>
        <Button title = 'Native crash' onPress = {() => this.nativeCrash()}/>
        <Button title = 'js crash' onPress  = {() => this.jsCrash()}/>
        <Text>{JSON.stringify(this.state.logs)}</Text>
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('TestMobileCenter', () => TestMobileCenter);
