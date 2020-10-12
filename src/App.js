import React, { useState, useEffect, Fragment } from 'react';
import './App.css';
import getGenerations from './api/getGenerationsApi';
import getCountPokemonGeneration from './api/countGenerationsApi';
import Card from './components/Card/card';
import Details from './components/Details/details';
import getPokemon from './api/getPokemonsApi';

export default function App() {
  const [query, setQuery] = useState('1');
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/generation/1/');
  const [data, setData] = useState({});
  const [changedCard, setChangedCard] = useState(false);
  const [changedButton, setChangedButton] = useState(false);

  const [count, setCount] = useState(0);
  const [pokemonInfo, setPokemonInfo] = useState({});

  const options = [];
  for (let i = 1; i <= count; i++) {
    options.push(i);
  }

  const clickSearch = function () {
    setChangedButton(true);
    setUrl(`https://pokeapi.co/api/v2/generation/${query}`);
  };

  const onClickChild = async (pokemonName) => {
    console.log(pokemonInfo);
    setChangedCard(true);
    setPokemonInfo(await getPokemon(pokemonName));
  };

  useEffect(() => {
    const fetchData = async () => {
      getCountPokemonGeneration(setCount);
      setData(await getGenerations(url));
    };

    fetchData();
  }, [url]);

  return (
    <Fragment>
      <div className="main_container">
        <h1 className="main_title"></h1>
        <div className="choose_generation">
          <div class="select">
            <select
              name="slct"
              id="slct"
              onChange={(event) => setQuery(event.target.value)}
            >
              <option selected disabled>
                Escolha sua geração:
              </option>
              {options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <button
            className="btn first"
            type="button"
            onClick={() => clickSearch()}
          >
            Search
          </button>
        </div>
        {changedButton && (
          <div>
            <h2 className="card_title">
              {data.pokemon_species && data.pokemon_species.length} Pokemons
              existentes na região
            </h2>
            <div className="container_card">
              <ul className="pokemon_list">
                {data.pokemon_species &&
                  data.pokemon_species.map((pokemon) => (
                    <>
                      <Card
                        onClick={() => onClickChild(pokemon.name)}
                        pokemonName={pokemon.name}
                        key={pokemon.name}
                      />
                    </>
                  ))}
              </ul>
              {changedCard && <Details pokemon={pokemonInfo} />}
            </div>
          </div>
        )}
      </div>
    </Fragment>
  );
}
