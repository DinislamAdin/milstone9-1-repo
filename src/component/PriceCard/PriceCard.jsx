import React from 'react';
import Feature from '../Features/Feature';

const PriceCard = ({ price }) => {
    return (
        <div className='bg-indigo-300 m-2 rounded-md p-2 flex flex-col'>
            <h3 className='text-white'>
                <span className='text-5xl text-purple-600 font-bold'>{price.price}</span>
                <span className='text-xl font-bold'>/mon</span>
            </h3>
            <p className='text-5xl font-bold'>{price.name}</p>
            <p >
                <span className='font-bold text-white underline'>features:</span>
                {
                    price.features.map((feature, idx) => <Feature
                        key={idx}
                        feature={feature}
                    ></Feature>)
                }
                <button className='w-full mt-auto bg-green-400 hover:bg-green-700 p-2 m-2 rounded '>buy now</button>
            </p>
            
        </div>
    );
};

export default PriceCard;