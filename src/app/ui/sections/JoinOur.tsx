
import Image from 'next/image'
import NoPhone from "../../../../public/img/no-photos-svgrepo-com.svg";
function JoinOur() {
    return (
        <section className='
        grid gap-10 lg:gap-[48px] py-10 lg:py-10
        px-[30px] md:px-18 lg:px-28
        '><div className='md:py-10 md:px-[30px]
            lg:p-[60px]
            md:bg-[var(--background---secondary)]
            md:rounded-[20px] md:overflow-hidden
            grid
            gap-[30px] lg:gap-20
            md:grid-cols-2
            '>
                <div className='rounded-[20px] overflow-hidden'>
                    <Image src={NoPhone}
                              alt={''} width={315} height={255}
                           loading={'lazy'}
                    className='object-contain w-full h-full
                    '
                    />
                </div>
                <div className='font-second grid gap-10 md:py-5'>
                    <div className='text-[var(--text)] grid gap-2.5 '>
                        <h2 className='text-[28px] lg:text-[38px] font-semibold
                        tracking-wide
                        '>Join our weekly digest</h2>
                        <p
                        className='text-base lg:text-[22px] leading-[1.6]'
                        >Get exclusive promotions & updates straight to your inbox.</p>
                    </div>
                    <form action="#" className='flex flex-col lg:flex-row justify-between
                    gap-4 lg:gap-0 lg:h-[60px]
                    lg:rounded-[20px] lg:bg-[var(--text)] h-min'>
                        <label  className='rounded-[20px] bg-[var(--text)]
                        py-4 px-5
                        '>
                            <input className='
                            bg-transparent
                            text-[color:var(--background)]
                            placeholder:text-base placeholder:text-[color:var(--background)]
                            w-full
                            '
                                   placeholder='Enter Your Email Address'
                                   type="email"/>
                        </label>
                        <button type="submit"  className='btn w-full lg:w-auto
                        lg:px-12 flex gap-2.5
                        bg-[var(--call-to-action)]
                        py-3 lg:py-0
                        text-base
                        '>
                            <svg className='w-5 h-5 max-w-5' width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M2.375 4.375C2.375 4.02982 2.65482 3.75 3 3.75H18C18.3452 3.75 18.625 4.02982 18.625 4.375V15C18.625 15.3315 18.4933 15.6495 18.2589 15.8839C18.0245 16.1183 17.7065 16.25 17.375 16.25H3.625C3.29348 16.25 2.97554 16.1183 2.74112 15.8839C2.5067 15.6495 2.375 15.3315 2.375 15V4.375ZM3.625 5V15H17.375V5H3.625Z" fill="white" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M2.53928 3.95268C2.77253 3.69823 3.16788 3.68104 3.42233 3.91428L10.5 10.4021L17.5777 3.91428C17.8321 3.68104 18.2275 3.69823 18.4607 3.95268C18.694 4.20713 18.6768 4.60248 18.4223 4.83573L10.9223 11.7107C10.6834 11.9298 10.3166 11.9298 10.0777 11.7107L2.57768 4.83573C2.32323 4.60248 2.30604 4.20713 2.53928 3.95268Z" fill="white" />
                            </svg>
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>

        </section>
    );
}

export default JoinOur;