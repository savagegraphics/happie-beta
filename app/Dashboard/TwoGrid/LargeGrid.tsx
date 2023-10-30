import React from 'react'

type Props = {}

const LargeGrid = (props: Props) => {
  return (
    <div className='rounded-2xl mt-4 bg-white lg:w-[42rem] lg:h-[20rem] w-[22rem] h-[20rem]  border border-gray-200'>
      <dt className='flex justify-between m-4 text-3xl font-semibold leading-9 '>
        <div className='text-sky-950 ml-2 text-lg font-bold font-Inter mt-2'>
          Deliveries
        </div>
        <div className='text-xs bg-[#0F2B48] rounded-md p-2 text-white font-Inter'>
          View all
        </div>
      </dt>
      <hr />
      <div className='mx-2'>
        <dt className='flex justify-between mt-4 mx-4 '>
          <div className='text-gray-400 md:text-sm text-xs font-semibold font-Inter'>
            Relaxer Cream 2 set
          </div>
          <div className='text-gray-400 md:text-sm text-xs font-semibold font-Inter'>
            2 Packets - 30 kg
          </div>
        </dt>
        <div className='mx-6 my-2'>
          <div className='w-full bg-[#38C9EC] rounded-full h-1 '>
            <div
              className='bg-[#0F2B48] h-1 rounded-full'
              style={{ width: '90%' }}
            ></div>
          </div>
        </div>
        <dt className='flex justify-between mb-4 mx-4 '>
          <div className='text-gray-400 text-[10px] font-normal font-Inter'>
            Arrived Warehouse
          </div>
          <div className='text-gray-400 text-[10px] font-normal font-Inter'>
            Ext Delivery 12 Dec 2022 11:00PM
          </div>
        </dt>
      </div>
      <hr />
      <div className='mx-2'>
        <dt className='flex justify-between mx-4 my-2 text-3xl font-semibold leading-9 '>
          <div className='text-gray-400 text-sm font-semibold font-Inter'></div>
        </dt>
        <dt className='flex justify-between mx-4 '>
          <div className='text-gray-400 md:text-sm text-xs font-semibold font-Inter'>
            Relaxer Cream 2 set
          </div>
          <div className='text-gray-400 md:text-sm text-xs font-semibold font-Inter'>
            2 Packets - 30 kg
          </div>
        </dt>
        <div className='mx-6 my-1'>
          <div className='w-full bg-[#38C9EC] rounded-full h-1 '>
            <div
              className='bg-[#0F2B48] h-1 rounded-full'
              style={{ width: '75%' }}
            ></div>
          </div>
        </div>
        <dt className='flex justify-between mb-4 mx-4 '>
          <div className='text-gray-400 text-[10px] font-normal font-Inter'>
            Arrived Warehouse
          </div>
          <div className='text-gray-400 text-[10px] font-normal font-Inter'>
            Ext Delivery 12 Dec 2022 11:00PM
          </div>
        </dt>
      </div>
      <hr />
      <div className='mx-2'>
        <dt className='flex justify-between mx-4 my-2 text-3xl font-semibold leading-9 '>
          <div className='text-gray-400 text-sm font-semibold font-Inter'></div>
        </dt>
        <dt className='flex justify-between mx-4 '>
          <div className='text-gray-400 md:text-sm text-xs font-semibold font-Inter'>
            Relaxer Cream 2 set
          </div>
          <div className='text-gray-400 md:text-sm text-xs font-semibold font-Inter'>
            2 Packets - 30 kg
          </div>
        </dt>
        <div className='mx-6 my-1'>
          <div className='w-full bg-[#38C9EC] rounded-full h-1 '>
            <div
              className='bg-[#0F2B48] h-1 rounded-full'
              style={{ width: '25%' }}
            ></div>
          </div>
        </div>
        <dt className='flex justify-between mb-4 mx-4 '>
          <div className='text-gray-400 text-[10px] font-normal font-Inter'>
            Arrived Warehouse
          </div>
          <div className='text-gray-400 text-[10px] font-normal font-Inter'>
            Ext Delivery 12 Dec 2022 11:00PM
          </div>
        </dt>
      </div>
    </div>
  )
}

export default LargeGrid
