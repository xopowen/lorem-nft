"use client"
import {useEffect, useState} from "react";

function Timer() {
    let [time,setTime] = useState<number>(0 )

    useEffect(()=>{

        let interval=    setInterval(  ()=>{

            setTime((t)=>t+1)

        },1000)

        return ()=>clearInterval(interval)
    },[])

    return (
        <div className='p-[30px] grid gap-2 bg-taimer blur-md rounded-[20px] text-[var(--text)]'>
            <p
            className='font-main font-normal text-[12px]'
            >Auction ends in:</p>
            <div className='flex   gap-4'>
                <div className='grid gap-2'>
                    <p className='font-bold font-main text-4xl'>
                        {Number(59 -time/60/60).toFixed(0)}
                    </p>
                    <p className='font-main font-normal text-sm w-0'>Hours</p>
                </div>
                <span className='font-bold font-main text-[28px]'>:</span>
                <div className='grid gap-2'>
                    <p className='font-bold font-main text-4xl  '>
                        {
                            new Date(new Date().setMinutes(59-time/60)   ).getMinutes() >9 ?
                            new Date(new Date().setMinutes(59-time/60)   ).getMinutes():
                            '0'+new Date(new Date().setMinutes(59-time/60)   ).getMinutes()
                        }
                    </p>
                    <p className='font-main font-normal text-sm w-0 '>Minutes</p>
                </div>
                <span className='font-bold font-main text-[28px]'>:</span>
                <div className='grid gap-2'>
                    <p className='font-bold font-main text-4xl'>
                        {
                            new Date(+new Date().setSeconds(59- time) ).getSeconds() > 9?
                            new Date(+new Date().setSeconds(59- time) ).getSeconds():
                                "0"+ new Date(+new Date().setSeconds(59- time) ).getSeconds()

                        }
                    </p>
                    <p className='font-main font-normal text-sm w-0'>Seconds</p>
                </div>

            </div>

        </div>
    );
}

export default Timer;