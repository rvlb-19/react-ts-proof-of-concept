import React, { useState } from 'react';

import { http } from './http';

import Input from './components/Input';
import Button from './components/Button';
import Character, { ICharacter } from './components/Character';

interface SWApiResponse {
  results: ICharacter[];
}

const App: React.FC = () => {
  const [formData, setFormData] = useState({
    'characterName': ''
  });
  const onChangeHandler = (name: string) => (event: React.FormEvent<HTMLInputElement>) => {
    const data = { ...formData, [name]: event.currentTarget.value };
    setFormData(data);
  }

  const [results, setResults] = useState<ICharacter[]>([]);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { characterName } = formData;
    const response = await http<SWApiResponse>(`https://swapi.co/api/people?name=${characterName}`);
    // parsedBody may be undefined, so we must provide a fallback (in our case, an empty array)
    setResults(response.parsedBody?.results || []);
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <Input 
          name="characterName"
          value={formData.characterName}
          onChange={onChangeHandler('characterName')}
        />
        <Button type="submit" title="Buscar" />
      </form>
      <div>
        {
          results.map(({ name }) => {
            return <Character key={name} name={name} />
          })
        }
      </div>
    </div>
  );
}

export default App;
