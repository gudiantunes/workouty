import React from 'react';
import { FooterButton } from '../../components.styled/Button/Button';
import { FixedFooter } from '../../components.styled/Footer/Footer';

function ExerciseFooter({ onSkip, onDone }) {
  return (
    <FixedFooter>
      <FooterButton secondary onClick={onSkip}>
        Skip
      </FooterButton>
      <FooterButton onClick={onDone}>Done</FooterButton>
    </FixedFooter>
  );
}

export default ExerciseFooter;
