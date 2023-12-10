import {View, Text} from 'react-native';
import React from 'react';

const App = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fafafa',
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={{
          fontSize: 32,
          color: '#676767',
          fontWeight: 'bold',
          textAlign: 'center',
        }}>
        How to add Firebase to React Native app
      </Text>
      <Text
        style={{
          fontSize: 32,
          color: '#676767',
          fontWeight: 'bold',
          textAlign: 'center',
        }}>
        Android | iOS
      </Text>
      <Text
        style={{
          fontSize: 32,
          color: '#676767',
          textAlign: 'center',
        }}>
        2023
      </Text>
    </View>
  );
};

export default App;
