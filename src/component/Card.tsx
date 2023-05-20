import React from 'react';
import "../App.css";

function Card({ img, title }: { img: any, title: any }) {
  return (
    <div className='flex flex-col lg:flex-row justify-center items-center bg-white rounded-2xl my-4 mx-auto w-full lg:max-w-4xl p-4 border border-gray-300 shadow-lg'>
      <div className='lg:w-1/2'>
        <img className='max-w-full h-auto' src={img} alt={img} />
      </div>
      <div className='lg:w-1/2 flex flex-col justify-center items-center lg:items-start px-4'>
        <h1 className='text-xl font-bold my-2 text-center lg:text-left'>{title}</h1>
        <p className='text-base leading-normal my-2 text-center lg:text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Explicabo doloremque sit dolorum autem eius, accusantium laborum nisi incidunt 
          recusandae. Eaque dolor quibusdam iste ut quae quod quam porro voluptates eius? 
          Accusantium vitae suscipit minima id ex quidem nam at molestiae.</p>
        <button className='font-bold mt-4 bg-black text-white px-4 py-2 rounded-md'>Button</button>
      </div>
    </div>
  );
}

export default Card;
