import { useState } from 'react';

/**
 * Imutabilidade
 * 
 * usuarios = ['diego3g', 'dieegosf', 'danileao']
 * 
 * usuarios.push('rafacamarda') => essa forma adiciona um novo usuário porém ta alterando diretamente a variável usuários, ou seja, causando uma mutação na variável
 * 
 * novoUsuarios = [...usuarios, 'rafacamarda'] => será utilizado esse tipo de conceito ao longo do projeto
 *  
 */

export function Counter() {
    const [counter, setCounter] = useState(0);
    function increment() {
        setCounter(counter + 1);
    }

    return (
        <div>
            <h2>{counter}</h2>
            <button type="button" onClick={increment}>
                Increment
            </button>
        </div>
    );
}