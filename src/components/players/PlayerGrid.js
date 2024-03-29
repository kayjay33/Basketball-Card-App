import React from 'react'
import PlayerItem from './PlayerItem'
import Spinner from '../ui/Spinner'

const PlayerGrid = ({ items, isLoading, logo, bkgColor, borderColor }) => {

    return isLoading ? (
        <Spinner />
    ) : (
        <section className="cards">
            {items.map((item) => (
                <PlayerItem key={item.PlayerID} item={item} logo={logo} bkgColor={bkgColor} borderColor={borderColor}></PlayerItem>
            ))}
        </section>
    )
}

export default PlayerGrid


