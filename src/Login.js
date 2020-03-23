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
export default class Login extends Component {
  static navigationOptions = {
    title: 'LOG IN',
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
  constructor(props) {
    super(props);
    const {navigation} = props;
    console.log('login props', props);
    this.state = {
      name: '',
      value: 'first',
      password: navigation.getParam('password'),
      email: navigation.getParam('email'),
      checked: false,
      date: '',
    };
  }

  onClickListener = viewId => {
    Alert.alert('Alert', 'Button pressed ' + viewId);
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            value={this.state.email}
            style={styles.inputs}
            placeholder="Email"
            keyboardType="email-address"
            underlineColorAndroid="transparent"
            onChangeText={email => this.setState({email})}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            value={this.state.password}
            placeholder="Password"
            secureTextEntry={true}
            underlineColorAndroid="transparent"
            onChangeText={password => this.setState({password})}
          />
        </View>

        <TouchableHighlight
          style={styles.loginButton}
          onPress={() => this.props.navigation.navigate('ScreenOne')}>
          <Text style={styles.loginText}>LOG IN</Text>
        </TouchableHighlight>
        <Text>{'\n'}</Text>
        <TouchableHighlight
          style={styles.forgotpass}
          onPress={() => this.onClickListener('restore_password')}>
          <Text style={styles.loginText}>Forgot password</Text>
        </TouchableHighlight>
        <Text>{'\n'}</Text>
        <TouchableHighlight
          style={styles.loginButton}
          onPress={() => this.props.navigation.goBack()}>
          <Text style={styles.loginText}>SIGN UP</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F3F3F3',
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 19,
    borderBottomWidth: 1,
    width: 250,
    height: 45,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginLeft: 15,
    justifyContent: 'center',
  },
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 15,
  },
  loginButton: {
    backgroundColor: '#007084',
    height: 40,
    width: 120,
    borderRadius: 5,
    justifyContent: 'center',
  },
  loginText: {
    color: 'white',
    justifyContent: 'center',
    paddingLeft: 37,
  },
  icon: {
    paddingLeft: 10,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: 120,
  },
  forgotpass: {
    backgroundColor: '#3D3D3D',
    height: 40,
    width: 120,
    borderRadius: 5,
    justifyContent: 'center',
    alignContent: 'center',
    paddingRight: 9,
  },
});
