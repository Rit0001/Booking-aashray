import React from 'react'
import CountUp from 'react-countup';
import Zoom from 'react-reveal/Zoom';

function Count() {
  return (
    <>
    <Zoom>
    <div className='count-up'>
        <div className='box-count'><CountUp start={75000} end={99000} duration={4}/>
        <span>+</span>
        <p>Visit Tourists</p>
        </div>
        <div className='box-count'><CountUp start={10000} end={20000} duration={4}/>
        <span>+</span>
        <p>Booking Rating</p>
        </div>
        <div className='box-count'><CountUp start={20000} end={45000} duration={4}/>
        <span>+</span>
        <p>Reviews</p>
        </div>
        <div className='box-count'><CountUp start={65000} end={86000} duration={4}/>
        <span>+</span>
        <p>Customers</p>
        </div>
      </div>
      </Zoom>
    </>
  )
}

export default Count
