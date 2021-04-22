import React from 'react';
import {View, StyleSheet } from 'react-native';

const App = () => {
    return(
      <>
        <View style={styles.blockOne}>
          <View style={styles.blockChildYellow}></View>
          <View style={styles.blockChildYellow}></View>
        </View>
        <View style={styles.blockTwo}>
          <View style={styles.row}>
            <View style={styles.blockChildBlue}></View>
            <View style={styles.blockChildBlue}></View>
          </View>
          <View style={styles.row}>
            <View style={styles.blockChildBlue}></View>
            <View style={styles.blockChildBlue}></View>
          </View>
        </View>
      </>
    )
}
const styles = StyleSheet.create({
  blockOne:{
    flex: 1,
    backgroundColor: '#a1c99a',
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    flexDirection: 'column'
  },
  blockTwo: {
    flex: 1,
    backgroundColor: '#c8c8fa',
    marginTop: 20,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
  },
  blockChildYellow: {
    flex: 1 ,
    backgroundColor: '#ffffc2',
    marginVertical: 30,
    marginHorizontal: 20,
    borderRadius: 20
  },
  blockChildBlue: {
    flex: 1,
    backgroundColor: '#4f82c0',
    borderRadius: 20,
    marginHorizontal: 20
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 20
  }
})
export default App