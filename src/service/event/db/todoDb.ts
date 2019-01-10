import {Alert, AsyncStorage} from 'react-native';

export interface ITodo {
  content: string;
  createdAt: Date;
}

export class TodoDB {
  private readonly KEY = 'todos';
  private static instance: TodoDB;

  private constructor () {}

  public static getInstance(): TodoDB {
    if (!TodoDB.instance) {
      TodoDB.instance = new TodoDB();
    }
    return TodoDB.instance;
  }

  public async getTodo(content: string): Promise<ITodo> {
    try {
      const json = await AsyncStorage.getItem(this.KEY);
      const todos = json ? JSON.parse(json) : [];

      return todos.find((todo: ITodo) => todo.content === content);
    } catch (err) {
      Alert.alert('DB 에러');
      console.error(err);
    }
  }

  public async listTodo(): Promise<ITodo[]> {
    try {
      const json = await AsyncStorage.getItem(this.KEY);

      return json ? JSON.parse(json) : [];
    } catch (err) {
      Alert.alert('DB 에러');
      console.error(err);
    }
  }

  public async saveTodo(todoContent: string): Promise<void> {
    try {
      const json = await AsyncStorage.getItem(this.KEY);
      const todos = json ? JSON.parse(json) : [];
      const newTodo = {content: todoContent, createdAt: new Date().getTime()};

      if (!todos || !todos.length) {
        await AsyncStorage.setItem(this.KEY, JSON.stringify([newTodo]));
        return;
      }

      todos.push(newTodo);
      await AsyncStorage.setItem(this.KEY, JSON.stringify(todos));
    } catch (err) {
      Alert.alert('DB 에러');
      console.error(err);
    }
  }
}
