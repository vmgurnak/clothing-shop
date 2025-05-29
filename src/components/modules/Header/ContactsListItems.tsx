import Link from 'next/link';
import { useLang } from '@/hooks/useLang';

const ContactsListItems = () => {
  const { lang, translations } = useLang();

  return (
    <>
      <li className="nav-menu__accordion__item">
        <a
          href="tel:+380441111111"
          className="nav-menu__ accordion__item__link nav-menu__accordion__item__title"
        >
          +38 044 111 11 11
        </a>
      </li>
      <li className="nav-menu__accordion__item">
        <a
          href="mailto:test@gmail.com"
          className="nav-menu__accordion__item__link"
        >
          Email
        </a>
      </li>
      <li className="nav-menu__accordion__item">
        <Link
          href="https://t.me/dvejer"
          className="nav-menu__accordion__item__link"
        >
          {translations[lang].main_menu.tg}
        </Link>
      </li>
      <li className="nav-menu__accordion__item">
        <Link href="https://fb.com" className="nav-menu__accordion__item__link">
          {translations[lang].main_menu.fb}
        </Link>
      </li>
    </>
  );
};

export default ContactsListItems;
