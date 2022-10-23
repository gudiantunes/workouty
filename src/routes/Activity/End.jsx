import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FooterButton } from '../../components.styled/Button/Button';
import { FixedFooter } from '../../components.styled/Footer/Footer';
import { FlexWrapper } from '../../components.styled/Wrapper/Wrapper';
import { allQuotes } from '../../assets/quotes/quotes';
import {
  MainLink,
  MainTitle,
  QuoteBox,
  TextBox,
} from '../../components.styled/Label/Label';

function End(props) {
  const navigate = useNavigate();
  const [randomQuoteIdx, setRandomQuoteIdx] = useState(
    Math.floor(Math.random() * allQuotes.length)
  );

  return (
    <FlexWrapper className='center' gap='3em'>
      <MainTitle className='center'>You finised it!</MainTitle>

      <QuoteBox className='center'>
        <p>{allQuotes[randomQuoteIdx].quote}</p>
        <small>{allQuotes[randomQuoteIdx].author}</small>
      </QuoteBox>
      <small className='center'>
        Quotes by:{' '}
        <MainLink
          href='https://randomwordgenerator.com/motivational-quote.php'
          target='_blank'
        >
          randomwordgenerator.com
        </MainLink>
      </small>
      <FixedFooter>
        <FooterButton onClick={() => navigate('/')}>Home</FooterButton>
      </FixedFooter>
    </FlexWrapper>
  );
}

export default End;
