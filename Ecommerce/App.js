import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World</Text>
      <Image
        source={{uri: 'https://picsum.photos/200/300'}}
        style={styles.img}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  text: {
    color: 'darkgreen',
    fontSize: 50,
  },
  img: {
    width: 250,
    height: 300,
    borderRadius: 100 / 2,
  },
});

export default App;
