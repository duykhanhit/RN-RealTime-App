import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableHighlight,
} from 'react-native';

import Input from '../../components/UI/Input';

export default function AuthScreen() {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require('../../assets/logo.png')}
          />
        </View>
        <View style={styles.loginContainer}>
          <Input keyboardType="phone-pad" lable="Số điện thoại" />
          <Input lable="Mật khẩu" />

          <View style={styles.btnContainer}>
            <TouchableHighlight style={styles.button}>
              <Text style={styles.title}>Đăng nhập</Text>
            </TouchableHighlight>
          </View>

          <View style={styles.forgot}>
            <Text style={{color: '#2980b9'}}>Quên mật khẩu?</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  logo: {
    width: 220,
    height: 220,
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 50,
  },
  loginContainer: {
    margin: 20,
  },
  button: {
    marginTop: 10,
    backgroundColor: '#3498db',
    padding: 12,
    width: '50%',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'white',
  },
  btnContainer: {
    alignItems: 'center',
  },
  forgot: {
    alignItems: 'center',
    marginTop: 20,
  },
});
