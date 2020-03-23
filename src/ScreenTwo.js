import React, {Component} from 'react';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Alert,
} from 'react-native';
import {Icon} from 'react-native-elements';
export default class ScreenTwo extends Component {
  static navigationOptions = {
    title: 'SCREEN TWO',
    headerStyle: {
      backgroundColor: '#007084',
    },
    headerTintColor: 'white',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerRight: (
      <View style={{flexDirection: 'row', padding: 10}}>
        <Icon
          name="settings"
          color="white"
          width={40}
          onPress={() => Alert.alert('Alert', 'settings button pressed')}
        />
        <Icon
          name="help"
          color="white"
          onPress={() => Alert.alert('Alert', 'help button pressed')}
        />
      </View>
    ),
  };
  render() {
    return (
      <View>
        <Text>hiiiiiiii</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
