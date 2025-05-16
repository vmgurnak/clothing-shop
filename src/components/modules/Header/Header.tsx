'use client';

import Link from 'next/link';
import { useUnit } from 'effector-react';

import { useLang } from '@/hooks/useLang';

import Logo from '@/components/elements/Logo/Logo';
import Menu from './Menu';

import { openMenu } from '@/context/modals';
import { addOverflowHiddenToBody } from '@/lib/utils/common';

import { $menuIsOpen } from '@/context/modals';

const Header = () => {
  const { lang, translations } = useLang();

  const menuIsOpen = useUnit($menuIsOpen);
  console.log(menuIsOpen);

  const handleOpenMenu = () => {
    addOverflowHiddenToBody();
    openMenu();
  };

  return (
    <header className="header">
      <div className="container header__container">
        <button className="btn-reset header__burger" onClick={handleOpenMenu}>
          {translations[lang].header.menu_btn}
        </button>
        <Menu />
        <div className="header__logo">
          <Logo />
        </div>
        <ul className="header__links list-reset">
          <li className="header__links__item">
            <button className="btn-reset header__links__item__btn header__links__item__btn--search"></button>
          </li>
          <li className="header__links__item">
            <Link
              href="/favorites"
              className="header__links__item__btn header__links__item__btn--favorites"
            ></Link>
          </li>
          <li className="header__links__item">
            <Link
              href="/comparisen"
              className="header__links__item__btn header__links__item__btn--compare"
            ></Link>
          </li>
          <li className="header__links__item">
            <Link
              href="/cart"
              className="header__links__item__btn header__links__item__btn--cart"
            ></Link>
          </li>
          <li className="header__links__item header__links__item__btn--profile">
            <Link
              href="/profile"
              className="header__links__item__btn header__links__item__btn--profile"
            ></Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
