import React from 'react'
import { Timeline } from './ui/timeline'
import {griditems} from '@/app/data/index'
import { TimelineDemo } from "@/components/Timeline";


const Experience = () => {
  return (
    <div className='py-20' id='projects'>
    <h1 className='heading'>A small collection of{' '}
    <span className='text-purple'>my recent projects</span>
    </h1>
        <div className=' '> 
        <TimelineDemo/>
            </div>
    </div>
  )
}

export default Experience
