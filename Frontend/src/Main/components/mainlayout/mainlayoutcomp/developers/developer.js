import React, { Component } from 'react';
import './developer1.css';
import parag from './neelam.jpeg';
import komal from './komal bhatia.jpg';

class Developer extends Component {
  render() {
    return (
      <div>
        <div className="developer">
          <div>
            <div className='developerhead'>
              <h1>our coordinators</h1>
              <hr className='developerhr' />
            </div>

            <div className='containerm7'>
              <div className='card'>
                <div className='card__image-container'>
                  <img className='card__image' src={komal} />
                </div>

                <svg class='card__svg' viewBox='0 0 800 500'>
                  <path
                    d='M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500'
                    stroke='transparent'
                    fill='#333'
                  />
                  <path
                    class='card__line'
                    d='M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400'
                    stroke='pink'
                    stroke-width='3'
                    fill='transparent'
                  />
                </svg>

                <div class='card__content'>
                  <h1 class='card__title'>Dr Komal Bhatia</h1>
                  <h2>Chairperson CE Department</h2>
                </div>
              </div>

              <div className='card'>
                <div className='card__image-container'>
                  <img className='card__image' src={parag} />
                </div>

                <svg class='card__svg' viewBox='0 0 800 500'>
                  <path
                    d='M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500'
                    stroke='transparent'
                    fill='#333'
                  />
                  <path
                    class='card__line'
                    d='M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400'
                    stroke='pink'
                    stroke-width='3'
                    fill='transparent'
                  />
                </svg>

                <div class='card__content'>
                  <h1 class='card__title'>Dr Neelam Duhan</h1>
                  <h2>Club Coordinator</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Developer;
