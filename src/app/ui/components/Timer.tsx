"use client"
import {useEffect, useState} from "react";

function Timer() {
    let [time,setTime] = useState<number>(0  )
    console.log(time)
    useEffect(()=>{
        console.log('interval start')

        let interval= setInterval(  ()=>{

            setTime(time+1)

        },1000)
        return
    },[])

    return (
        <div className='p-7 bg-[rgba(59, 59, 59, 0.5)] blur-md rounded-[20px] text-[var(--text)]'>
            <p
            className='font-main font-normal text-sm'
            >Auction ends in:</p>
            <div className='flex gap-2.5'>
                <div>
                    <p className='font-bold font-main text-4xl'>
                        {time}
                    </p>
                    <p className='font-main font-normal text-sm '>Hours</p>
                </div>
                <span className='font-bold font-main text-4xl'>:</span>
                <div>
                    <p className='font-bold font-main text-4xl'>
                        {new Date(new Date().setMinutes(59) - time).getMinutes()}
                    </p>
                    <p className='font-main font-normal text-sm '>Minutes</p>
                </div>
                <span className='font-bold font-main text-4xl'>:</span>
                <div>
                    <p className='font-bold font-main text-4xl'>
                        {new Date(+new Date().setSeconds(59) - time).getSeconds()}
                    </p>
                    <p className='font-main font-normal text-sm '>Seconds</p>
                </div>

            </div>

        </div>
    );
}

export default Timer;