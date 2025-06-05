import React, {useState, useEffect} from 'react'

export default function Clock() {
    const [time, setTime] = useState(new Date())
    
    const intervalId = setInterval(()=> {
        setTime(new Date())
    }, 1000)

    function getTime(){
        let hours = time.getHours()
        const minutes = time.getMinutes()
        const seconds = time.getSeconds()
        const meridian = hours > 12 ? "PM" : "AM"

        hours = hours % 12 || 12

        return (`${padding(hours)}:${padding(minutes)}:${padding(seconds)} ${meridian}`)
    }

    function padding(number){
        return (number < 10 ? "0" : "") + number
    }

  return (
    <div className='clock'>
      {getTime()}
    </div>
  )
}
