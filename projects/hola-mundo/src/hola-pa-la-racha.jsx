
export function HolaPaLaRacha ({children}) {
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img 
                className='tw-followCard-avatar'
                src={`https://unavatar.io/${children}`} 
                alt="img de midudev"/>
            <div className='tw-followCard-info'>
                <strong> {children} </strong>
                <span className='tw-followCard-infoUserName'>{children} </span>
            </div>
            </header>
            <aside>
                <button className='tw-followCard-button'>
                    Seguir    
                </button>
            </aside>
        </article>
    )
}
