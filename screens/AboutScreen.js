import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native'; 


export default function AboutScreen({route}){
  let dataObj = route.params;
  
  return (
    <View style={styles.container}>
    <Text style={styles.paragraph}>
    This is the about screen with this data. {dataObj.desc} what is this? {dataObj.additional}
    </Text>
    </View>

  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  paragraph:{
    padding: 8, 
  }

})