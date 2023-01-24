import './InputText.css'

interface Props{
    text: string,
    onchange: any
}

export default function inputText( {text, onchange} :Props ){
    return(
        <div className='inputgroup'>
            <input required className='input' onChange={onchange} type="text"/>
            <label className='userlabel'>
                {text}
            </label>
        </div>
    )
}