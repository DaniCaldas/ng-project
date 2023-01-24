import './Button.css'

interface Props{
    text: string,
    onclick: any
}

export default function Button({text, onclick} :Props){
    return(
        <button onClick={onclick} className='cssbuttons-io'>
            <span>
                {text}
            </span>
        </button>
    )
}