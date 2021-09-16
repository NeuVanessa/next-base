import type { NextPage } from 'next'
import Header from 'next/head';
import {SimpleButtom} from '@/components/Button';

const Login: NextPage = () => {

  return (
  //fragimento
  <>
    <Header>
    <title>
      my-app Login
    </title>
  </Header>
  <h1>Ola Login</h1>
  <SimpleButtom to="/">
  Voltar
</SimpleButtom>
  </>
  )
}

export default Login
