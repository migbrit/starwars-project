import './styles.css'
import {CharacterCard} from '../../components/CharacterCard'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'


function Home() {

  return (
    <div className="App">
      <div className="main">
      <h1>Star Wars</h1>
      <Navbar/>
      <div className="text">
        <p>
        Esse é um projeto de estudo de ReactJS, onde é consumida uma API de Star Wars e é exibido os dados na tela.
        </p>
        <p> 
        Star Wars é uma franquia do tipo space opera estadunidense criada pelo cineasta George Lucas, que conta com uma série de nove filmes de fantasia científica e dois spin-offs. <br/> O primeiro filme foi lançado apenas com o título Star Wars, em 25 de maio de 1977, e tornou-se um fenômeno mundial inesperado de cultura popular.
        </p>
      </div>
      </div>
      
    </div>
  )
}

export default Home
