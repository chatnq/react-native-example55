import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {StackNavigator } from 'react-navigation';
import Home from './screens/Home';
import Menu from './screens/Menu';
import User from './screens/User';
import Detail from './screens/Detail';



export const HomeStack= createStackNavigator({
    ManHinh_Home: {
        screens: Home
    }
})
 