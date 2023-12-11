import React from 'react'
import { Link } from 'react-router-dom';
import image from '../image.jpg';
import '../App.css'
const HappyElement = () => {
  return (
    <div className="container flex flex-col bg-black min-h-screen">
    <div>
      <div class="item text-red-600">H</div>
      <div class="item1 text-blue-500">A</div>
      <div class="item2 text-green-500">P</div>
      <div class="item3 text-yellow-500">P</div>
      <div class="item4 text-orange-500">Y</div>
    </div>
    <div>
      <div class="item5 text-blue-500">B</div>
      <div class="item6 text-green-500">I</div>
      <div class="item7 text-yellow-500">R</div>
      <div class="item8 text-orange-500">T</div>
      <div class="item9 text-blue-500">H</div>
      <div class="item10 text-red-600">D</div>
      <div class="item11 text-green-500">A</div>
      <div class="item12 text-yellow-500">Y</div>
    </div>
    <div className='item13'>
      <img src='https://media1.giphy.com/media/1DTBGm5Rfgymk/giphy.gif' alt='gif' className='h-32 w-auto'></img>
    </div>
    <div className='mt-32'>
      <img src={image} className='h-[700] w-[500]'></img>
    </div>
    <div>
        <Link to={'/paymentpage'}><p className='text-white absolute bottom-32 left-12'>Click here</p></Link>
    </div>
    </div>
  )
}

export default HappyElement;