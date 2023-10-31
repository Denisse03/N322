import {  SafeAreaView, StyleSheet } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import { NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name = "HomeScreen" component={HomeScreen}/>
    <Stack.Screen name = "AboutScreen" component={AboutScreen} options={{title: "About"}} />
    </Stack.Navigator>

     </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },

});
