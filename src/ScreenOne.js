import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableHighlight,
  Alert,
} from 'react-native';
import {Icon} from 'react-native-elements';
import SwipeCards from 'react-native-swipe-cards';

class Card extends React.Component {
  constructor(props) {
    super(props);
    console.log('Card', this, this.props);
  }

  render() {
    return (
      <View
        style={[styles.card, {backgroundColor: this.props.backgroundColor}]}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 20,
            color: 'white',
            fontFamily: 'math',
          }}>
          {this.props.text}
        </Text>
        <Image />
      </View>
    );
  }
}

class NoMoreCards extends Component {
  constructor(props) {
    super(props);
    console.log('NoMore Cards', this, this.props);
  }

  render() {
    const {navigation} = this.props;
    return (
      <View style={{height: 600, width: 320, backgroundColor: '#007084'}}>
        {/* <Text style={styles.noMoreCardsText}>No more cards</Text> */}
        <View>
          <Button
            title="Let's get started"
            color="#3D3D3D"
            onPress={() => this.props.navigation.navigate('ScreenTwo')}
          />
          {/* <TouchableHighlight
            style={{paddingTop: 300, width: 250, paddingLeft: 80}}>
            <Text style={{color:'#3D3D3D'}} onPress>Let's get started</Text>
          </TouchableHighlight> */}
        </View>
      </View>
    );
  }
}

export default class ScreenOne extends React.Component {
  static navigationOptions = {
    // title: 'Welcome',
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
    console.log('ScreenOne', this, this.props);
    this.state = {
      cards: [
        {text: 'Welcome to GoDutch!', backgroundColor: '#007084'},
        {
          text: 'Easiest way to keep track of your expenses',
          backgroundColor: '#3D3D3D',
        },
        {
          text: 'You can split expenses with groups or with an individual',
          backgroundColor: '#007084',
        },
        {text: 'Pay your friends back any time', backgroundColor: '#3D3D3D'},
      ],
    };
  }

  handleYup(card) {
    console.log(`Yup for ${card.text}`);
  }
  handleNope(card) {
    console.log(`Nope for ${card.text}`);
  }
  handleMaybe(card) {
    console.log(`Maybe for ${card.text}`);
  }
  render() {
    // If you want a stack of cards instead of one-per-one view, activate stack mode
    // stack={true}
    return (
      <SwipeCards
        cards={this.state.cards}
        renderCard={cardData => (
          <Card navigation={this.props.navigation} {...cardData} />
        )}
        renderNoMoreCards={() => (
          <NoMoreCards navigation={this.props.navigation} />
        )}
        handleYup={this.handleYup}
        handleNope={this.handleNope}
        handleMaybe={this.handleMaybe}
        hasMaybeAction
        showYup={false}
        showNope={false}
        showMaybe={false}
      />
    );
  }
}

const styles = StyleSheet.create({
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 320,
    height: 600,
  },
  noMoreCardsText: {
    fontSize: 22,
  },
});
