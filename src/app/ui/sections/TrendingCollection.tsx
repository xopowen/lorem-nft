import Image from 'next/image'
import Author from "@/app/ui/components/Author";
import NoPhone from "../../../../public/img/no-photos-svgrepo-com.svg";

const TrendingItem = ({className}:{className:string}) => {

    return   <article className={className}>
        <div className='overflow-hidden rounded-[20px]'>
            <Image  src={NoPhone}
                    alt={''}
                    loading={'lazy'}
                   width={315}
                   height={ 315}
                   className='object-center w-full md:h-[330px]'>
            </Image>
        </div>
        <div className='
                    flex gap-4
                    font-main text-base text-center font-bold'>
            <div className='overflow-hidden rounded-[20px]'>
                <Image src={NoPhone} alt={''}
                       width={95}
                       height={ 95}
                       loading={'lazy'}
                       className='object-center   md:h-[100px] md:w-[100px]'>

                </Image>
            </div>
            <div className='overflow-hidden rounded-[20px]'>
                <Image src={NoPhone} alt={''}
                       width={95}
                       height={ 95}
                       loading={'lazy'}
                       className='object-center  md:h-[100px] md:w-[100px]'>

                </Image>
            </div>
            <div className='overflow-hidden
            rounded-[20px]
            bg-[var(--call-to-action)]
                        transition
                        hover:active:scale-105
                        btn btn_purpur
                        p-6
                        items-center
                        self-center
                        '>1025+</div>

        </div>
        <div className='grid gap-3 font-second'>
            <h3 className='text-[22px]'>Magic Mushrooms</h3>
            <Author addClass={''}/>
        </div>
    </article>
}
function TrendingCollection() {



    return (
        <section className='grid gap-10 lg:gap-[60px] py-10 lg:py-20

        px-[30px] md:px-18 lg:px-28
        '>
            <div className='grid gap-4 leading-normal tracking-wide font-second font-semibold'>
                <h2 className=' tracking-wide text-[28px] lg:text-4xl'>
                    Trending Collection
                </h2>
                <p className='text-[22px]'>Checkout our weekly updated trending collection.</p>
            </div>
            <div className='
            flex gap-[30px] justify-center

            '>
                <TrendingItem className='grid gap-4  bg-[var(--background---secondary)]  rounded-[20px] p-4'>
                </TrendingItem>
                <TrendingItem className=' gap-4 hidden md:grid bg-[var(--background---secondary)]  rounded-[20px] p-4'>
                </TrendingItem>
                <TrendingItem className='hidden lg:grid gap-4 bg-[var(--background---secondary)]  rounded-[20px] p-4'>
                </TrendingItem>
            </div>
        </section>
    );
}

export default TrendingCollection;