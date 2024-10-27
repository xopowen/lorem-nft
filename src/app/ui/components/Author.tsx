import React from 'react';
import Image from "next/image";
import NoPhone from "../../../../public/img/no-photos-svgrepo-com.svg";

function Author({addClass}:{addClass:string}) {
    return (
        <address className={' author' +addClass }>
            <a href="#" rel='nofollow'>
                <Image  width = {24} height = {24}
                        loading={'eager'}
                        src={NoPhone}
                        fetchPriority={'high'}
                        alt={''} className='author__logo'/>
                <span>Animakid</span>
            </a>
        </address>
    );
}

export default Author;