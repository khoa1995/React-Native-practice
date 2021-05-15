import React, {Component} from 'react';
import {Text, StyleSheet, View, SectionList} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

export default class DemoSectionList extends Component {
  DATA = [
    {
      title: 'Main dishes',
      data: ['Pizza', 'Burger', 'Risotto'],
    },
    {
      title: 'Sides',
      data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
    },
    {
      title: 'Drinks',
      data: ['Water', 'Coke', 'Beer'],
    },
    {
      title: 'Desserts',
      data: ['Cheese Cake', 'Ice Cream'],
    },
    {
      title: 'Drinks',
      data: ['Water', 'Coke', 'Beer'],
    },
    {
      title: 'Desserts',
      data: ['Cheese Cake', 'Ice Cream'],
    },
    {
      title: 'Desserts',
      data: ['Cheese Cake', 'Ice Cream'],
    },
    {
      title: 'Desserts',
      data: ['Cheese Cake', 'Ice Cream'],
    },
    {
      title: 'Desserts',
      data: ['Cheese Cake', 'Ice Cream'],
    },
  ];
  renderItem = ({item}) => <Text style={styles.itemTxt}>{item}</Text>;
  renderSectionHeader = ({section}) => {     
    return <Text style={styles.Header}>{section.title}<Icon name="rocket" size={30} color="#900" /></Text>;
  };
  render() {
    return (
      <View>
        <SectionList
          stickySectionHeadersEnabled
          sections={this.DATA}
          renderSectionHeader={this.renderSectionHeader}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => index.toString()}></SectionList>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  itemTxt: {
    fontSize: 20,
  },
  Header: {
    fontSize: 40,
    fontWeight: 'bold',
    backgroundColor: 'grey'
  },
});
