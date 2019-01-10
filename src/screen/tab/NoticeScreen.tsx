import * as React from 'react';
import {Alert, FlatList, SafeAreaView, Text, View} from 'react-native';
import Color from '../../constant/Color';
import {OnTabEvent} from '../../service/event/onTabEvent';

interface INotice {
  title: string;
  content: string;
}

interface IState {
  notices: INotice[];
  page: number;
}

export default class NoticeScreen extends React.Component {
  private tabEventId: string;
  private listRef: FlatList<INotice>;
  public static readonly key = 'NoticeScreen';
  public state: IState = {
    notices: [],
    page: 1,
  };

  private buildMockNotice(i: number) {
    return {title: `notice-${i}`, content: `notice content-${i}`};
  }

  private loadMore(page: number) {
    try {
      this.setState({isLoading: true});

      const notices = Array.from(Array(20).keys()).map((e) => this.buildMockNotice(page * 20 + e));

      this.setState((prevState: IState) => ({notices: prevState.notices.concat(notices), page, isLoading: false}));
    } catch (err) {
      console.error(err);
      Alert.alert('로딩 에러');
    } finally {
      this.setState({isLoading: false});
    }
  }

  private async load() {
    this.loadMore(1);
  }

  private initTabEvent() {
    this.tabEventId = OnTabEvent.addEventListener(({currentTab, clickedTab}) => {
      if (clickedTab !== 1) {
        return;
      }

      this.listRef.scrollToOffset({offset: 0, animated: true});
      setTimeout(() => {
        this.setState({notices: [], page: 1});
        this.load();
      }, 700);
    });
  }

  public componentDidMount() {
    this.load();
    this.initTabEvent();
  }

  private renderListItem(item: INotice) {
    return (
      <View
        style={{
          marginLeft: 25,
          marginRight: 25,
        }}
      >
        <Text style={{marginTop: 9, fontSize: 15, color: Color.grayDark3}}>{item.title}</Text>
        <Text style={{marginTop: 5, fontSize: 13, color: Color.grayDark1}}>{item.content}</Text>
        <View style={{marginTop: 9, height: 1, backgroundColor: Color.grayLight5}} />
      </View>
    );
  }

  public render() {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: Color.white,
        }}
      >
        <FlatList
          keyExtractor={(item, i) => `notice-${i}`}
          data={this.state.notices}
          renderItem={({item}) => this.renderListItem(item)}
          onEndReachedThreshold={1}
          onEndReached={() => this.loadMore(this.state.page + 1)}
          ref={(ref: FlatList<INotice>) => { this.listRef = ref; }}
        />
      </SafeAreaView>
    );
  }
}
