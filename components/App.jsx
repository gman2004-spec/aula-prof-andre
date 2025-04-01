import './App.module.css'
import { Btn } from './components/btn'

function App() {
  return (
    <>
    <nav className='menu'>
      <p><a href="#s1">primeiro</a></p>
      <p><a href="#s2">segundo</a></p>
      <p><a href="#s3">terceiro</a></p>
      <p><a href="#s4">quarto</a></p>
      <p><a href="#s5">qunito</a></p>
    </nav>
    <main>
      <section id='s1'>
        primeira
        <Btn text= 'pedro' />
      </section>
      <section id='s2'>
        segunda <br />
        <Btn text= 'batata'/>
        </section>
      <section id='s3'>
        terceira
        <Btn text= 'morango'/>
        </section>
        <section id='s4'>
        quarta
        <Btn text= 'coringa'/>
        </section>
        <section>
          qunita
          <Btn text= 'holanda'/>
        </section>
    </main>
    </>
  )
}

export default App
