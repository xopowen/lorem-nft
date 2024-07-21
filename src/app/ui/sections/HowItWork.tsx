import Image from 'next/image'

const HowItWorkCard = () => {
  return <article
  className='p-5 md:pt-2.5 md:pb-7  lg:p-7 lg:pt-2.5
  rounded-[20px]
  overflow-hidden
  grid justify-center
  gap-5
  bg-[var(--background---secondary)]
  '
  >
        <div>
            <Image src='' alt='' width="170" height="169"
            className='
            w-full min-w-[170px] min-h-[170px]
            md:min-w-[198px] md:min-h-[198px]
            lg:min-w-[250px] lg:min-h-[250px]
            '

            ></Image>

        </div>
      <div className='font-second text-[var(--text)] grid gap-2.5 text-center'>
          <h3 className='
                font-semibold text-base lg:text-[22px]
                '>Setup Your wallet</h3>
          <p className='text-[12px] lg:text-base'>
              Set up your wallet of choice. Connect it to the NFT market by clicking the wallet icon in the top right corner.
          </p>
      </div>
  </article>
}
function HowItWork() {
    return (
        <section className='
        grid gap-10 lg:gap-[48px] py-10 lg:py-20
        px-[30px] md:px-18 lg:px-28
        '>
            <div className='grid gap-2.5 lg:gap-5 font-second font-semibold '>
                <h2 className=' text-[28px] lg:text-[38px]'>
                    How it works
                </h2>
                <p className='text-base font-normal lg:text-[22px]'>
                    Find out how to get started
                </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3  gap-5 md:gap-[30px] '>
                <HowItWorkCard/>
                <HowItWorkCard/>
                <HowItWorkCard/>

            </div>
        </section>
    );
}

export default HowItWork;