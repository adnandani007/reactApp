import React from 'react';
import PropTypes from 'prop-types';

const InlineMessages = ({text}) => <span style={{color:"#ca3333"}}>{text}</span>

InlineMessages.propTypes = {
  text: PropTypes.string.isRequired
};
export default InlineMessages;
