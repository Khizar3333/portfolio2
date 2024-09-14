import React from 'react'
import { Timeline } from './ui/timeline'
import {griditems} from '@/app/data/index'
import { TimelineDemo } from "@/components/Timeline";


const Projects = () => {
  return (
    <div className='py-20' id='projects'>
    <h1 className='heading'>A small collection of{' '}
    <span className='text-cyan-300'>my recent projects</span>
    </h1>
        <div className=' '> 
        <TimelineDemo/>
            </div>
    </div>
  )
}

export default Projects
