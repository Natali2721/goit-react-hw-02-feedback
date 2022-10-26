import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  padding: 10px 15px;
  margin-right: 10px;
  font-size: 24px;
  background-color: transparent;
  border: 1px black solid;
  border-radius: 10px;
  cursor: pointer;
  transition: color 250ms linear;
  transition: background-color 250ms linear;
  &:hover {
    background-color: blue;
    color: white;
  }
`;

const FeedbackOptions = ({ options, onLeaveFeedback }) =>
  Object.keys(options).map(item => (
    <Button
      type="button"
      name={item}
      onClick={() => onLeaveFeedback(item)}
      key={item}
    >
      {item}
    </Button>
  ));

export default FeedbackOptions;

FeedbackOptions.prototype = {
  options: PropTypes.objectOf(PropTypes.number),
  onLeaveFeedback: PropTypes.func.isRequired,
};
