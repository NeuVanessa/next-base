import type { NextPage } from 'next';
import Header from 'next/head';
import { useState } from 'react';
import axios from 'axios';
import { DataGitHupAPi } from './api/github';
const Home: NextPage = () => {
  const [fullname, setFullName] = useState('Caroline');
  const [fullUrl, setFullUrl] = useState('https://github.com/caroline.png');

  const hendleGetDate = async () => {
    const { data } = await axios.get<DataGitHupAPi>(
      'http://localhost:3000/api/github',
    );
    setFullName(data.fullname);
    setFullUrl(data.pictureUrl);
  };
  return (
    //fragimento
    <>
      <Header>
        <title>my-app</title>
      </Header>

      <button onClick={hendleGetDate}>carregar informações</button>
      <p>
        <strong>ola,{fullname}</strong>
      </p>
      <p>
        <img src={fullUrl} width="350px" />
      </p>
    </>
  );
};

export default Home;
