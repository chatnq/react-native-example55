
import React, { Component } from 'react';

import { View, TextInput, Text, TouchableOpacity, StyleSheet,Button,Image } from 'react-native';
import icBack from '../images/appIcon/back_white.png';
import icLogo from '../images/appIcon/ic_logo.png';


// type Props = {};
export default class SignUpScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
        name: '',
        email: '',
        password: '',
        rePassword: ''
    };
  }

  static navigationOptions = ({navigation}) => {
    return {
        header:null
    }
  }

  onSuccess() {
      Alert.alert(
          'Notice',
          'Sign up successfully',
          [
              { text: 'OK', onPress: this.props.gotoSignIn() }
          ],
          { cancelable: false }
      );
  }

  onFail() {
      Alert.alert(
          'Notice',
          'Email has been used by other',
          [
              { text: 'OK', onPress: () => this.removeEmail.bind(this) }
          ],
          { cancelable: false }
      );
  }

  removeEmail() {
      this.setState({ email: '' });
  }

  registerUser() {
      const { name, email, password } = this.state;
      register(email, name, password)
      .then(res => {
          if (res === 'THANH_CONG') return this.onSuccess();
          this.onFail();
      });
  }

  goBackToMain() {
    const { navigation } = this.props;
    navigation.pop();
  }

  render() {
    const {row1, iconStyle, titleStyle, container, inputStyle, bigButton, buttonText } = styles;
    return (
      <View style={container}>
        <View style={row1}>
            <TouchableOpacity onPress={this.goBackToMain.bind(this)}>
                <Image source={icBack} style={iconStyle} />
            </TouchableOpacity>
              <Text style={titleStyle}>Đăng ký</Text>
            <Image source={icLogo} style={iconStyle} />
        </View>
        <View>
            <TextInput 
                style={inputStyle} 
                placeholder="Nhập tên của bạn" 
                value={this.state.name}
                onChangeText={text => this.setState({ name: text })}
            />
            <TextInput 
                style={inputStyle} 
                placeholder="Nhập địa chỉ Email của bạn" 
                value={this.state.email}
                onChangeText={text => this.setState({ email: text })}
            />
            <TextInput 
                style={inputStyle} 
                placeholder="Nhập Mật khẩu của bạn" 
                value={this.state.password}
                secureTextEntry
                onChangeText={text => this.setState({ password: text })}
            />
            <TextInput 
                style={inputStyle} 
                placeholder="Nhật lại Mật khẩu" 
                value={this.state.rePassword}
                secureTextEntry
                onChangeText={text => this.setState({ rePassword: text })}
            />
            <TouchableOpacity style={bigButton} onPress={this.registerUser.bind(this)}>
                <Text style={buttonText}>ĐĂNG KÝ</Text>
            </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3EBA77',
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