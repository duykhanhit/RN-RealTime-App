import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

export default function Input(props) {
  return (
    <View>
      <Text>{props.lable}</Text>
      <TextInput {...props} style={styles.input} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderBottomColor: '#95a5a6',
    borderBottomWidth: 1,
    padding: 0,
    marginBottom: 10,
  },
});
