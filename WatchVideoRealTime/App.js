import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import socketIOClient from 'socket.io-client';
const BASE_URL = 'http://192.168.0.104:5000/';

const App = () => {
  useEffect(() => {
    const socket = socketIOClient(BASE_URL);
    socket.on('connected', data => {
      console.log(data);
    });

    return () => socket.disconnect();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.noti}>Hello world!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noti: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#2980b9',
  },
});

export default App;
