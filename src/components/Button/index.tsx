import React from 'react'
import styles from './Button.module.scss'
interface Props{
    link?:string,
    children?:React.ReactNode,
    theme?: string;
}

export default function Button({link, children, theme}:Props){
    return( 
        <a className={theme === 'white' ? styles.btnPrincipalWhite : styles.btnPrincipal} target={'_blank'} href={link}>{children}</a>
    )
}