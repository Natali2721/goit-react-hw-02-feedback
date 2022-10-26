import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Warning = styled.p`
  color: ${p => p.theme.colors.tomato};
  font-size: ${p => p.theme.fontSizes.l};
  font-family: ${p => p.theme.fonts.body};
  padding-top: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
`;

const Notification = ({ text }) => <Warning>{text}</Warning>;

export default Notification;

Notification.prototype = {
  text: PropTypes.string,
};
