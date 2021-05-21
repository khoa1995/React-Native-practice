import {Paper, Rock, Scissor} from '../../../../assests/images';
import {PLAYER_SELECT, PLAY, RESULT,RESET} from '../actions/GameAction'

const initState = {
  arrayGame: [
    {id: 'scissor', image: Scissor, status: false},
    {id: 'rock', image: Rock, status: false},
    {id: 'paper', image: Paper, status: true},
  ],
  playerSelect: {id: 'paper', image: Paper, status: true},
  botSelect: {id: 'rock', image: Scissor, status: false},
  score: 0,
  time: 9,
};

const GameReducer = (state = {...initState}, action) => {
  switch (action.type) {
    case PLAYER_SELECT:
      let newArrayGame = [...state.arrayGame];
      const selectItem = state.arrayGame.find(
        item => item.id === action.payload.id,
      );
      if (!selectItem.status) {
        //nếu là false
        const previousSelect = state.arrayGame.find(item => item.status);
        selectItem.status = true;
        previousSelect.status = false;
        state.arrayGame = newArrayGame;
      }
      state.playerSelect = selectItem;
      return state;

    case 'PLAY':
      state.botSelect = state.arrayGame[action.payload];
      return state;

    case RESULT:
      switch (state.playerSelect.id) {
        case 'paper':
          if (state.botSelect.id === 'paper') {
            state.time--;
          } else if (state.botSelect.id === 'rock') {
            state.score++;
          } else {
            state.time--;
            if(state.score > 0) {
                state.score--;
            }
          }
          break;
        case 'rock':
          if (state.botSelect.id === 'rock') {
            state.time--;
          } else if (state.botSelect.id === 'scissor') {
            state.score++;
          } else {
            state.time--;
            if(state.score > 0) {
                state.score--;
            }
          }
          break;
        case 'scissor':
          if (state.botSelect.id === 'scissor') {
            state.time--;
          } else if (state.botSelect.id === 'paper') {
            state.score++;
          } else {
            state.time--;
            if(state.score > 0) {
                state.score--;
            }
          }
          break;
      }
      return state;
    
    case RESET:
        const arrayGame= [
            {id: 'scissor', image: Scissor, status: false},
            {id: 'rock', image: Rock, status: false},
            {id: 'paper', image: Paper, status: true},
          ];
        //   state.playerSelect= {id: 'paper', image: Paper, status: true};
        //   state.botSelect= {id: 'rock', image: Scissor, status: false};
        //   state.score= 0;
        //   state.time= 9;

        // state thay đổi
        //đè theo thứ tự arrayGame đè iniState đè state => trở về trạng thái ban đầu
        return {...state, ...initState, arrayGame}
      default:
      return state;
  }
};

export default GameReducer;
