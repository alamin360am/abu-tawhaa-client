import React from 'react';

const Quote = ({quote}) => {
    return (
        <div className=' quote w-full md:w-3/4 mx-auto flex p-6 mb-8 border-4 border-green-600 rounded-xl'>
            <p className='text-center text-xl'>{quote}</p>
        </div>
    );
};

export default Quote;