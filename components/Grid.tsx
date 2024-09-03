import React from 'react'
import { BentoGrid,BentoGridItem } from './ui/Bentogrid'
import { griditems } from '@/app/data'

const Grid = () => {
  return (
    <section id='about'>
      
        <BentoGrid className='w-full py-20'>
            {griditems.map(({id,title,description,className,
                imgClassName,titleClassName,img,spareImg
                
            }) => (
                <BentoGridItem
                id={id}
                title={title}
                description={description}
                key={id}
                className={className}
                imgClassName={imgClassName}
                titleClassName={titleClassName}
                img={img}
                spareImg={spareImg}
                />
            ))}
        </BentoGrid>
    </section>
  )
}

export default Grid