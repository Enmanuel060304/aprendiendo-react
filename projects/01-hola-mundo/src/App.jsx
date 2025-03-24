import './App.css' 
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
    return(
        <section className='App'>
            <TwitterFollowCard 
                userName="midudev"  
            >
                jose Enmanuel Urbina
            </TwitterFollowCard>
            <TwitterFollowCard 
                userName="vattistue" 
            >
                vattistue
            </TwitterFollowCard>
            <TwitterFollowCard 
                userName="pheralb" 
            >
                pheralb
            </TwitterFollowCard>
        </section>
    )
}