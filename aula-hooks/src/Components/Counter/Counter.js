// componente SEM HOOKS
// tem que explicitar todo o processo de atualizacao de tela.
// todo componente é uma FUNCAO que retorna um HTML



function Counter(){
        let quantity = 10;
        function upQuantity() {
            quantity += 1;
            // pegamos o elemento onde a variavel é mostrada na tela  - html
            // e a atualizamos
            document.getElementById("counter-box").innerHTML = quantity;
            console.log(quantity);
        }

        function downQuantity() {
            quantity -= 1;
            // pegamos o elemento onde a variavel é mostrada na tela  - html
            // e a atualizamos
            document.getElementById("counter-box").innerHTML = quantity;
            console.log(quantity);
        }

        
        // como o retorno é mais que uma tag html, é preciso encapsular para que o transpilador saiba que o retorno na verdade é um bloco - usa-se um fragment
        
        return (
        <>
            {/* para que a variavel seja atualizada no html precisamos nomea-la */}
            <h1 id="counter-box">{quantity}</h1>
            <button onClick={upQuantity}>Aumentar</button>
            <button onClick={downQuantity}>Diminuir</button>
        </>
    )
}

export default Counter;