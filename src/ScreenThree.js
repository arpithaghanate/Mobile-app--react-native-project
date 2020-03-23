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
export default class ScreenThree extends Component {
  static navigationOptions = {
    title: 'Register',
    headerStyle: {
      backgroundColor: '#00B5EC',
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
          onPress={() => Alert.alert('Alert', 'setttings button pressed')}
        />
        <Icon
          name="help"
          color="white"
          onPress={() => Alert.alert('Alert', 'help button pressed')}
        />
      </View>
    ),
    headerLeft: (
      <View>
        <Icon
          name="menu"
          color="white"
          width={40}
          onPress={() => Alert.alert('menu button pressed')}
        />
      </View>
    ),
  };
  render() {
    return (
      <View>
        <Text>hi</Text>
      </View>
    );
  }
}
