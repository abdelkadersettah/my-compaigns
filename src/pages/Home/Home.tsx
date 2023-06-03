import { Campaign, Header } from '../../components';
import { TableProvider } from '../../context/TableProvider';

type Props = {};

const Home = (props: Props) => {
  return (
    <main>
      <Header />
      <TableProvider>
        <Campaign />
      </TableProvider>
    </main>
  );
};
export default Home;
