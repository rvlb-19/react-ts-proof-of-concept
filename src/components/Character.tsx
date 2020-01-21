import React from 'react';

export interface CharacterProps {
  name: string;
};

export interface ICharacter {
  name: string;
}

const Character = ({ name }: CharacterProps) => {
  return (
    <div>{name}</div>
  );
}

export default Character;