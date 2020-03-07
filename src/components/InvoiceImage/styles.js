import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

export const ImageBackground = styled.ImageBackground`
  width: 230px;
  height: ${Dimensions.get('screen').height - 240};
`;

export const LogoEyemobile = styled.Image`
  width: 130px;
  height: 20px;
`;

export const InvoiceContainer = styled.View`
  flex: 1;
  align-items: center;
  padding-top: 20px;
`;

export const InvoiceWrapper = styled.View`
  flex: 1;
  align-items: center;
  padding: 8px;
  padding-top: 75px;
  padding-bottom: 75px;
  align-items: center;
  justify-content: space-around;
`;

export const InvoiceCompany = styled.Text`
  color: #666;
  font-size: 14px;
  font-weight: bold;
  font-family: 'Tahoma';
`;

export const InvoiceAddress = styled.View`
  align-items: center;
`;

export const Street = styled.Text`
  color: #666;
  font-size: 14px;
  font-family: 'Tahoma';
`;

export const Number = styled.Text`
  color: #666;
  font-size: 14px;
  font-family: 'Tahoma';
`;

export const InvoiceValues = styled.View`
  align-items: center;
`;

export const Value = styled.Text`
  color: #666;
  font-size: 24px;
  font-weight: bold;
  font-family: 'Tahoma';
`;

export const Method = styled.Text`
  color: #666;
  font-size: 14px;
  font-family: 'Tahoma';
`;

export const InvoiceDate = styled.Text`
  color: #666;
  font-size: 11px;
  font-family: 'Tahoma';
`;
