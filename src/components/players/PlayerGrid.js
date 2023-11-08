import React from 'react'
import PlayerItem from './PlayerItem'
import Spinner from '../ui/Spinner'

const PlayerGrid = ({ items, isLoading, logo, bkgColor }) => {
    console.log(items);
    console.log(logo)
    console.log(bkgColor)


    return isLoading ? (
        <Spinner />
    ) : (
        <section className="cards">
            {items.map((item) => (
                <PlayerItem key={item.PlayerID} item={item} logo={logo} bkgColor={bkgColor}></PlayerItem>
            ))}
        </section>
    )
}

export default PlayerGrid


