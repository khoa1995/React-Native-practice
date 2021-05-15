import React, {Component} from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default class ResultContent extends Component {
    constructor(props){
        super(props)
    }
  render() {
    const { disabled} = this.props;
    return (
      <>
        <View style={styles.InfoContent}>
          <Text style={styles.InfoText}>Score:{this.props.score}</Text>
          <Text style={styles.InfoText}>Times:{this.props.time}</Text>
        </View>

        <View style={styles.ButtonContent}>
          <TouchableOpacity
            disabled = {disabled}
            onPress={this.props.onPressPlayButton}
            style={[styles.ButtonContainer, styles.ButtonPlay , disabled && {backgroundColor: '#bbb'}]}>
            <Text style={styles.ButtonText}>Play</Text>
          </TouchableOpacity>
          <LinearGradient
            style={styles.ButtonContainer}
            start={{x: 0.0, y: 0.75}}
            end={{x: 1, y: 0}}
            colors={['#F37335', '#FDC830']}>
            <TouchableOpacity disabled = {disabled}>
              <Text style={styles.ButtonText}>Reset</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  InfoContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  InfoText: {
    color: '#00fecd',
    fontSize: 30,
  },
  ButtonContent: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  ButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  ButtonContainer: {
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: 120,
    alignItems: 'center',
  },
  ButtonPlay: {
    backgroundColor: '#ff9aff',
  },
});
