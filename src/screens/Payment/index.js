import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Swiper from 'react-native-web-swiper';
import 'intl';

import {
  SafeAreaView,
  ContainerHeader,
  Header,
  Symbol,
  Value,
  Text,
  VirtualKeyboard,
  KeyboardRow,
  Key,
  WrapperKey,
  KeyText,
  PaymentMethods,
  SlidePage,
  SlideItem,
  PaymentMethod,
  PaymentMethodText,
} from './styles';

import ic_money from '../../../assets/icons/ic_money.png';
import ic_debit from '../../../assets/icons/ic_debit.png';
import ic_credit from '../../../assets/icons/ic_credit.png';
import ic_vr from '../../../assets/icons/ic_vr.png';
import ic_cupom from '../../../assets/icons/ic_cupom.png';

export default class Payment extends Component {
  state = {
    value: '0,00',
  };

  onPress = val => {
    let curText = this.state.value.replace(/,/g, '').replace(/\./g, '');

    if (val === 'backspace') {
      curText = curText.slice(0, -1);
    } else if (curText.length > 8) {
      return;
    } else {
      curText += val;
    }

    const position = curText.length - 2; // 2 === casas decimais
    curText = curText.substr(0, position) + '.' + curText.substr(position);

    this.setState({value: this.formatMoney(curText)});
  };

  payBill = method => {
    const {value} = this.state;

    this.props.navigation.navigate('Invoice', {
      value,
      method,
    });
  };

  formatMoney = value => {
    const formatter = new Intl.NumberFormat('pt-BR', {
      currency: 'BRL',
      minimumFractionDigits: 2,
    });
    return formatter.format(value);
  };

  render() {
    const {value} = this.state;
    return (
      <LinearGradient
        colors={['#7b2db3', '#9241cc', '#aa45b5', '#b85ec2']}
        style={styles.fullHeight}
        start={{x: 0.0, y: 0.4}}
        end={{x: 1.0, y: 1.0}}>
        <SafeAreaView>
          <ContainerHeader>
            <Header>
              <Symbol>R$</Symbol>
              <Value>{value}</Value>
            </Header>
            <Text>TOTAL A PAGAR</Text>
          </ContainerHeader>

          <VirtualKeyboard>
            {Row([
              {text: 1, onPress: () => this.onPress(1)},
              {text: 2, onPress: () => this.onPress(2)},
              {text: 3, onPress: () => this.onPress(3)},
            ])}
            {Row([
              {text: 4, onPress: () => this.onPress(4)},
              {text: 5, onPress: () => this.onPress(5)},
              {text: 6, onPress: () => this.onPress(6)},
            ])}
            {Row([
              {text: 7, onPress: () => this.onPress(7)},
              {text: 8, onPress: () => this.onPress(8)},
              {text: 9, onPress: () => this.onPress(9)},
            ])}
            <KeyboardRow>
              <WrapperKey />
              {KeyboardKey({text: 0, onPress: () => this.onPress(0)})}
              {BackSpace({onPress: () => this.onPress('backspace')})}
            </KeyboardRow>
          </VirtualKeyboard>
        </SafeAreaView>
        <PaymentMethods>
          <Swiper
            controlsProps={{
              dotActiveStyle: {backgroundColor: '#7b2db3'},
              prevPos: false,
              nextPos: false,
            }}>
            <SlidePage>
              <SlideItem onPress={() => this.payBill('Dinheiro')}>
                <PaymentMethod source={ic_money} />
                <PaymentMethodText>DINHEIRO</PaymentMethodText>
              </SlideItem>
              <SlideItem onPress={() => this.payBill('Debito')}>
                <PaymentMethod source={ic_debit} />
                <PaymentMethodText>DÉBITO</PaymentMethodText>
              </SlideItem>
              <SlideItem onPress={() => this.payBill('Crédito')}>
                <PaymentMethod source={ic_credit} />
                <PaymentMethodText>CRÉDITO</PaymentMethodText>
              </SlideItem>
            </SlidePage>
            <SlidePage>
              <SlideItem onPress={() => this.payBill('V.R.')}>
                <PaymentMethod source={ic_vr} />
                <PaymentMethodText>V.R.</PaymentMethodText>
              </SlideItem>
              <SlideItem onPress={() => this.payBill('Cupom')}>
                <PaymentMethod source={ic_cupom} />
                <PaymentMethodText>CUPOM</PaymentMethodText>
              </SlideItem>
            </SlidePage>
          </Swiper>
        </PaymentMethods>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  fullHeight: {
    flex: 1,
  },
});

function Row(numbersArray) {
  let cells = numbersArray.map(val => KeyboardKey(val));
  return <KeyboardRow>{cells}</KeyboardRow>;
}

function KeyboardKey({text, onPress}) {
  return (
    <WrapperKey>
      <Key
        onPress={() => {
          onPress();
        }}>
        <KeyText>{text}</KeyText>
      </Key>
    </WrapperKey>
  );
}

function BackSpace({onPress}) {
  return (
    <WrapperKey>
      <Key onPress={() => onPress()}>
        <Icon name="backspace" color="#fff" size={30} />
      </Key>
    </WrapperKey>
  );
}
