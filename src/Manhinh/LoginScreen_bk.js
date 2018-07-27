import React, { Component } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet,Button,Image } from 'react-native';
import icBack from '../images/appIcon/back_white.png';
import icLogo from '../images/appIcon/ic_logo.png';
// import signIn from '../../api/signIn';
// import global from '../global';

// import saveToken from '../../api/saveToken';

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
        email: '',
        password: ''
    };
  }

  static navigationOptions = ({navigation}) => {
    return {
        header:null
    }
  }

  onSignIn() {
    this.props.navigation.navigate('DrawerNavigator');
    // const { email, password } = this.state;
    // signIn(email, password)
    //     .then(res => {
    //         global.onSignIn(res.user);
    //         this.props.goBackToMain();
    //         saveToken(res.token);
    //     })
    //     .catch(err => console.log(err));
  }
  goBackToMain() {
    const { navigation } = this.props;
    navigation.pop();
  }

  render() {
    const {row1, iconStyle, titleStyle, container,inputStyle, bigButton, buttonText } = styles;
    const { email, password } = this.state;
    return (
      <View style={container}>
        <View style={row1}>
            <TouchableOpacity onPress={this.goBackToMain.bind(this)}>
                <Image source={icBack} style={iconStyle} />
            </TouchableOpacity>
              <Text style={titleStyle}>Đăng nhập</Text>
            <Image source={icLogo} style={iconStyle} />
        </View>
        <View>
          <TextInput
              style={inputStyle}
              placeholder="Nhập số điện thoại ở đây"
              value={email}
              onChangeText={text => this.setState({ email: text })}
          />
          <TextInput
              style={inputStyle}
              placeholder="Nhập mật khẩu ở đây"
              value={password}
              onChangeText={text => this.setState({ password: text })}
              secureTextEntry
          />
          <TouchableOpacity style={bigButton} onPress={this.onSignIn.bind(this)}>
              <Text style={buttonText}>TIẾP TỤC</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#3EBA77',
    backgroundColor: '#fa9928',
    padding: 20,
    justifyContent: 'space-between'
  },
  row1: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  titleStyle: { color: '#FFF', fontFamily: 'Avenir', fontSize: 30 },
  iconStyle: { width: 30, height: 30 },
  inputStyle: {
      height: 50,
      backgroundColor: '#fff',
      marginBottom: 10,
      borderRadius: 20,
      paddingLeft: 30
  },
  bigButton: {
      height: 50,
      borderRadius: 20,
      borderWidth: 1,
      borderColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
  },
  buttonText: {
      fontFamily: 'Avenir',
      color: '#fff',
      fontWeight: '400'
  }
});