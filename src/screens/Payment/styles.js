import {Platform} from 'react-native';
import styled from 'styled-components/native';

export const SafeAreaView = styled.SafeAreaView`
  flex: 1;
`;

export const ContainerHeader = styled.View`
  flex: 1;
  max-height: 85px;
  align-items: center;
  margin-top: 16px;
`;

export const Header = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
`;

export const Value = styled.Text`
  color: #fff;
  font-size: ${Platform.OS === 'ios' ? '65px' : '45px'};
  font-family: 'DIN Condensed';
`;

export const Symbol = styled.Text`
  color: #fff;
  font-size: 35px;
  font-family: 'DIN Condensed';
`;

export const Text = styled.Text`
  color: #fff;
  font-size: 20px;
  font-family: 'DIN Condensed';
`;

export const VirtualKeyboard = styled.View`
  flex: 1;
  margin-top: 24px;
  margin-bottom: 24px;
  flex-wrap: wrap;
`;

export const KeyboardRow = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const WrapperKey = styled.View`
  width: 60px;
  height: 60px;
`;

export const Key = styled.TouchableOpacity`
  border-width: 2px;
  border-radius: 40px;
  border-color: #fff;
  flex-grow: 1;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const KeyText = styled.Text`
  color: #fff;
  font-size: 35px;
  margin-top: ${Platform.OS === 'ios' ? '15px' : '0'};
  font-family: 'DIN Condensed';
`;

export const PaymentMethods = styled.View`
  flex: 1;
  max-height: 160;
  background-color: #fff;
  margin-right: 16px;
  margin-left: 16px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

export const SlidePage = styled.View`
  flex: 1;
  max-height: 140;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

export const SlideItem = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;

export const PaymentMethod = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 40px;
`;

export const PaymentMethodText = styled.Text`
  color: #000;
  font-size: 16px;
  margin-top: 12px;
  font-family: 'DIN Condensed';
`;
