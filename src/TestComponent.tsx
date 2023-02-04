import React, { useState } from 'react';

interface Props {
  text: string;
}
interface UserData {
  id: number;
  name: string;
}

const TestComponent: React.FC<Props> = ({ text }) => {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState<UserData>({id: 1, name: 'dummy'});
  const [inputData, setInputData] = useState("");
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => setInputData(e.target.value);
  return (
    <div>
      <h1>{ text}</h1>
      <h1>{ count }</h1>
      <input type="text" value={inputData} onChange={handleInputChange}/>
      <h1>{ inputData }</h1>
    </div>
  )
}

export default TestComponent;