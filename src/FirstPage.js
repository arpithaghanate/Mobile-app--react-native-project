import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, Linking} from 'react-native';
// import {Checkbox} from 'react-native-paper';
export default class FirstPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button
            title="Sign up"
            color="#007084"
            onPress={() => this.props.navigation.navigate('Register')}
          />
          <Text>{'\n'}</Text>
          <Button
            title="Log in"
            color="#3D3D3D"
            onPress={() => this.props.navigation.navigate('Login')}
          />
          <Text>{'\n'}</Text>
          <View style={styles.terms}>
            <Text
              style={styles.TextStyle}
              onPress={() => Linking.openURL('https://google.com')}>
              Terms
            </Text>
            <Text> | </Text>
            <Text
              style={styles.TextStyle}
              onPress={() => Linking.openURL('https://google.com')}>
              Privacy Policies
            </Text>
            <Text> | </Text>
            <Text
              style={styles.TextStyle}
              onPress={() => Linking.openURL('https://google.com')}>
              Contact us
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#F3F3F3',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  TextStyle: {
    textDecorationLine: 'underline',
  },
  terms: {
    flexDirection: 'row',
  },
});
