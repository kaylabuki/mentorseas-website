import React from 'react';

import './Hero.scss';
import FloatingShapes from 'views/FloatingShapes';
import Logo from 'components/Logo';

export default class Hero extends React.Component {
  render() {
    return (
      <div className='hero_wrapper'>
        <div className='hero' onClick={this.someoneClicked}>
          <div className='hero-floating-shapes'>
            <FloatingShapes />
          </div>
          <div className='hero-text-overlay'>
            <Logo />

            <div className='subtitle'>
              {`UCLA School of Engineering's Mentorship Program`}
            </div>
          </div>
        </div>
      </div>
    );
  }
}