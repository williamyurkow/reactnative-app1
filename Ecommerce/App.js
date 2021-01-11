import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import Header from './components/Header';
import {uuid} from 'uuidv4';

const App = () => {
  const [items, setItems] = useState([
    {id: uuid(), text: 'Accessories'},
    {id: uuid(), text: 'Top'},
    {id: uuid(), text: 'Bottom'},
    {id: uuid(), text: 'Footwear'},
  ]);

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={items}
        renderItem={({item}) => <Text>{item.text}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 75,
  },
});

export default App;

//Video 25:14 having trouble getting the header to display the page. import trouble with the top import on both pages.
// look into why it isnt displaying or importing.
