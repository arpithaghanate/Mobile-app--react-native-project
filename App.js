import * as React from 'react';
import {Text, View, StyleSheet, SafeAreaView} from 'react-native';

// // You can import from local files
// import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import {Card} from 'react-native-paper';

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <View style={styles.container} flexDirection="row">
          <Card style={styles.card}>
            <Text style={styles.parked}>Parked</Text>
          </Card>
          <Text>{'\n'} </Text>
      <Text> hi </Text>
          <Card style={styles.card}>
            <Text style={styles.reserved}>Reserved</Text>
          </Card>
          <Text>{'\n'} </Text>
          <Card style={styles.card}>
            <Text style={styles.empty}>Empty</Text>
          </Card>
          <Text>{'\n'} </Text>
          <Card style={styles.card}>
            <Text style={styles.blocked}>Blocked</Text>
          </Card>
          <Text>{'\n'} </Text>
          <Card style={styles.card}>
            <Text style={styles.other}>Other</Text>
          </Card>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
    paddingTop: 140,
    paddingLeft: 20,
    paddingRight: 2,
  },
  parked: {
    fontSize: 20,
    backgroundColor: '#66BB6A',
    height: 60,
    width: 85,
    position: 'relative',
    paddingLeft: 10,
    paddingTop: 15,
  },
  reserved: {
    fontSize: 20,
    backgroundColor: '#4169E1',
    height: 60,
    width: 85,
    position: 'relative',
    paddingLeft: 10,
    paddingTop: 15,
  },
  empty: {
    fontSize: 20,
    backgroundColor: '#E6E254',
    height: 60,
    width: 85,
    position: 'relative',
    paddingLeft: 10,
    paddingTop: 15,
  },
  blocked: {
    backgroundColor: '#E46363',
    fontSize: 20,
    height: 60,
    width: 85,
    position: 'relative',
    paddingLeft: 10,
    paddingTop: 15,
  },
  other: {
    backgroundColor: '#A97ADF',
    fontSize: 20,
    height: 60,
    width: 85,
    position: 'relative',
    paddingLeft: 10,
    paddingTop: 15,
  },
  card: {
    height: 60,
    width: 85,
    position: 'relative',
    alignContent: 'center',
  },
});
