import React from 'react';

const Home = () => {
  return (
    <div>
      default ssr home page
      <button onClick={() => {console.log('click on button')}}>
        default button
      </button>
    </div>

  )
};

export default Home;
