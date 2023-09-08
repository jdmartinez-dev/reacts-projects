import { useState } from 'react';
import './App.css'
import { TwitterFollowCard } from './TwitterFollowcard'

export function App() {
  const [name, setName] = useState('guillaumekln')
  const users = [
    {
      userName: name,
      name: 'Guillaume Klein',
      isFollowing: true      
    },
    {
      userName: 'midudev',
      name: 'Miguel Angel Duran',
      isFollowing: false      
    },
    {
      userName: 'jdmartinez-dev',
      name: 'Jose David Martinez',
      isFollowing: false      
    },
    {
      userName: 'bradfitz',
      name: 'Brad Fitzpatrick',
      isFollowing: false      
    }
  ]

  return (
    <section className='App'>
      {
        users.map(user => {
          const { userName, name, isFollowing } = user
          return (
            <TwitterFollowCard
              key={userName}
              userName={userName}
              initialIsFollowing={isFollowing}
            >
              {name}
            </TwitterFollowCard>
          )
        })
      }

      {/* <button onClick={() => setName('pedromichel')}>
        Cambio de nombre
      </button> */}
    </section>
  )
}