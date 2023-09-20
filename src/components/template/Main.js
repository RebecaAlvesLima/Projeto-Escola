import './Main.css'
import Header from './Header'
import React from 'react'

export default function Main(props){
    return(
        <>
            <Header />
            <main className='content'>
                Conteúdo
            </main>
        </>
    )
}