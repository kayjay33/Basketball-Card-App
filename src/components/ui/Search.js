/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from 'react'

const Search = ({ getQuery, getLogo, getBkgColor, getBorderColor }) => {
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
        'hawks': require('../../img/teamLogos/hawks-logo-white.png'),
        'nets': require('../../img/teamLogos/brooklyn-nets-logo.png'),
        'celtics': require('../../img/teamLogos/boston-celtics-logo.png'),
        'hornets': require('../../img/teamLogos/charlotte-hornets-logo.png'),
        'bulls': require('../../img/teamLogos/chicago-bulls-logo.png'),
        'cavaliers': require('../../img/teamLogos/cleveland-cavs-logo.png'),
        'mavericks': require('../../img/teamLogos/dallas-mavericks-logo.png'),
        'nuggets': require('../../img/teamLogos/denver-nuggets-logo.png'),
        'pistons': require('../../img/teamLogos/detroit-pistons-logo.png'),
        'warriors': require('../../img/teamLogos/golden-state-warriors-logo.png'),
        'rockets': require('../../img/teamLogos/houston-rockets-logo.png'),
        'pacers': require('../../img/teamLogos/Pacer-logo.png'),
        'clippers': require('../../img/teamLogos/la-clippers-logo.png'),
        'lakers': require('../../img/teamLogos/la-lakers-logo.png'),
        'grizzlies': require('../../img/teamLogos/memphis-grizzlies-logo.png'),
        'heat': require('../../img/teamLogos/miami-heat-logo.gif'),
        'bucks': require('../../img/teamLogos/milwaukee-bucks-logo.png'),
        'timberwolves': require('../../img/teamLogos/minnesota-timberwolves-logo.png'),
        'pelicans': require('../../img/teamLogos/new-orleans-pelicans-logo.png'),
        'knicks': require('../../img/teamLogos/new-york-knicks-logo.png'),
        'thunder': require('../../img/teamLogos/okc-thunder-logo.png'),
        'magic': require('../../img/teamLogos/orlando-magic-logo.png'),
        'sixers': require('../../img/teamLogos/philly-sixers-logo.png'),
        'suns': require('../../img/teamLogos/phoenix-suns-logo.png'),
        'trail blazers': require('../../img/teamLogos/portland-blazers-logo.png'),
        'kings': require('../../img/teamLogos/sacramento-kings-logo.png'),
        'spurs': require('../../img/teamLogos/san-antonio-spurs-logo.png'),
        'raptors': require('../../img/teamLogos/toronto-raptors-logo.png'),
        'jazz': require('../../img/teamLogos/utah-jazz-logo.png'),
        'wizards': require('../../img/teamLogos/washington-wizards-logo.png'),
    }

    const teamBackgroundColors = {
        'hawks': '#C8102E',
        'nets': '#000000',
        'celtics': '#007A33',
        'hornets': '#1D1160',
        'bulls': '#CE1141',
        'cavaliers': '#860038',
        'mavericks': '#00538C',
        'nuggets': '#0E2240',
        'pistons': '#C8102E',
        'warriors': '#1D428A',
        'rockets': '#CE1141',
        'pacers': '#002D62',
        'clippers': '#C8102E',
        'lakers': '#552583',
        'grizzlies': '#5D76A9',
        'heat': '#98002E',
        'bucks': '#00471B',
        'timberwolves': '#0C2340',
        'pelicans': '#0C2340',
        'knicks': '#006BB6',
        'thunder': '#007AC1',
        'magic': '#0077C0',
        'sixers': '#006BB6',
        'suns': '#1D1160',
        'trail blazers': '#E03A3E',
        'kings': '#5A2D81',
        'spurs': '#C4CED4',
        'raptors': '#CE1141',
        'jazz': '#002B5C',
        'wizards': '#002B5C',
    }

    const teamBorderColors = {
        'hawks': '#FDB927',
        'nets': '#FFFFFF',
        'celtics': '#BA9653',
        'hornets': '#00788C',
        'bulls': '#000000',
        'cavaliers': '#041E42',
        'mavericks': '#002B5E',
        'nuggets': '#FEC524',
        'pistons': '#1D42BA',
        'warriors': '#FFC72C',
        'rockets': '#000000',
        'pacers': '#FDBB30',
        'clippers': '#1D428A',
        'lakers': '#FDB927',
        'grizzlies': '#12173F',
        'heat': '#F9A01B',
        'bucks': '#EEE1C6',
        'timberwolves': '#236192',
        'pelicans': '#C8102E',
        'knicks': '#F58426',
        'thunder': '#EF3B24',
        'magic': '#C4CED4',
        'sixers': '#ED174C',
        'suns': '#E56020',
        'trail blazers': '#000000',
        'kings': '#63727A',
        'spurs': '#000000',
        'raptors': '#000000',
        'jazz': '#00471B',
        'wizards': '#E31837',
    }

        const onChange = (q) => {
            console.log(q)
            setText(q)
            for (const something in teams) {
                if (q === something) {
                    getQuery(teams[something])
                }
            }
            for (const logo in logos) {
                if (q === logo) {
                    console.log('this is true')
                    getLogo(logos[logo])
                }
            }
            for (const color in teamBackgroundColors) {
                if (q === color) {
                    getBkgColor(teamBackgroundColors[color])
                }
            }
            for (const borderColor in teamBorderColors) {
                if (q === borderColor) {
                    getBorderColor(teamBorderColors[borderColor])
                }
            }
        }

    return (
        <section className='search'>
            <form>
                <input
                    style={{ marginTop: 250 }}
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