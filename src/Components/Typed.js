import React from 'react';
import Typewriter from  'typewriter-effect';

const Typed = () => {
  return (
    <div className="TypeEffect">
      <Typewriter
        options={{
          strings: ['Software Developer', 'Full Stack Developer'],
          autoStart: true,
          loop: true,
          delay: 3,
          deleteSpeed:2,
        }}
      />
    </div>
  )
}

export default Typed
