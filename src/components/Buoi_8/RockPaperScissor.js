import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  Image,
  SafeAreaView,
  Platform,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {
  BackgroundImage,
  Bot,
  Paper,
  Player,
  Rock,
  Scissor,
} from '../../assests/images';
import PlayerItem from './PlayerItem';
import SelectContent from './SelectContent';
import ResultContent from './ResultContent';

export default class RockPaperScissor extends Component {
  state = {
    playerSelect: {id: 'paper', image: Paper, status: true},
    botSelect: {id: 'rock', image: Rock, status: false},
    status: false,
    isSelect: 'paper',
    arrayGame: [
      {id: 'scissor', image: Scissor, status: false},
      {id: 'rock', image: Rock, status: false},
      {id: 'paper', image: Paper, status: true},
    ],
    score: 0,
    time: 9,
    disabled: false,
  };
  onSelectItem = selectItem => {
    //Cách 1
    // this.setState({
    //     playImage: selectItem.image,
    //     isSelect: selectItem.id
    // })

    //Cách 2
    const arrayGame = this.state.arrayGame;
    //lấy giá trị index
    const index = arrayGame.findIndex(item => item.id === selectItem.id);
    if (!arrayGame[index].status) {
      const prevSelectIndex = arrayGame.findIndex(item => item.status);
      arrayGame[index].status = true;
      arrayGame[prevSelectIndex].status = false;
    }
    this.setState({
      playerSelect: selectItem,
      arrayGame,
    });
  };
  onPressPlayButton = () => {
    this.setState({disabled: true});
    const random = setInterval(() => {
      this.state.botSelect.image = this.state.arrayGame[
        Math.floor(Math.random() * 3)
      ].image;

      this.setState({
        botSelect: this.state.botSelect,
      });
    }, 100);
    setTimeout(() => {
      clearInterval(random);
      let time, score;
      switch (this.state.playerSelect.id) {
        case 'paper':
          if (this.state.botSelect.id === this.state.playerSelect.id) {
            time = this.state.time - 1;
          } else if (this.state.botSelect.id === 'scissor') {
            time = this.state.time - 1;
            score = this.state.score - 1;
          } else {
            time = this.state.time + 1;
            score = this.state.score + 1;
          }
          break;
        case 'scissor':
          if (this.state.botSelect.id === this.state.playerSelect.id) {
            time = this.state.time - 1;
          } else if (this.state.botSelect.id === 'rock') {
            time = this.state.time - 1;
            score = this.state.score - 1;
          } else {
            time = this.state.time + 1;
            score = this.state.score + 1;
          }
          break;
        case 'rock':
          if (this.state.botSelect.id === this.state.playerSelect.id) {
            time = this.state.time - 1;
          } else if (this.state.botSelect.id === 'paper') {
            time = this.state.time - 1;
            score = this.state.score - 1;
          } else {
            time = this.state.time + 1;
            score = this.state.score + 1;
          }
          break;

        default:
          break;
      }
      this.setState({disabled: false, time, score});
    }, 3000);
  };
  render() {
    return (
      <ImageBackground
        style={styles.BackgroundContent}
        source={BackgroundImage}>
        <StatusBar barStyle="light-content" />
        <View style={styles.Overlay}>
          <SafeAreaView style={styles.Container}>
            <View style={styles.PlayerContent}>
              {/* Player  */}
              <PlayerItem
                game={this.state.playerSelect.image}
                player={Player}
              />

              {/* Computer */}
              <PlayerItem game={this.state.botSelect.image} player={Bot} />
            </View>

            {/* Image Select Content */}
            <SelectContent
              arrayGame={this.state.arrayGame}
              onSelectItem={this.onSelectItem}
              isSelect={this.state.isSelect}
              disabled={this.state.disabled}
            />

            {/* Result and Buttons */}
            <ResultContent
              onPressPlayButton={this.onPressPlayButton}
              time={this.state.time}
              score={this.state.score}
              disabled={this.state.disabled}
            />
          </SafeAreaView>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    paddingVertical: Platform.OS === 'android' ? 25 : 0,
  },
  BackgroundContent: {
    flex: 1,
  },
  Overlay: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    flex: 1,
  },
  PlayerContent: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },

  StyleBorder: {
    borderRadius: 5,
    borderColor: 'yellow',
    borderWidth: 3,
    padding: 10,
    width: 80,
    height: 80,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
