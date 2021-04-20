import axios from 'axios';
import React from 'react'

export default function View2() {

    const [toSearch, setToSearch] = React.useState("pikachu")
    const [result, setResult] = React.useState(null)

    const getPokemon = () => {
        axios({
            method: 'GET',
            url: `https://pokeapi.co/api/v2/pokemon/${toSearch}`
        }).then(
            res => {
                setResult(res.data)
            }
        ).catch()
    }

    return (
        <>
            <input value={toSearch} onChange={(e) => { setToSearch(e.target.value) }} />
            <button onClick={() => { getPokemon() }}> BUSCAR </button>
            {result &&
                <img alt="Pokemon" src={result.sprites.front_default} style={{ width: '150px' }} />
            }
        </>
    )
}
