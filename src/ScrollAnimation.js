
import React from 'react';
import Lottie from 'react-lottie';
import scrollAnimaiton from './lotties/scroll-down.json';
import './ScrollAnimation.css'

export default function ScrollAnimation() {
    const scrollOptions = {
        loop: true,
        autoplay: true,
        animationData: scrollAnimaiton,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
    
      };
    
    return (
      <div className='scroll-animation'>
        <Lottie 
          options={scrollOptions}
          height={200}
          width={200}
        />
        
      </div>
    );
  };

