import React from 'react';

import './styles.css';

const GMAL_QUOTE_LINK = 'https://en.wikipedia.org/wiki/Archimedes';

const Quote = ({ showGMAL }) => {
  const showOrHide = showGMAL ? 'quote-hide' : 'quote-show';

  return (
    <div className={`quote ${showOrHide} font-weight-light`}>
      <p className="quote-text">
        <i>
          <p>"Give me a lever</p>
          <p>and a place to stand,</p>
          <p>and I shall move the world."</p>
        </i>
      </p>
    <a className="source" href={GMAL_QUOTE_LINK}>Archimedes</a>
    </div>
  );
}

export default Quote;
