import React from 'react';
import Lottie from 'react-lottie';
import starAnimation from './lotties/start-animation.json';

export default function StarAnimation() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: starAnimation,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
    
      };
    
    return (
      <div className='star-animation'>
        <Lottie 
          options={defaultOptions}
          height={100}
          width={100}
        />
        
      </div>
    );
  };

