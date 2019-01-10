import * as React from 'react';
import {Alert, Button, FlatList, SafeAreaView, Text, TextInput, View} from 'react-native';
import Color from '../../constant/Color';
import {ITodo, TodoDB} from '../../service/event/db/todoDb';

interface IState {
  todoInput: string;
  todos: ITodo[];
}

export default class SettingScreen extends React.Component {
  public static readonly key = 'SettingScreen';
  public state: IState = {
    todoInput: '',
    todos: [],
  };

  private async sync() {
    const todos = await TodoDB.getInstance().listTodo();
    this.setState({todos});
  }

  private async saveTodoAndClearInput() {
    const todoInput = this.state.todoInput;
    if (!todoInput) {
      Alert.alert('todo를 입력하세요');
      return;
    }

    await TodoDB.getInstance().saveTodo(todoInput);
    this.setState({todoInput: ''});
    this.sync();
  }

  public componentDidMount() {
    this.sync();
  }

  private renderListItem(item: ITodo) {
    return (
      <View
        style={{
          marginLeft: 25,
          marginRight: 25,
        }}
      >
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
        <Text style={{textAlign: 'center'}}>SettingScreen</Text>
        <Text >Left Text</Text>
        <Text style={{textAlign: 'right'}}>Right Text</Text>
        <View style={{flexDirection: 'row', marginTop: 20, justifyContent: 'center'}}>
          <TextInput
            style={{
              width: 280,
              height: 40,
              marginRight: 5,
              padding: 10,
              backgroundColor: Color.white,
              borderWidth: 1,
              borderColor: Color.grayLight4,
              borderRadius: 4,
            }}
            placeholder="todo"
            value={this.state.todoInput}
            onChangeText={(text) => this.setState({todoInput: text})}
          />
          <Button title="Add" onPress={() => this.saveTodoAndClearInput()} />
        </View>
        <FlatList
          keyExtractor={(item, i) => `todo-${i}`}
          data={this.state.todos}
          renderItem={({item}) => this.renderListItem(item)}
        />
      </SafeAreaView>
    );
  }
}
