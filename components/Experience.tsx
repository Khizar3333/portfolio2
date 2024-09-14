import { workExperience } from '@/app/data'
import React from 'react'
import { Button } from './ui/MovingBorder'

const Experience = () => {
  return (
    <div className='py-20' id='testimonials'>
    <h1 className='heading'>My
    <span className='text-cyan-300'>Work Experience</span>
    </h1>
    <div className='w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10 '> 
      {
        workExperience.map((card) => {
          return (
            <Button
            key={card.id}
            borderRadius='1.75rem'
            className='flex-1 text-white border-neutral-200 dark:border-slate-800'
            duration={Math.floor(Math.random()) * 1000 + 1000}
            >
              <div className='flex lg:flex-row flex-col items-center justify-center gap-2 p-3 py-6 lg:p-10 rounded-lg'>
                <img src={card.thumbnail} alt={card.thumbnail} className='lg:w-32 md:w-20 w-16' />
                <div className='lg:ms-5 '>
            <h1 className='text-start text-xl md:text-2xl font-bold'>
              {card.title}
            </h1>
            <p className='text-start text-white-100 mt-3  font-semibold'>
              {card.desc}
            </p>
                </div>
              </div>

            </Button>
          )})
      }
        </div>
        </div>

  )
}

export default Experience
