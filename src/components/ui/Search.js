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