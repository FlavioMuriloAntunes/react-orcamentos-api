import { useState } from 'react'
import './App.css'

function App() {
 

  return (
   
      <div className='container'>
       <form>
          <h1>Cadastro de Orçamentos</h1>
            <input name='Cliente' />
            <input name='Telefone'/>
            <input name='E-mail'/>
            <input name='Descrição'/>
            <input name='Total'/>
            <input name='obs'/>

       </form>
      </div>

      
  )
}

export default App
