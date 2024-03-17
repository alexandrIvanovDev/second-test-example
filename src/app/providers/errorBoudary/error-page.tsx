import s from './error-page.module.scss';
import { Button } from 'components/button/button.tsx';

export const ErrorPage = () => {
  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <div className={s.wrapper}>
      <h2>Something went wrong</h2>
      <Button onClick={reloadPage}>Reload the page</Button>
    </div>
  );
};
