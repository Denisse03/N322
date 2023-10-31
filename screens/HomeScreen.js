import * as React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from 'react-native';

export default function HomeScreen({ navigation }) {
  const data = { desc: 'What is going on?', additional: 'fun things to do' };
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Home Screen </Text>
      <TouchableOpacity
        style={styles.button}
        title="Go to About"
        onPress={() => navigation.navigate('AboutScreen', data)}>
        <Text style={styles.text}>Go to About </Text>
      </TouchableOpacity>
    </View>
  );
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'centered',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  button: {
    backgroundColor: '#0000ee',
    padding: 10,
  },

  text: {
    color: '#ffffff',
    textAlign: 'center',
  },
  paragraph: {
    textAlign: 'center',
  },
});
