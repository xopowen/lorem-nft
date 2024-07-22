import React from 'react';
import Image from "next/image";

const CardCategory = ()=>{
    return <article className='rounded-[20px] border bg-[var(--background---secondary)]
      grid  gap-2
    overflow-hidden
     font-second  font-normal text-base text-[var(--text)] lg:text-[22px] leading-snug '>
        <Image src={''} alt={''} loading={"lazy"} height={142} width={147}
        className={'object-contain w-full md:min-w-[150px] lg:min-w-60 lg:h-60'}
        />
        <div className={'pt-5 pb-6 px-[30px]'}>
            <h3 className=' font-second font-semibold text-base text-[var(--text)] lg:text-[22px] ' >Collectibles</h3>
        </div>
    </article>
}
function BrowseCategories() {
    // @ts-ignore
    const list = Array.apply(null, {length: 8})
    return (
        <section className='
        grid gap-10 lg:gap-[60px] py-10 lg:py-20
        px-[30px] md:px-18 lg:px-28
        '>
            <div className='grid gap-2.5 font-second font-semibold'>
                <h2 className=' text-[28px] lg:text-[38px] '>
                    Browse Categories
                </h2>

            </div>
            <div className='grid grid-cols-2 md:grid-cols-4  gap-5 md:gap-[30px] '>
                {  list.map((el,index) =>{
                    return  <CardCategory key={index}/>
                })}
            </div>
        </section>
    );
}

export default BrowseCategories;