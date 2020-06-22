import React, {useState} from 'react';
import {StyleSheet,Text, View,FlatList} from 'react-native';

export default function App() {
    const [todos, setTodos]=useState([
        {Text: 'buy coffee',key: '1'},
        {Text: 'create an app',key: '2'},
        {Text: 'play on the switch',key: '3'}

    ]);
  return (
      <View Style={Styles.container}>
      {/*header*/}
      <View Style={Styles.content}>
      {/*to from*/}
      <View Style={Styles.list}>
      <FlatList
      data={todos}
      renderItem{({item})} => (
      )}
      />
      </View></View>
      </View>
  )

}