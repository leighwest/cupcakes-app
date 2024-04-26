import styles from './page.module.css';
import { Cupcake } from '@/model/cupcake';
import CupcakesGrid from '@/components/cupcakes/cupcakes-grid';
import { getCupcakes } from '@/client/cupcakes-client';

async function Cupcakes() {
  const cupcakes: Cupcake[] = await getCupcakes();

  return <CupcakesGrid cupcakes={cupcakes} />;
}

export default function Home() {
  return (
    <main className={styles.main}>
      <Cupcakes />
    </main>
  );
}
