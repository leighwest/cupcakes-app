import { Cupcake } from '@/model/cupcake';
import CupcakeItem from '@/components/cupcakes/cupcake-item';
import classes from './cupcakes-grid.module.css';

type Props = {
  cupcakes: Cupcake[];
};

export default async function CupcakesGrid({ cupcakes }: Props) {
  return (
    <ul className={classes.cupcakes}>
      {cupcakes.map((cupcake) => (
        <li key={cupcake.id}>
          <CupcakeItem {...cupcake} />
        </li>
      ))}
    </ul>
  );
}
