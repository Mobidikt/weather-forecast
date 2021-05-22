import React from 'react';
import './Loader.scss';

const Loader: React.FC = () => {
  return (
    <section className='loader'>
      <i className='loader__circle' />
      <p className='loader__title'>Loading...</p>
    </section>
  );
};

export default Loader;
