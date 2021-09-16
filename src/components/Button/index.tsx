import React from 'react';
import { useRouter } from 'next/router';

type Props = {
  to: string;
};
export const SimpleButtom: React.FC<Props> = ({ children, to }) => {
  const router = useRouter();
  const hendleButtonBack = () => {
    router.push(to);
  };
  return <button onClick={hendleButtonBack}>{children}</button>;
};


