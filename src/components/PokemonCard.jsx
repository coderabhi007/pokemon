import React from 'react';

const typeColors = {
  normal: 'bg-gray-400',
  fire: 'bg-red-500',
  water: 'bg-blue-500',
  electric: 'bg-yellow-400',
  grass: 'bg-green-500',
  ice: 'bg-blue-200',
  fighting: 'bg-red-700',
  poison: 'bg-purple-500',
  ground: 'bg-yellow-600',
  flying: 'bg-indigo-400',
  psychic: 'bg-pink-500',
  bug: 'bg-green-600',
  rock: 'bg-yellow-800',
  ghost: 'bg-purple-700',
  dragon: 'bg-indigo-700',
  dark: 'bg-gray-800',
  steel: 'bg-gray-500',
  fairy: 'bg-pink-400',
};

const PokemonCard = ({ pokemon }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
      <div className="p-4">
        <div className="relative pt-[100%]">
          <img
            src={pokemon.sprites.other['official-artwork'].front_default}
            alt={pokemon.name}
            className="absolute top-0 left-0 w-full h-full object-contain"
          />
        </div>
        
        <div className="mt-4">
          <h2 className="text-xl font-bold capitalize text-gray-800">
            {pokemon.name}
          </h2>
          
          <div className="mt-2 flex gap-2">
            {pokemon.types.map(({ type }) => (
              <span
                key={type.name}
                className={`${typeColors[type.name]} px-2 py-1 rounded-full text-white text-sm capitalize`}
              >
                {type.name}
              </span>
            ))}
          </div>

          <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
            <div>
              <p className="text-gray-600">Height</p>
              <p className="font-semibold">{pokemon.height / 10}m</p>
            </div>
            <div>
              <p className="text-gray-600">Weight</p>
              <p className="font-semibold">{pokemon.weight / 10}kg</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;