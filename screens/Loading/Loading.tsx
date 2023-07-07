import { type FC } from 'react';
import { Loading } from '@/components/Icons';
import { container } from './Loading.css';

const LoadingPage: FC = () => {
  return (
    <div className={container}>
      <Loading />
    </div>
  );
};

export default LoadingPage;
