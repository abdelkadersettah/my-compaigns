import Logo from '../Logo/Logo';
import './Header.scss';

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="header">
      <Logo />
    </header>
  );
};
export default Header;
