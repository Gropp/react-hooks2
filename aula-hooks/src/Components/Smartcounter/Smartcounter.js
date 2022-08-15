// todo componente é uma FUNCAO que retorna um HTML

import {useState} from 'react';

function SmartCounter(){

    // descontruindo o objeto useState e iniciando em 1
    // retorna um valor
    // 1. variavel statefull (com memoria)
    // 2. funcao amarrada a essa variavel que atualiza esse valor
    const [quantity, upQuantity] = useState(1);

    return (
        <>
        <h1>{quantity}</h1>
        {/* exemplo de como referenciar a funcao da constante com uma arrow function */}
        <button onClick={() => upQuantity(quantity + 1)}>Aumentar</button>
        </>
    )
}

export default SmartCounter;