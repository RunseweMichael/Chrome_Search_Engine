import React from 'react'
import aliexpress from './assets/aliexpress.png'
import amazon from './assets/amazon3.png'
import binance from './assets/binance2.png'
import ebay from './assets/ebay2.png'
import temu from './assets/TEMU.png'
import trip from'./assets/trip.webp'
import booking from './assets/booking2.png'

export default function ImageLinks() {
  return (
    <div className='links-Container'>
        <a href="https://www.binance.com" target='_self'><img src={binance} alt="" className='imgLinks' /></a>
        <a href="https://www.aliexpress.com"><img src={aliexpress} alt="" className='imgLinks'/></a>
        <a href="https://www.ebay.com"><img src={ebay} alt="" className='imgLinks'/></a>
        <a href="https://www.amazon.com"><img src={amazon} alt="" className='imgLinks'/></a>
        <a href="https://www.tripadvisor.com"><img src={trip} alt="" className='imgLinks'/></a>
        <a href="https://www.booking.com"><img src={booking} alt="" className='imgLinks'/></a>
         <a href="https://www.temu.com"><img src={temu} alt="" className='imgLinks'/></a>
    </div>
  )
}
