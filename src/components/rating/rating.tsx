import { FC } from 'react';
import { clsx } from 'clsx';
import { StarIcon } from 'assets/Star.tsx';
import { StarOutlineIcon } from 'assets/StarOutline.tsx';
import s from './rating.module.scss';

type StarProps = {
  value: number
  rating: number
};

const Star: FC<StarProps> = ({ value, rating }) => (
  <>
    {value <= rating ? <StarIcon className={s.star} /> : <StarOutlineIcon className={s.star} />}
  </>
);

type RatingProps = {
  rating: number
  className?: string
};

export const Rating: FC<RatingProps> = ({ rating, className }) => {
  const stars = [...Array(5)].map((_, i) => i + 1);

  return (
    <div className={clsx(s.wrapper, className)}>
      {stars.map((el) => (
        <Star key={el} rating={rating} value={el} />
      ))}
    </div>
  );
};
