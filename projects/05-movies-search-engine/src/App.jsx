import './App.css'
import { useState, useEffect } from 'react';
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'

function App() {
  const { movies } = useMovies();
  const [query, setQuery] = useState('')
  const [error, setError] = useState(null)

  const handleSubmit = (event) => {
    event.preventDefault()

    console.log({ query });
  }

  const handleChange = (event) => {
    const newQuery = event.target.value
    if (newQuery.startWith(' ')) return
    setQuery(event.target.value)
  }

  useEffect(() => {
    if (query == '') {
      setError('No se puede buscar una película vacía')
      return 
    }

    if (query.match(/^\d+$/)) {
      setError('No se puede buscar una película con un número')
      return
    }

    if (query.length < 3) {
      setError('La búsqueda debe tener al menos 3 caracteres')
      return
    }

    setError(null)
  }, [query])

  return (
    <div className='page'>
      <header>
        <h1>Buscador de películas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input
            style={{
              border: '1px solid transparent',
              borderColor: error ? 'red' : 'transparent'
            }} onChange={handleChange} value={query} name='query' placeholder='Avengers, Start Wars, The Matrix...'/>
          <button type='submit'>Buscar</button>
        </form>
        { error && <p style={{ color: 'red' }}>{error}</p> }
      </header>

      <main>
        <Movies movies={movies}/>
      </main>
    </div>
  )
}

export default App
