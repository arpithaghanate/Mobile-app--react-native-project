import React, {Component} from 'react';
import DatePicker from 'react-native-datepicker';
import {Icon} from 'react-native-elements';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Alert,
} from 'react-native';
// import {Checkbox} from 'react-native-paper';
export default class Register extends Component {
  onClickListener = viewId => {
    Alert.alert('Alert', 'Button pressed ' + viewId);
  };
  static navigationOptions = {
    title: 'SIGN UP',
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
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      value: 'first',
      password: '',
      email: '',
      checked: false,
      date: '',
    };
  }

  render() {
    const {checked} = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="Name"
            underlineColorAndroid="transparent"
            onChangeText={name => this.setState({name})}
          />
        </View>
        <View styles={styles.inputContainer}>
          <DatePicker
            style={styles.inputContainer}
            placeholder="Date Of Birth"
            date={this.state.date}
            mode="date"
            format="YYYY-MM-DD"
            onDateChange={date => {
              this.setState({date: date});
            }}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
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
            placeholder="Password"
            secureTextEntry={true}
            underlineColorAndroid="transparent"
            onChangeText={password => this.setState({password})}
          />
        </View>

        <TouchableHighlight
          style={styles.loginButton}
          onPress={() =>
            this.props.navigation.navigate('Login', {
              password: this.state.password,
              email: this.state.email,
            })
          }>
          <Text style={styles.loginText}>Sign Up</Text>
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
    backgroundColor: '#EDF2F5',
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    borderBottomWidth: 1,
    width: 250,
    height: 45,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    color: 'black',
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
    color: 'white',
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginLeft: 19,
    justifyContent: 'center',
  },
  buttonContainer: {
    height: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 190,
    borderRadius: 15,
    backgroundColor: '#00B5EC',
    paddingRight: 9,
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
    paddingLeft: 40,
  },
  checkboxstyle: {
    width: 400,
    height: 40,
    paddingTop: 400,
    padding: 40,
  },
});
