import Image from 'next/image';

import { Cupcake } from '@/model/cupcake';
import classes from './cupcake-item.module.css';

export default function CupcakeItem({ title, image, price, summary }: Cupcake) {
  return (
    <article className={classes.cupcake}>
      <header>
        <div className={classes.image}>
          <Image
            src={image as string}
            alt={title}
            width={200}
            height={200}
          />
        </div>
        <div className={classes.headerText}>
          <h2>{title}</h2>
        </div>
      </header>
      <div>
        <p className={classes.price}>{price}</p>
      </div>
      <div>
        <p className={classes.summary}>{summary}</p>
      </div>
    </article>
  );
}
