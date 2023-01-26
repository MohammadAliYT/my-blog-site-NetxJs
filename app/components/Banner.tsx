import React from 'react';

function Banner() {
  return (
    <div className="flex flex-col md-flex-row font-bold justify-between px-10 py-5 mb-10">
      <div>
        <h1 className="text-7xl">Welcome to my Blog</h1>
        <h2>We will have blogs ondifferent topics such as codding snipetts</h2>
        <h2>Problems during coding that I face</h2>
        <h2>Different articles on F1 and cats</h2>
      </div>
    </div>
  );
}

export default Banner;
