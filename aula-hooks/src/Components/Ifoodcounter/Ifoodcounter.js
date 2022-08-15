import React, {useState} from 'react';
import '../Ifoodcounter/Ifoodcounter.css';

export default function Ifoodcounter() {
    // estado para o valor
    const [value, setValue] = useState(1)

    // estado para o css
    const [buttonStyle, setButonStyle] = useState('counter-button-minus-active')

    function up(){
        setValue(value+1)
        setButonStyle('counter-button-minus-active')
    }

    function down(){

        if (value <= 1)
            setButonStyle('counter-button-minus-desactive')
        // testa para nao deixar ter numero negativo
        if(value > 0){
            setValue(value-1)
        }
    }

    return (
    <div className='counter-wrapper'>
        <button 
            className={buttonStyle} //'counter-button-minus-active'
            onClick={down}>
        - </button>
        <p>{value}</p>
        <button 
            className='counter-button-plus-active'
            onClick={up}>
        + </button>
    </div>
  )
}
