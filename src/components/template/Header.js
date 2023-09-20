import './Header.css'

export default function Header(props){
    return(
        <header className='heather'>
            <h2>{props.title}</h2>
        </header>
    )
}