import React, {useState, useEffect} from 'react';
import '../Ifoodcounter/Ifoodcounter.css';

export default function Ifoodcounter() {
    // estado para o valor
    const [value, setValue] = useState(1)

    // estado para o css
    const [buttonStyle, setButonStyle] = useState('counter-button-minus-active')

    //vamos criar um effeito - como os colchetes [] estao vazios, ele executa sempre uma vez sem que precise de algum gatinho
    //essa arrow function emite um alerta de componente montado
    //no nosso caso ele vai monitorar a alteracao em value
    //quando o value for alterado o efeito ser multiplicar o value por 2
    useEffect(() => {
        document.getElementById('moeda').innerHTML = 2.00 * value
    }, [value])

    //monitora quando o estilo do botao é alterado
    useEffect(() => {
        console.log(`o estilo do botao atual é ${buttonStyle}`)
    }, [buttonStyle])

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
        <button id='moeda'>12,00</button>
    </div>
  )
}
