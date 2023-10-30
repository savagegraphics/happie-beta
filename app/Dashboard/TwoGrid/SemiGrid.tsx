import React from 'react'
import { Button, Timeline } from 'flowbite-react'
import { HiArrowNarrowRight } from 'react-icons/hi'

type Props = {}

const SemiGrid = (props: Props) => {
  return (
    <div className='rounded-2xl mt-4 bg-white lg:w-[18rem] lg:h-[24rem] w-[21rem] h-[24rem]  border border-gray-200'>
      <img src='./assets/Rectangle.png' alt='' />

      <Timeline className='ml-4 my-8'>
        <Timeline.Item>
          <Timeline.Point />
          <Timeline.Content>
            <Timeline.Time>
              <dt className='flex justify-between mx-4 my-5 '>
                <div className=''>
                  <div className='text-[#535353] md:text-sm text-xs font-semibold font-Inter'>
                    Relaxer Cream 2x
                  </div>
                  <div className='text-[10px] text-gray-400'>
                    Has arrivd at Oshawale gateway
                  </div>
                </div>
                <div className='text-[#535353] md:text-sm text-xs font-semibold font-Inter'>
                  Sept 22
                </div>
              </dt>
            </Timeline.Time>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point />
          <Timeline.Content>
            <Timeline.Time>
              {' '}
              <dt className='flex justify-between mx-4 my-5 '>
                <div className=''>
                  <div className='text-[#535353] md:text-sm text-xs font-semibold font-Inter'>
                    Tumeric scrub
                  </div>
                  <div className='text-[10px] text-gray-400'>
                    Has arrivd at Lekki gateway
                  </div>
                </div>
                <div className='text-[#535353] md:text-sm text-xs font-semibold font-Inter'>
                  Sept 23
                </div>
              </dt>
            </Timeline.Time>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point />
          <Timeline.Content>
            <Timeline.Time>
              {' '}
              <dt className='flex justify-between mx-4 my-5 '>
                <div className=''>
                  <div className='text-[#535353] md:text-sm text-xs font-semibold font-Inter'>
                    Durex
                  </div>
                  <div className='text-[10px] text-gray-400'>
                    Has arrivd at Forte Oil gateway
                  </div>
                </div>
                <div className='text-[#535353] md:text-xs text-xs font-semibold font-Inter'>
                  Sept 24
                </div>
              </dt>
            </Timeline.Time>
          </Timeline.Content>
        </Timeline.Item>
      </Timeline>
    </div>
  )
}

export default SemiGrid
