import * as React from 'react';
import {View} from 'react-native';
import Color from '../../constant/Color';
import {OnTabEvent} from '../../service/event/onTabEvent';
import FirstTabScreen from '../../screen/tab/FirstTabScreen';
import NoticeScreen from '../../screen/tab/NoticeScreen';
import SettingScreen from '../../screen/tab/SettingScreen';
import {BottomTab} from './BottomTab';

interface IProps {
  jumpTo: (key: string) => void;
}

export class BottomTabBar extends React.Component<IProps> {
  public state = {
    currentTab: 0,
  };

  private handleClickTab({clickedTab, screenKey}: {clickedTab: number, screenKey: string}) {
    const currentTab = this.state.currentTab;
    this.setState({currentTab: clickedTab});
    this.props.jumpTo(screenKey);
    OnTabEvent.emit({currentTab, clickedTab});
  }

  public render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          height: 70,
          paddingLeft: 20,
          paddingRight: 20,
          paddingBottom: 5,
          backgroundColor: Color.primary,
        }}
      >
        <BottomTab
          icon={require('../../../image/react_native_logo.png')}
          text="RNTS"
          isActive={this.state.currentTab === 0}
          onPress={() => this.handleClickTab({clickedTab: 0, screenKey: FirstTabScreen.key})}
        />
        <BottomTab
          icon={require('../../../image/tab_icon_notice.png')}
          text="공지사항"
          isActive={this.state.currentTab === 1}
          onPress={() => this.handleClickTab({clickedTab: 1, screenKey: NoticeScreen.key})}
        />
        <BottomTab
          icon={require('../../../image/tab_icon_setting.png')}
          text="설정"
          isActive={this.state.currentTab === 3}
          onPress={() => this.handleClickTab({clickedTab: 3, screenKey: SettingScreen.key})}
        />
      </View>
    );
  }
}
