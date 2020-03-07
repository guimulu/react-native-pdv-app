import {StyleSheet, Platform} from 'react-native';
import styled from 'styled-components/native';

export const SafeAreaView = styled.SafeAreaView`
  flex: 1;
`;

export const Header = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  max-height: 40px;
  margin-top: 16px;
`;

export const Text = styled.Text`
  color: #fff;
  margin-top: ${Platform.OS === 'ios' ? '10px' : '0'};
  font-size: 20px;
  font-family: 'DIN Condensed';
`;

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Confirm = styled.TouchableOpacity`
  background-color: #00dcac;
  border-width: ${StyleSheet.hairlineWidth}px;
  border-color: rgba(0, 220, 172, 0.5);
  border-radius: 30px;
  align-items: center;
  align-self: flex-end;
  padding: 12px;
  padding-left: 25px;
  padding-right: 25px;
  margin-top: 15px;
  margin-bottom: 20px;
`;
