import LandingPage from './components/landingPage/landingPage'
import Cards from './components/cards/Cards'
import Nav from './components/nav/Nav'
import axios from 'axios'
import Detail from './components/detail/Detail'
import { Route, Routes, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [auxiliar, setAuxiliar] = useState(false)
  const [pokemons, setPokemons] = useState([]);
  const { pathname } = useLocation();

  const onSearch = async (name) => {
    try {
      const newPokemon = (await axios(`http://localhost:3001/name?name=${name}`)).data

      if(newPokemon.name){
       setPokemons((pokemons) => [...pokemons, newPokemon])
      }

    } catch (error) {
      throw alert('No se econtró ningún pokemon')
    }
  }

  const firstInsertion = async () => {
    try {
      const firstPokemon = (await axios(`http://localhost:3001/`)).data
      setPokemons(firstPokemon)
      setAuxiliar(true)
    } catch (error) {
      throw alert('No se econtró ningún pokemon')
    }
  }

  const onClose = (name) => {
    const pokemonsRemoved = pokemons.filter((pokemon) => {
      return pokemon.name !== name
    })

    setPokemons(pokemonsRemoved)
  }

 return (
  <div className='app'>
    <Nav onSearch={onSearch}/>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/home' element={<Cards pokemons={pokemons} onClose={onClose}/>}/>
      <Route path='/detail/:name' element={<Detail/>}/>
    </Routes>
  </div>
 )
}

export default App
