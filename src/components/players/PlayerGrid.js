import React from 'react'
import PlayerItem from './PlayerItem'
import Spinner from '../ui/Spinner'

const PlayerGrid = ({ items, isLoading }) => {
    return isLoading ? (
        <Spinner />
    ) : (
        <section className="cards">
            {items.map((item) => (
                <PlayerItem key={item.PlayerID} item={item}></PlayerItem>
            ))}
        </section>
    )
}

export default PlayerGrid


