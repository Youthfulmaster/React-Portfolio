
import Navigation from './Navigation';
import './Header.css'; 

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-title">Dennis Angelov</h1>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
