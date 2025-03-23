import React from 'react'
import { useState } from 'react'
import './app.css'

export function TwitterFollowCard ({children, userName}) {
    const [isFollowing,setIsFollowing] = useState(false)
    const text = isFollowing ? 'Siguiendo' : 'seguir'
    const buttonClass = isFollowing ? 'tw-followCard-button isFollowing' : 'tw-followCard-button'
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
                <button className={buttonClass} onClick={() => setIsFollowing(!isFollowing)}>
                    {text}    
                </button>
            </aside>
        </article>
    )
}