import Logo from '../Logo/Logo';
import SearchInput from '../SearchInput/SearchInput';
import './Header.scss';

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="header">
      <Logo />
      <SearchInput />
    </header>
  );
};
export default Header;
