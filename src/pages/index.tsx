import type { NextPage } from 'next'
import Header from 'next/head';
import {SimpleButtom} from '@/components/Button';

const Home: NextPage = () => {
  return (
  //fragimento
  <>
  <Header>
    <title>
      my-app
    </title>
  </Header>
  <h1>ola</h1>
  <SimpleButtom to="/login">
Ir para pagina login

  </SimpleButtom>
  </>
  )
}

export default Home
