import {useState} from 'react';

/* TODO
  O componente abaixo está com problemas. Resolva o problema e explique o que tinha
  de errado e também a solução que você encontrou.

  Resposta / comentários sobre a sua solução:

  Cada elemento de lista gerado após um map precisa ter uma chave de identificacao

*/

export const Desafio2 = ()=> {
  const [list, setList] = useState([1, 2]);

  return (<ul>{list.map(item => <li key={item}>item: {item}</li>)}</ul>)
}
