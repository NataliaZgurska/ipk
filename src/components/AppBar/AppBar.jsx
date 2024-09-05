import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import { FaPhone } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import { BsFillGeoAltFill } from 'react-icons/bs';
import logo from '../../assets/images/logo2.png';
import css from './AppBar.module.css';

const getNavLinkClassName = ({ isActive }) =>
  clsx(css.navLink, {
    [css.active]: isActive,
  });

export const AppBar = () => {
  return (
    <header className={css.header}>
      <div className={css.logoTitleAdressContainer}>
        <div className={css.logoTitleContainer}>
          <div className={css.logoWrap}>
            <img src={logo} alt="logo" width={80} loading="lazy" />
          </div>

          <div className={css.titleWrap}>
            <h3>Державне підприємство</h3>
            <h2>Інститут підготовки кадрів промисловості</h2>
          </div>
        </div>

        <address className={css.headerAdres}>
          <div className={css.adresTel}>
            <FaPhone />
            <a href="tel: +380688601188">+38(068)860-1188</a>
          </div>

          <div className={css.adresEmail}>
            <MdEmail />
            <a href="mailto:example@example.com">example@example.com</a>
          </div>

          <div className={css.adresAdres}>
            <BsFillGeoAltFill />
            <p>Київ, вул.Соляна 5А</p>
          </div>
        </address>
      </div>

      <nav className={css.navContainer}>
        <ul className={css.navList}>
          <li>
            <NavLink to="/" className={getNavLinkClassName}>
              <div className={css.navLogoHome}>Home</div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/catalog" className={getNavLinkClassName}>
              Catalog
            </NavLink>
          </li>
          <li>
            <NavLink to="/contacts" className={getNavLinkClassName}>
              Contact us
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
