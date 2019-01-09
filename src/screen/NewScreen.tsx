import * as React from 'react';
import {Image, Text, View} from 'react-native';
import Color from '../constant/Color';

export default class NewScreen extends React.Component {
  public static readonly key = 'NewScreen';

  public render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: Color.primary,
        }}
      >
        {this.renderLogo()}
        {this.renderText()}
      </View>
    );
  }

  private renderLogo() {
    return (
      <View>
        <Image
          style={{width: 45, height: 45}}
          source={require('../../image/react_native_logo.png')}
          resizeMode="contain"
        />
      </View>
    );
  }

  private renderText() {
    return (
      <Text style={{marginTop: 15, fontSize: 16, color: Color.white}}>
        NewScreen
      </Text>
    );
  }
}
