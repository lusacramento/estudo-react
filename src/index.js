import React, {Fragment} from 'react';
import ReactDOM from 'react-dom/client';
import Hello from './components/Hello'
import * as Saudacoes from './components/Saudacoes'
import Saudacao from './components/Saudacao';
import Parent from './components/Parent'
import Child from './components/Child'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Fragment>
    <Hello />
    <hr />
    <Saudacoes.BomDia firstName='João' lastName='Silva'/>
    <Saudacoes.BoaTarde name='Lia'/>
    <Saudacoes.BoaNoite name='Cláudia'/>
    <hr />
    <Saudacao type="Bom Dia" name="Jorge" />
    <hr />
    <Parent firstName='Paulo' lastName='Silva'>
      <Child firstName='Pedro' />
      <Child firstName='Carla'/> 
    </Parent>

  </Fragment>
);
