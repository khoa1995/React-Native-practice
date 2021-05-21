import React, {Component} from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {COUNT_DOWN, COUNT_UP, countUp, countDown} from './redux/actions/countAction';

class ReduxDemo extends Component {
  render() {
    return (
      <View style={styles.Container}>
        <Text> Demo Redux </Text>
        <Text>User: {this.props.userName}</Text>
        <Text style={styles.textStyle}>Number: {this.props.number}</Text>
        <View style={styles.btnContent}>
          <TouchableOpacity onPress={this.props.countUp}>
            <Text style={styles.BtnItm}>Count up</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.props.countDown}>
            <Text style={styles.BtnItm}>Count down</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 24,
  },
  btnContent: {
    width: '100%',
    justifyContent: 'space-around',
    paddingTop: 20,
    flexDirection: 'row',
  },
  btnItm: {
    backgroundColor: '#fefefe',
    padding: 20,
  },
});

//props sẽ có dispatch và state
const mapStateToProp = state => {
  return {
    number: state.countReducer.number,
    userName: state.userReducer.userName
  };
};
const mapDispatchToProp = dispatch => {
  return {
    countUp: (number) => {
      dispatch(countUp(number));
    },
    countDown: () => {
      dispatch(countDown());
    },
  };
};
export default connect(mapStateToProp, mapDispatchToProp)(ReduxDemo);
