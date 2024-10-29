import React from 'react'
import { InfiniteMovingCards } from './ui/infinite-moving-cards'
import { testimonials } from '@/app/data'

const Client = () => {
  return (
    <div className='py-20' id='testimonials'>
        <h1 className='heading'>What other says{' '}
        <span className='text-cyan-300'>about me</span>
        </h1>
        <div className='flex flex-col items-center max-lg:mt-10 '> 

            <InfiniteMovingCards items={testimonials}
            direction='right'
            speed='slow'            />
    
    </div>
    </div>

  )
}

export default Client
