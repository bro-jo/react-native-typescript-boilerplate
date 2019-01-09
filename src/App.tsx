import React, {Component} from 'react';
import {Alert, AlertButton, BackHandler, Platform, StyleSheet} from 'react-native';
import {Actions, Router, Scene, Stack} from 'react-native-router-flux';
import {BottomTabBar} from './component/tab/BottomTabBar';
import {TAP_WRAPPER_SCENE_KEY} from './component/tab/tabKey';
import NewScreen from './screen/NewScreen';
import SplashScreen from './screen/SplashScreen';
import FirstTabScreen from './screen/tab/FirstTabScreen';
import NoticeScreen from './screen/tab/NoticeScreen';
import SettingScreen from './screen/tab/SettingScreen';

export default class App extends Component {
  private handleBackPress() {
    if ((Actions.state as any).index > 0) {
      Actions.pop();
      return true;
    }

    const buttons: AlertButton[] = [
      {text: '취소', style: 'cancel'},
      {text: '종료', style: 'destructive', onPress: () => BackHandler.exitApp()},
    ];
    Alert.alert(null, '앱을 종료하시겠습니까?', buttons, {onDismiss: () => null});
    return true;
  }

  public componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
  }

  public componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
  }

  private renderBottomTabScenes() {
    return (
      <Scene
        key={TAP_WRAPPER_SCENE_KEY}
        tabs
        tabBarPosition="bottom"
        tabBarComponent={BottomTabBar}
        hideNavBar
      >
        <Scene
          key={FirstTabScreen.key}
          component={FirstTabScreen}
          tabBarLabel="Tab 1"
          hideNavBar
        />
        <Scene
          key={NoticeScreen.key}
          component={NoticeScreen}
          tabBarLabel="Tab 2"
          hideNavBar
        />
        <Scene
          key={SettingScreen.key}
          component={SettingScreen}
          tabBarLabel="Tab 3"
          hideNavBar
        />
      </Scene>
    );
  }

  public render() {
    return (
      <Router>
        <Stack key="root">
          <Scene
            key={SplashScreen.key}
            component={SplashScreen}
            initial
            hideNavBar
          />

          <Scene
            key={NewScreen.key}
            component={NewScreen}
          />
          {this.renderBottomTabScenes()}
        </Stack>
      </Router>
    );
  }
}
