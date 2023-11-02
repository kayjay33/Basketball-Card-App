/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from 'react'

const Search = ({ getQuery }) => {
    const [text, setText] = useState('')


    const teams = {
    'hawks': 'atl',
    'nets': 'bkn',
    'celtics': 'bos',
    'hornets': 'cha',
    'bulls': 'chi',
    'cavaliers': 'cle',
    'mavericks': 'dal',
    'nuggets': 'den',
    'pistons': 'det',
    'warriors': 'gsw',
    'rockets': 'hou',
    'pacers': 'ind',
    'clippers': 'lac',
    'lakers': 'lal',
    'grizzlies': 'mem',
    'heat': 'mia',
    'bucks': 'mil',
    'timberwolves': 'min',
    'pelicans': 'nop',
    'knicks': 'nyk',
    'thunder': 'okc',
    'magic': 'orl',
    'sixers': 'phi',
    'suns': 'phx',
    'trail blazers': 'por',
    'kings': 'sac',
    'spurs': 'sas',
    'raptors': 'tor',
    'jazz': 'uta',
    'wizards': 'was'
    }

    const logos = {
        'hawks': <img src={require('../../img/nba-logo.jpg')} alt='no image' />,
        'nets': <img src={require('../../img/nba-logo.jpg')} alt='no image' />,
        'celtics': <img src={require('../../img/nba-logo.jpg')} alt='no image' />,
        'hornets': <img src={require('../../img/nba-logo.jpg')} alt='no image' />,
        'bulls': <img src={require('../../img/nba-logo.jpg')} alt='no image' />,
        'cavaliers': <img src={require('../../img/nba-logo.jpg')} alt='no image' />,
        'mavericks': <img src={require('../../img/nba-logo.jpg')} alt='no image' />,
        'nuggets': <img src={require('../../img/nba-logo.jpg')} alt='no image' />,
        'pistons': <img src={require('../../img/nba-logo.jpg')} alt='no image' />,
        'warriors': <img src={require('../../img/nba-logo.jpg')} alt='no image' />,
        'rockets': <img src={require('../../img/nba-logo.jpg')} alt='no image' />,
        'pacers': <img src={require('../../img/nba-logo.jpg')} alt='no image' />,
        'clippers': <img src={require('../../img/nba-logo.jpg')} alt='no image' />,
        'lakers': <img src={require('../../img/nba-logo.jpg')} alt='no image' />,
        'grizzlies': <img src={require('../../img/nba-logo.jpg')} alt='no image' />,
        'heat': <img src={require('../../img/nba-logo.jpg')} alt='no image' />,
        'bucks': <img src={require('../../img/nba-logo.jpg')} alt='no image' />,
        'timberwolves': <img src={require('../../img/nba-logo.jpg')} alt='no image' />,
        'pelicans': <img src={require('../../img/nba-logo.jpg')} alt='no image' />,
        'knicks': <img src={require('../../img/nba-logo.jpg')} alt='no image' />,
        'thunder': <img src={require('../../img/nba-logo.jpg')} alt='no image' />,
        'magic': <img src={require('../../img/nba-logo.jpg')} alt='no image' />,
        'sixers': <img src={require('../../img/nba-logo.jpg')} alt='no image' />,
        'suns': <img src={require('../../img/nba-logo.jpg')} alt='no image' />,
        'trail blazers': <img src={require('../../img/nba-logo.jpg')} alt='no image' />,
        'kings': <img src={require('../../img/nba-logo.jpg')} alt='no image' />,
        'spurs': <img src={require('../../img/nba-logo.jpg')} alt='no image' />,
        'raptors': <img src={require('../../img/nba-logo.jpg')} alt='no image' />,
        'jazz': <img src={require('../../img/nba-logo.jpg')} alt='no image' />,
        'wizards': <img src={require('../../img/nba-logo.jpg')} alt='no image' />
    }

        // qx* Original search check
        // const onChange = (q) => {
        //     setText(q)
        //     getQuery(q)
        // }

        const onChange = (q) => {
            setText(q)
            for (const something in teams) {
                if (q === something) {
                    getQuery(teams[something])
                }
            }
        }

    return (
        <section className='search'>
            <form>
                <input
                    type='text'
                    className='form-control'
                    placeholder='Enter Team Name'
                    value={text}
                    onChange={(e) => onChange(e.target.value)}
                    autoFocus
                />
            </form>
        </section>
    )
}

export default Search