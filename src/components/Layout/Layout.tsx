import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import './Layout.scss';

const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <main className="main-content">
        <Outlet />
      </main>
      <footer className="footer">
        <p>© {new Date().getFullYear()} Rick & Morty Universe Explorer</p>
      </footer>
    </div>
  );
};

export default Layout;