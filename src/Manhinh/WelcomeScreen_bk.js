
import React, { Component } from 'react';
import {Platform,StyleSheet,Text,View,Button,TouchableOpacity, Image} from 'react-native';
import profileIcon from '../images/temp/profile.png';

export default class WelcomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { user: null };
        global.onSignIn = this.onSignIn.bind(this);
    }

    static navigationOptions = ({navigation}) => {
        return {
            header:null
        }
    }

    onSignIn(user) {
        this.setState({ user });
    }
    gotoSignIn() {
        const { navigation } = this.props;
        navigation.navigate('SignInScreen')
    }
    gotoSignUp() {
        const { navigation } = this.props;
        navigation.push('SignUpScreen')
    }

  render() {
    const { 
      container, profile, btnStyle, btnText
    } = styles;
    const { user } = this.state;

    return (
      <View style={container}>
        <Image source={profileIcon} style={profile} />
        <View style={{ flex: 1}}>
            <TouchableOpacity style={btnStyle} onPress={this.gotoSignIn.bind(this)}>
                <Text style={btnText}>Đăng nhập</Text>
            </TouchableOpacity>
            <TouchableOpacity style={btnStyle} onPress={this.gotoSignUp.bind(this)}>
                    <Text style={btnText}>Đăng ký</Text>
            </TouchableOpacity>            
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
    //   backgroundColor: '#34B089',
    // backgroundColor: '#3EBA77',
    backgroundColor: '#fa9928',
    //   borderRightWidth: 3,
      borderColor: '#fff',
      alignItems: 'center'
  },
  profile: {
      width: 120,
      height: 120,
      borderRadius: 60,
      marginVertical: 30
  },
  btnStyle: {
      height: 50,
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,
      paddingHorizontal: 70,
      // paddingBottom: 10,
      marginBottom: 10,
  },
  btnText: {
      color: '#34B089',
      fontFamily: 'Avenir', 
      fontSize: 20
  }
});
