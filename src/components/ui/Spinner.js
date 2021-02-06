import React from 'react'
import spinner from '../../img/Bean Eater-1s-200px.gif'

const Spinner = () => {
    return (
        <img 
            src={spinner}
            style={{ width: '200px', margin: 'auto', display: 'block' }}
            alt='Loading'
        />
    )
}

export default Spinner
