import React from 'react';
import { Link } from 'react-router-dom';

function Donate({ text }) {
  return (
    <div>
      <section class='donate'>
        <div class='container py-4 text-center '>
          <p className='pb-3'>{text}</p>
          <Link to='/donation' class='btn1 btn-d  '>
            Donate Now
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Donate;
