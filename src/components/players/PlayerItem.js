import React from 'react'

const PlayerItem = ({ item }) => {

    return (
        <div className='card'>
            <div className='card-inner'>
                <div className='card-front'>
                    <img src={item.PhotoUrl} alt='' />
                </div>
        <div className='card-back'>
          <h1>{item.YahooName}</h1>
          <ul>
            <li>
              <strong>College:</strong> {item.College}
            </li>
            <li>
              <strong>Position:</strong> {item.Position}
            </li>
            <li>
              <strong>Jersey Number:</strong> {item.Jersey}
            </li>
            <li>
              <strong>Years Experience:</strong> {item.Experience}
            </li>
            <li>
              <strong>Height (Inches):</strong> {item.Height}
            </li>
            <li>
              <strong>Weight:</strong> {item.Weight}
            </li>
          </ul>
        </div>
      </div>
    </div>
    )
}

export default PlayerItem
