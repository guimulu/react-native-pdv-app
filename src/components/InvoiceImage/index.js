import React from 'react';

import {
  LogoEyemobile,
  ImageBackground,
  InvoiceContainer,
  InvoiceWrapper,
  InvoiceCompany,
  InvoiceAddress,
  Street,
  Number,
  InvoiceValues,
  Value,
  Method,
  InvoiceDate,
} from './styles';

import recibo_background from '../../../assets/images/Recibo_background.png';
import ic_logo from '../../../assets/icons/ic_logo.png';

export default function InvoiceImage({value, method, formatDate}) {
  return (
    <InvoiceContainer>
      <ImageBackground source={recibo_background}>
        <InvoiceWrapper>
          <LogoEyemobile source={ic_logo} />
          <InvoiceCompany>Eyemobile Tecnologia LTDA.</InvoiceCompany>
          <InvoiceAddress>
            <Street>Rua Airton Roberto de Oliveira</Street>
            <Number>Número 64</Number>
          </InvoiceAddress>
          <InvoiceValues>
            <Value>R${value}</Value>
            <Method>{method}</Method>
          </InvoiceValues>
          <InvoiceDate>{formatDate}</InvoiceDate>
        </InvoiceWrapper>
      </ImageBackground>
    </InvoiceContainer>
  );
}
