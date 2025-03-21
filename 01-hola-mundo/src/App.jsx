import './App.css' 
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
    return(
        <section className='App'>
            <TwitterFollowCard 
                isFollowing
                userName="midudev" 
                name="jose Enmanuel Urbina" 
            />
            <TwitterFollowCard 
                isFollowing={false} 
                userName="vattistue" 
                name = "que pas chaval" 
            />
            <TwitterFollowCard 
                isFollowing 
                userName="pheralb" 
                name="Jeff Bar" 
            />
        </section>
    )
}