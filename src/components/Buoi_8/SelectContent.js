import React, {Component} from 'react';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';

export default class SelectContent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {arrayGame, isSelect, disabled} = this.props;
    return (
      <View style={styles.SelectContent}>
        {arrayGame.map(item => (
          <TouchableOpacity
            disabled={disabled}
            onPress={()=> this.props.onSelectItem(item)}
            key={item.id}
            //Cách 1
            // style={[styles.StyleBorder, item.id === isSelect && styles.SelectedItem]}
            //Cách 2
            style={[styles.StyleBorder, item.status && styles.SelectedItem]}
            >
            <Image
              style={[styles.ImageGame, styles.ImageSelect]}
              source={item.image}
            />
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  SelectContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 20,
  },
  StyleBorder: {
    borderRadius: 5,
    padding: 10,
    width: 80,
    height: 80,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ImageSelect: {
    width: 50,
    height: 50,
  },
  SelectedItem: {
    borderColor: 'yellow',
    borderWidth: 3,
  },
});
