import React from 'react'
import OneGrid from '@/app/Dashboard/OneGrid'
import Delivery from './Delivery'
import Shippings from './Shippings'
import Header from './Header'


type Props = {}

const Shipment = (props: Props) => {
  return (
    <section className=''>
      <Header />
      <div className='container px-6 py-2 mx-auto'>
        <div className='lg:flex lg:-mx-6'>
          <div className='lg:w-3/4 lg:px-6'>
            <Shippings />
            <Delivery />
          </div>

          <div className='mt-8 lg:w-1/4 lg:mt-0 lg:mr-4'>
            <OneGrid />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Shipment
