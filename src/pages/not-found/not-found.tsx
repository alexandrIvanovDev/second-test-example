import { useNavigate } from 'react-router-dom';
import { routePaths } from 'app/providers/router/routePaths.tsx';
import { Button } from 'antd';
import s from './not-found.module.scss';

export const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className={s.content}>
      <h2>Sorry! Page not found!</h2>
      <Button
        onClick={() => navigate(routePaths.main)}
        type="primary"
      >
        Back to home page
      </Button>
    </div>
  );
};
