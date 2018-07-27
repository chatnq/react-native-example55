import React, { Component } from 'react';
import {Platform,StyleSheet,Text,View,Button} from 'react-native';
import {createBottomTabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import icoHome from '../src/media/appIcon/alarm.png';
// import icoWaitConfirm from '../src/media/appIcon/handshake.png';
// import icoEnforcement from '../src/media/appIcon/time-left.png';
// import ScreenOne from './TabNavigator/ScreenOne';
// import ScreenTwo from './TabNavigator/ScreenTwo';
// import ScreenThree from './TabNavigator/ScreenThree';
import Home from '../src/components/Main/Task/Home/Home';
import WaitConfirm from '../src/components/Main/Task/WaitConfirm/WaitConfirm';
import Enforcement from '../src/components/Main/Task/Enforcement/Enforcement';



export default class AppTabNavigator extends Component {

    static navigationOptions = ({navigation}) => {
        return {
            headerLeft: (
                <View style={{padding: 10}}>
                    <Ionicons name="md-menu" size={24}
                        onPress={()=> navigation.openDrawer() } 
                    />
                </View>
            )
        }
    }

    render(){
        return (
            <HomeScreenTabNavigator screenProps={{navigation: this.props.navigation}} />
        )
    }
}

const HomeScreenTabNavigator = new createBottomTabNavigator ({
    ScreenHome: {
        screen: Home,
        navigationOptions:{
            tabBarLabel:'Việc mới',
            tabBarIcon: ({tintColor}) => (
                <Ionicons name="md-notifications" size={26} color={tintColor}/>
            )
        }
    },
    ScreenWaitConfirm: {
        screen: WaitConfirm,
        navigationOptions:{
            tabBarLabel:'Chờ xác nhận',
            tabBarIcon: ({tintColor}) => (
                <Ionicons name="md-timer" size={26} color={tintColor}/>
            )
        }
    },
    ScreenEnforcement: {
        screen: Enforcement,
        navigationOptions:{
            tabBarLabel:'Chờ thực hiện',
            tabBarIcon: ({tintColor}) => (
                <Ionicons name="md-calendar" size={26} color={tintColor}/>
            )
        }
    }
},
  {
    swipeEnabled: true,
    tabBarOptions: {
      activeTintColor: '#FFFFFF',
      // inactiveTintColor: '#9E9E9E',
      inactiveTintColor: '#000000',
      showLabel:true,
      style: {
        backgroundColor: '#fa9928',
      },
    }
  }

)
