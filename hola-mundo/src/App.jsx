import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
    {
      userName: 'richard',
      name: 'Richard',
      isFollowing: true
    },
    {
      userName: 'apa',
      name: 'Rene',
      isFollowing: false
    },
    {
      userName: 'mama',
      name: 'Marays',
      isFollowing: true
    },
    {
      userName: 'ronald',
      name: 'Ronald',
      isFollowing: false
    }
  ]

export function App() {

    return (
        <section className='App'>
            {
                users.map(({userName, name, isFollowing }) => (
                    <TwitterFollowCard
                        key={userName}
                        userName={userName}
                        initialIsFollowing={isFollowing}
                    >
                        {name}
                    </TwitterFollowCard>
                ))
            }   
        </section>    
    )
}