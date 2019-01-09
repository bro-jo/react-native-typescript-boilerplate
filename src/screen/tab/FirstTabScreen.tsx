import * as React from 'react';
import {Button, SafeAreaView, Text, View} from 'react-native';
import Color from '../../constant/Color';
import {Actions} from 'react-native-router-flux';
import NewScreen from '../NewScreen';

export default class FirstTabScreen extends React.Component {
  public static readonly key = 'FirstTabScreen';

  public render() {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: Color.primary,
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-end',
            backgroundColor: Color.primaryLight1,
          }}
        >
          <Text style={{margin: 10, color: Color.white}}>FirstTabScreen</Text>
          <View
            style={{
              width: '100%',
              padding: 20,
              flexDirection: 'row',
              justifyContent: 'center',
            }}
          >
            <Button
              title="Open New Tab"
              color={Color.primary}
              onPress={() => Actions.push(NewScreen.key, {title: 'Header Title'})}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
