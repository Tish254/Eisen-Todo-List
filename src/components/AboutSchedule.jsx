import React from 'react'

const AboutSchedule = () => {
  return (
    <div className='flex flex-col gap-2 text-sm w-full p-3 bg-[#FCFC99]'>
          <h2>
            <strong>
                SCHEDULE IT
            </strong>
          </h2>
          <p>
            Activities without a set deadline that bring closer to your goals. Easy to procrastinate on.
          </p>
          <ul className='flex flex-col jutify-center mb-auto'>
            <li>
              <strong>
                Examples
              </strong>
            </li>
            <li>
                Strategic Planning
            </li>
            <li>
              Professional development
            </li>
            <li>
              Networking
            </li>
             <li>
               Exercise
             </li>
          </ul>
          
          

        </div>
  )
}

export default AboutSchedule