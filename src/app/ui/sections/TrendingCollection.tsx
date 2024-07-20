import Image from 'next/image'

function TrendingCollection() {



    return (
        <section className='grid gap-10 py-10 lg:py-20
        px-[30px] md:px-18 lg:px-28
        '>
            <div className='grid gap-2.5 font-second font-semibold'>
                <h2 className=' text-[28px] lg:text-4xl'>
                    Trending Collection
                </h2>
                <p className='text-base'>Checkout our weekly updated trending collection.</p>
            </div>
            <div className='
            flex gap-[30px] justify-center

            '>
                <article className='grid gap-4'>
                    <div className='overflow-hidden rounded-[20px]'>
                        <Image src={''} alt={''}
                               width={315}
                               height={ 315}
                               className='object-center w-full md:h-[330px]'>
                        </Image>
                    </div>
                    <div className='
                    flex gap-4
                    font-main text-base text-center font-bold'>
                        <div className='overflow-hidden rounded-[20px]'>
                            <Image src={''} alt={''}
                                   width={95}
                                   height={ 95}
                                   loading={'lazy'}
                                   className='object-center w-full md:h-[100px] md:w-[100px]'>

                            </Image>
                        </div>
                        <div className='overflow-hidden rounded-[20px]'>
                            <Image src={''} alt={''}
                                   width={95}
                                   height={ 95}
                                   loading={'lazy'}
                                   className='object-center w-full md:h-[100px] md:w-[100px]'>

                            </Image>
                        </div>
                        <div className='overflow-hidden rounded-[20px]  bg-[var(--call-to-action)]
                        transition
                        hover:active:scale-105
                        btn btn_purpur
                        w-24 md:w-[100px]
                        h-24 md:h-[100px]
                        '>1025+</div>
                    </div>
                </article>
                <article className=' gap-4
                hidden md:grid
                '>
                    <div className='overflow-hidden rounded-[20px]'>
                        <Image src={''} alt={''}
                               width={315}
                               height={ 315}
                               className='object-center w-full md:h-[330px]'>
                        </Image>
                    </div>
                    <div className='
                    flex gap-4
                    font-main text-base text-center font-bold'>
                        <div className='overflow-hidden rounded-[20px]'>
                            <Image src={''} alt={''}
                                   width={95}
                                   height={ 95}
                                   loading={'lazy'}
                                   className='object-center w-full md:h-[100px] md:w-[100px]'>

                            </Image>
                        </div>
                        <div className='overflow-hidden rounded-[20px]'>
                            <Image src={''} alt={''}
                                   width={95}
                                   height={ 95}
                                   loading={'lazy'}
                                   className='object-center w-full md:h-[100px] md:w-[100px]'>

                            </Image>
                        </div>
                        <div className='overflow-hidden rounded-[20px]  bg-[var(--call-to-action)]
                        transition
                        hover:active:scale-105
                        btn btn_purpur
                        w-24 md:w-[100px]
                        h-24 md:h-[100px]
                        '>1025+</div>
                    </div>
                </article>
                <article className='hidden lg:grid gap-4'>
                    <div className='overflow-hidden rounded-[20px]'>
                        <Image src={''} alt={''}
                               width={315}
                               height={ 315}
                               className='object-center w-full md:h-[330px]'>
                        </Image>
                    </div>
                    <div className='
                    flex gap-4
                    font-main text-base text-center font-bold'>
                        <div className='overflow-hidden rounded-[20px]'>
                            <Image src={''} alt={''}
                                   width={95}
                                   height={ 95}
                                   loading={'lazy'}
                                   className='object-center w-full md:h-[100px] md:w-[100px]'>

                            </Image>
                        </div>
                        <div className='overflow-hidden rounded-[20px]'>
                            <Image src={''} alt={''}
                                   width={95}
                                   height={ 95}
                                   loading={'lazy'}
                                   className='object-center w-full md:h-[100px] md:w-[100px]'>

                            </Image>
                        </div>
                        <div className='overflow-hidden rounded-[20px]  bg-[var(--call-to-action)]
                        transition
                        hover:active:scale-105
                        btn btn_purpur
                        w-24 md:w-[100px]
                        h-24 md:h-[100px]
                        '>1025+</div>
                    </div>
                </article>
            </div>
        </section>
    );
}

export default TrendingCollection;