import React from 'react'

const AboutDo = () => {
  return (
    <div className='flex flex-col gap-2 text-sm w-full p-3 bg-[#0CC078] text-white'>
          <h2 >
             <strong>DO IT</strong>
          </h2>
          <p>
            Things with clear deadlines and consequences for not taking immediate action.
          </p>
          <ul className='flex flex-col jutify-center mb-auto'>
            <li>
              <strong>
                Examples
              </strong>
            </li>
            <li >
              Finishing a client project.
            </li>
            <li>
              Submitting a draft article.
            </li>
            <li>
              Responding to some emails
            </li>
             <li>
               Picking up you sick kid from School
             </li>
          </ul>
          
          

        </div>
  )
}

export default AboutDo