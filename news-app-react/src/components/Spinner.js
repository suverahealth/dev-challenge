import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

function Spinner({ className, label }) {
  return (
    <SpinIcon
      className={className}
      role='alertdialog'
      aria-busy='true'
      aria-label={label}
      aria-live='assertive' />
  );
}

Spinner.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired
};

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(3600deg);
  }
`;

const SpinIcon = styled.div`
  width: 80px;
  height: 80px;
  border: 4px solid #f0f0f0;
  border-radius: 50%;
  border-top: 4px solid #bbb;
  animation: ${spin} 4s linear infinite;
  margin: 0 auto;
`;

export default memo(Spinner);
