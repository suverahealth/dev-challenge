import React from 'react';
import styled from 'styled-components';

import Button from 'components/Button';

function About() {
  return (
    <AboutPage>
      <h1>
        About this app
      </h1>

      <AboutButton
        href='https://github.com/suverahealth/dev-challenge'
        rel='noreferrer'>
        Repo
      </AboutButton>
    </AboutPage>
  );
}

const AboutPage = styled.section`
  color: rgba(0, 0, 0, .87);
  padding: 20px;

  @media (max-width: 486px) {
    padding: 10px;
  }

  h1 {
    font-weight: 400;
    font-size: 34px;
    line-height: 40px;
    margin: 0;
  }
`;

const AboutButton = styled(Button)`
  margin: 6px 8px;
  padding: 0 24px;
`;

export default About;
