import './Main.css'
import Header from './Header'
import React from 'react'

export default function Main(props){
    return(
        <>
            <div className='content'>
                <Header {...props}/>
                <main className='content'>
                    <div>
                        {props.children}
                    </div>
                </main>
            </div>
        </>
    )
}