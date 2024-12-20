import Image from "next/image";
import React from "react";
import Author from "@/app/ui/components/Author";
import NoPhone from "../../../../public/img/no-photos-svgrepo-com.svg";

const NFTCard = ()=>{
    return <address className='flex
                 gap-2.5
                 flex-col
                lg:justify-center
                bg-[var(--background---secondary)]
                rounded-[20px]
                overflow-hidden
                p-4
                '>
        <Image alt={''}
               src={NoPhone}
               height={238}
               width={315}
               loading={'lazy'}
               className='object-contain w-full md:w-[330px] md:h-[296px]'
        />
        <div className='grid gap-6 px-[30px] py-5 bg-[var(--background---secondary)]'>
            <div className='grid gap-2'>
                <h3 className='font-second text-[22px] font-semibold text-(var(--text))'>Distant Galaxy</h3>
                <Author addClass={''}/>
            </div>

            <div className='flex justify-between font-normal font-main'>
                <div className='grid gap-2'>
                    <p className='
                    text-[var(--caption-label-text)]
                        font-main font-normal
                        text-[12px]
                        '>
                        Prise
                    </p>
                    <p className='text-base text-[var(--text)]'>1.63 ETH</p>
                </div>
                <div className='grid gap-2'>
                    <p
                        className='text-[var(--caption-label-text)]
                        text-[12px]
                        '
                    >Highest Bid</p>
                    <p className='text-base text-[var(--text)]'>0.33 wETH</p>
                </div>
            </div>

        </div>

    </address>
}


function DiscoverMoreNFTs() {
    // @ts-ignore
    const list = Array.apply(null, {length: 2})
    return (
        <section className='
        grid gap-10 lg:gap-[60px] py-10 lg:py-20
        px-[30px] md:px-18 lg:px-28
        relative
        '>
            <div className='grid gap-2.5 lg:gap-5 font-second font-semibold '>
                <h2 className=' text-[28px] lg:text-[38px]'>
                    Discover More NFTs
                </h2>
                <p className='text-base font-normal lg:text-[22px]'>
                    Explore new trending NFTs
                </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7'>
                {  list.map((el,index) =>{
                    return <NFTCard key={index}/>
                })}
            </div>
            <a href='#' type={'button'}
               className='btn border-2 border-solid border-[var(--call-to-action)]
               md:absolute md:top-12 md:right-[72px] lg:top-28 lg:right-28
               md:px-12 py-4 font-semibold font-second text-base'  aria-label="">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M2.83931 6.74556C4.3292 5.25567 6.66714 3.75 10 3.75C13.3329 3.75 15.6708 5.25567 17.1607 6.74556C17.9038 7.4887 18.4397 8.23076 18.7906 8.78809C18.9664 9.06724 19.0966 9.30146 19.184 9.4683C19.2277 9.55176 19.2608 9.61849 19.2835 9.66569C19.2949 9.6893 19.3037 9.70804 19.3099 9.72157L19.3174 9.7379L19.3197 9.74306L19.3206 9.74487L19.3209 9.74558C19.321 9.74588 19.3211 9.74616 18.75 10C19.3211 10.2538 19.321 10.2541 19.3209 10.2544L19.3206 10.2551L19.3197 10.2569L19.3174 10.2621L19.3099 10.2784C19.3037 10.292 19.2949 10.3107 19.2835 10.3343C19.2608 10.3815 19.2277 10.4482 19.184 10.5317C19.0966 10.6985 18.9664 10.9328 18.7906 11.2119C18.4397 11.7692 17.9038 12.5113 17.1607 13.2544C15.6708 14.7443 13.3329 16.25 10 16.25C6.66714 16.25 4.3292 14.7443 2.83931 13.2544C2.09617 12.5113 1.5603 11.7692 1.20939 11.2119C1.03362 10.9328 0.903373 10.6985 0.815984 10.5317C0.772267 10.4482 0.739205 10.3815 0.716476 10.3343C0.705109 10.3107 0.696319 10.292 0.690066 10.2784L0.682582 10.2621L0.680256 10.2569L0.679445 10.2551L0.679127 10.2544C0.678993 10.2541 0.678868 10.2538 1.25 10C0.678868 9.74616 0.678993 9.74588 0.679127 9.74558L0.679445 9.74487L0.680256 9.74306L0.682582 9.7379L0.690066 9.72157C0.696319 9.70804 0.705109 9.6893 0.716476 9.66569C0.739205 9.61849 0.772267 9.55176 0.815984 9.4683C0.903373 9.30146 1.03362 9.06724 1.20939 8.78809C1.5603 8.23076 2.09617 7.4887 2.83931 6.74556ZM1.25 10L0.678868 9.74616C0.607044 9.90777 0.607044 10.0922 0.678868 10.2538L1.25 10ZM1.94882 10C2.02235 10.1377 2.12794 10.3248 2.26718 10.5459C2.58033 11.0433 3.06008 11.7074 3.72319 12.3706C5.0458 13.6932 7.08286 15 10 15C12.9171 15 14.9542 13.6932 16.2768 12.3706C16.9399 11.7074 17.4197 11.0433 17.7328 10.5459C17.8721 10.3248 17.9777 10.1377 18.0512 10C17.9777 9.86227 17.8721 9.67524 17.7328 9.4541C17.4197 8.95674 16.9399 8.29255 16.2768 7.62944C14.9542 6.30683 12.9171 5 10 5C7.08286 5 5.0458 6.30683 3.72319 7.62944C3.06008 8.29255 2.58033 8.95674 2.26718 9.4541C2.12794 9.67524 2.02235 9.86227 1.94882 10ZM18.75 10L19.3211 10.2538C19.393 10.0922 19.393 9.90777 19.3211 9.74616L18.75 10Z" fill="#A259FF" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5ZM6.25 10C6.25 7.92893 7.92893 6.25 10 6.25C12.0711 6.25 13.75 7.92893 13.75 10C13.75 12.0711 12.0711 13.75 10 13.75C7.92893 13.75 6.25 12.0711 6.25 10Z" fill="#A259FF" />
                </svg>
                See All
            </a>
        </section>
    );
}

export default DiscoverMoreNFTs;