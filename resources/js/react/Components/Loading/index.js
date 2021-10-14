import { useState } from 'react';
import { css } from '@emotion/core';
import ClipLoader from 'react-spinners/CircleLoader';

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
  font-size: '7px';
`;

function App() {
  let [loading] = useState(true);
  let [color] = useState('#000');

  return (
    <div className='sweet-loading'>
      <ClipLoader color={color} loading={loading} css={override} size={25} />
    </div>
  );
}

export default App;
