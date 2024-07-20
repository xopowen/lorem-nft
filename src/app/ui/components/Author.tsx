import React from 'react';
import Image from "next/image";

function Author({addClass}:{addClass:string}) {
    return (
        <address className={' author' +addClass }>
            <a href="#" rel='nofollow'>
                <Image  width = {24} height = {24} src={''} alt={''} className='author__logo'/>
                <span>Animakid</span>
            </a>
        </address>
    );
}

export default Author;