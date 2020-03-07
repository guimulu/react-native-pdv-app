import React from 'react';
import {TouchableOpacity, StyleSheet, StatusBar} from 'react-native';
import InvoiceImage from '../../components/InvoiceImage';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';

import {Header, Text, Container, Confirm, SafeAreaView} from './styles';

export default function Invoice({route, navigation}) {
  const value = route.params.value;
  const method = route.params.method;

  const formatDate = new Intl.DateTimeFormat('pt-BR', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  }).format(new Date());

  return (
    <LinearGradient
      colors={['#00d1b2', '#b85ec2']}
      style={styles.fullHeight}
      start={{x: 0.0, y: 0.4}}
      end={{x: 1.0, y: 1.0}}>
      <SafeAreaView>
        <Header>
          <TouchableOpacity onPress={() => navigation.navigate('Payment')}>
            <Icon name="chevron-left" color="#fff" size={28} />
          </TouchableOpacity>
          <Text>PAGAMENTO REALIZADO COM SUCESSO</Text>
          <Text />
        </Header>
        <InvoiceImage value={value} method={method} formatDate={formatDate} />
        <Container>
          <Confirm>
            <Text>CONFIRMAR</Text>
          </Confirm>
        </Container>
      </SafeAreaView>
      <StatusBar barStyle="dark-content" backgroundColor="#00d1b2" />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  fullHeight: {
    flex: 1,
  },
});
