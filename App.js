import * as React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Login from './src/Login';
import Register from './src/Register';
import ScreenOne from './src/ScreenOne';
import FirstPage from './src/FirstPage';
import ScreenTwo from './src/ScreenTwo';
// import ScreenThree from './src/ScreenThree';
// import DrawerNavigator from 'react-navigation-drawer/lib/typescript/src/navigators/createDrawerNavigator';
import {createDrawerNavigator, DrawerActions} from 'react-navigation-drawer';
import {IconButton} from 'react-native-paper';

const RootStack = createStackNavigator(
  {
    FirstPage: FirstPage,
    Login: Login,
    Register: Register,
    ScreenOne: ScreenOne,
    ScreenTwo: ScreenTwo,
  },
  {
    initialRouteName: 'FirstPage',
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      title: 'Screen One',
      headerStyle: {
        backgroundColor: '#781608',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 15,
      },
      headerLeft: () => (
        <IconButton
          icon="menu"
          color="white"
          size={25}
          onPress={() => {
            navigation.dispatch(DrawerActions.openDrawer());
          }}
        />
      ),
      headerRight: () => <IconButton icon="bell" color="white" size={20} />,
    }),
  },
);

const Screen1 = createStackNavigator({
  One: ScreenOne,
});
const Screen2 = createStackNavigator({
  Two: ScreenTwo,
});
// const Screen3 = createStackNavigator({
//   Three: ScreenThree,
// });

const drawerNavigator = createDrawerNavigator(
  {
    SOne: Screen1,
    STwo: Screen2,
    // SThree: Screen3,
  },
  {
    drawerType: 'front',
    lazy: false,
    contentOptions: {
      activeTintColor: '#ffffff',
      inactiveTintColor: '#781608',
      activeBackgroundColor: '#781608',
      inactiveBackgroundColor: '#ffffff',
      itemStyle: {
        borderBottomWidth: 1,
        borderColor: '#DEDDDD',
      },
      labelStyle: {
        fontSize: 16,
        marginLeft: 25,
      },
    },
  },
);

const SwitchNavigator = createSwitchNavigator({
  // RootStack: RootStack,
  Stack: RootStack,
  Drawer: drawerNavigator,
});
const AppContainer = createAppContainer(SwitchNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
