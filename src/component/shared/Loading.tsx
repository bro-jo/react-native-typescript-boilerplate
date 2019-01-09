import * as React from 'react';
import {ActivityIndicator, View} from 'react-native';
import Color from '../../constant/Color';

export const Loading = () => (
  <View
    style={{
      flex: 1,
      height: 100,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
    }}
  >
    <ActivityIndicator
      style={{margin: 10}}
      size="large"
      color={Color.primary}
    />
  </View>
);
