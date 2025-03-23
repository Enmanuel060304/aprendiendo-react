import { useState } from 'react'
export function TwitterFollowCard ({children,userName}) { 

    const [isFollowing, setIsFollowing] = useState(false)
    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const handleFollowClick = () => { setIsFollowing(!isFollowing) }

    const buttonClassName = isFollowing ? 'tw-followCard-button isFollowing' : 'tw-followCard-button'
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img 
                className='tw-followCard-avatar'
                src={`https://unavatar.io/${userName}`} 
                alt="img de midudev"/>
            <div className='tw-followCard-info'>
                <strong> {children} </strong>
                <span className='tw-followCard-infoUserName'>{userName} </span>
            </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick= {handleFollowClick}>
                    {text}    
                </button>
            </aside>
        </article>
    )
}