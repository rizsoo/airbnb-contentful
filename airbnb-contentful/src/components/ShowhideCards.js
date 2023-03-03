import React from 'react'
import { ContactCard } from './Atoms/ContactCard';

export const ShowhideCards = ({ props, lang }) => {
    // console.log(props);
    return (
        <>
            {props.map((el) => {
                return (
                    <ContactCard el={el} lang={lang} />
                )
            })}
        </>

    )
}

