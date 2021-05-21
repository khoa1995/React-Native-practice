import React, { Component } from 'react';
import { Provider } from 'react-redux';
import ReduxDemo from './src/components/Buoi_10_Redux';
import BaiTapRedux from './src/components/Buoi_10_Redux/BaiTapRedux/BaiTapRedux';
import store from './src/components/Buoi_10_Redux/redux/store';
import Buoi04 from './src/components/Buoi_4';
import RenderIconState from './src/components/Buoi_5/RenderIconState';
import RenderWithState from './src/components/Buoi_5/RenderWithState';
import Touched from './src/components/Buoi_5/Touched';
import BaiTapEmoji from './src/components/Buoi_6/BaiTapEmoji';
import BaiTapRenderWithMap from './src/components/Buoi_6/BaiTapRenderWithMap';
import BaiTapScrollView from './src/components/Buoi_6/BaiTapScrollView';
import RenderWithMap from './src/components/Buoi_6/RenderWithMap';
import DemoFlatList from './src/components/Buoi_7/DemoFlatList';
import DemoSectionList from './src/components/Buoi_7/DemoSectionList';
import RockPaperScissor from './src/components/Buoi_8/RockPaperScissor';

class App extends Component {
  render() {
    return(
      // <Buoi04/>
      // <Touched/>
      // <RenderWithState/>

      //Bài tập
      // <RenderIconState/>

      // <BaiTapEmoji/>

      // <RenderWithMap/>

      // <BaiTapRenderWithMap/>
      
      // <BaiTapScrollView/>

      // <DemoFlatList/>
      // <DemoSectionList/>

      //Game
      // <RockPaperScissor/>

      //Redux demo
      <Provider store={store}>
        {/* <ReduxDemo/> */}
        <BaiTapRedux/>
      </Provider>
    )
  }
}

export default App;