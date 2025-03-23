import './App.css' 
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
    return(
        <section className='App'>
            <TwitterFollowCard 
                userName="midudev" 
                name="jose Enmanuel Urbina" 
            />
            <TwitterFollowCard 
                userName="vattistue" 
                name = "que pas chaval" 
            />
            <TwitterFollowCard 
                userName="pheralb" 
                name="Jeff Bar" 
            />
        </section>
    )
}