import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native';
import {
  BackgroundImage,
  Bot,
  Paper,
  Player,
  Rock,
  Scissor,
} from '../../../assests/images';
import PlayerItem from './PlayerItem';
import SelectContent from './SelectContent';
import ResultContent from './ResultContent';
import { connect } from 'react-redux';

class BaiTapRedux extends Component {
  state = {
    // playerSelect: {id: 'paper', image: Paper, status: true},
    // botSelect: {id: 'rock', image: Rock, status: false},
    status: false,
    isSelect: 'paper',
    // arrayGame: [
    //   {id: 'scissor', image: Scissor, status: false},
    //   {id: 'rock', image: Rock, status: false},
    //   {id: 'paper', image: Paper, status: true},
    // ],
    // score: 0,
    // time: 9,
    // disabled: false,
  };
  // onSelectItem = selectItem => {
  //   //Cách 1
  //   // this.setState({
  //   //     playImage: selectItem.image,
  //   //     isSelect: selectItem.id
  //   // })

  //   //Cách 2
  //   const arrayGame = this.state.arrayGame;
  //   //lấy giá trị index
  //   const index = arrayGame.findIndex(item => item.id === selectItem.id);
  //   if (!arrayGame[index].status) {
  //     const prevSelectIndex = arrayGame.findIndex(item => item.status);
  //     arrayGame[index].status = true;
  //     arrayGame[prevSelectIndex].status = false;
  //   }
  //   this.setState({
  //     playerSelect: selectItem,
  //     arrayGame,
  //   });
  // };
  // onPressPlayButton = () => {
  //   this.setState({disabled: true});
  //   const random = setInterval(() => {
  //     this.state.botSelect = this.state.arrayGame[
  //       Math.floor(Math.random() * 3)
  //     ];

  //     this.setState({
  //       botSelect: this.state.botSelect,
  //     },()=> {
  //       console.log(this.state.botSelect)
  //     });
  //   }, 100);
  //   setTimeout(() => {
  //     clearInterval(random);
  //     let time, score;
  //     switch (this.state.playerSelect.id) {
  //       case 'paper':
  //         if (this.state.botSelect.id === 'paper') {
  //           score = this.state.score
  //           time = this.state.time - 1;
  //         } else if (this.state.botSelect.id === 'scissor') {
  //           if(this.state.score > 0) {
  //             score = this.state.score - 1;
  //           }
  //           if(this.state.time > 0) {
  //             time = this.state.time - 1;
  //           }
  //         } else {
  //           time = this.state.time + 1;
  //           score = this.state.score + 1;
  //         }
  //         break;
  //       case 'scissor':
  //         if (this.state.botSelect.id === 'scissor') {
  //           score = this.state.score
  //           time = this.state.time - 1;
  //         } else if (this.state.botSelect.id === 'rock') {
  //           time = this.state.time - 1;
  //           score = this.state.score - 1;
  //         } else {
  //           time = this.state.time + 1;
  //           score = this.state.score + 1;
  //         }
  //         break;
  //       case 'rock':
  //         if (this.state.botSelect.id === 'rock') {
  //           score = this.state.score
  //           time = this.state.time - 1;
  //         } else if (this.state.botSelect.id === 'paper') {
  //           time = this.state.time - 1;
  //           score = this.state.score - 1;
  //         } else {
  //           time = this.state.time + 1;
  //           score = this.state.score + 1;
  //         }
  //         break;

  //       default:
  //         break;
  //     }
  //     this.setState({disabled: false, time, score});
  //   }, 3000);
  // };
  render() {
    const {playerSelect, botSelect} = this.props
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
                game={playerSelect.image}
                player={Player}
              />

              {/* Computer */}
              <PlayerItem 
                game={botSelect.image} 
                player={Bot} />
            </View>

            {/* Image Select Content */}
            <SelectContent/>
            {/* Result and Buttons */}
            <ResultContent/>
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
const mapStateToProp = state => {
  return {
    playerSelect: state.GameReducer.playerSelect,
    botSelect: state.GameReducer.botSelect,
  }
}
export default connect(mapStateToProp)(BaiTapRedux)