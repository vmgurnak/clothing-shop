import Link from 'next/link';
import { FC } from 'react';

import { IMenuLinkItemProps } from '@/types/modules';

const MenuLinkItem: FC<IMenuLinkItemProps> = ({
  item,
  handleRedirectToCatalog,
}) => {
  const onRedirect = () => {
    handleRedirectToCatalog(item.href);
  };

  return (
    <li className="nav-menu__accordion__item__list__item" key={item.id}>
      <Link
        className="nav-menu__accordion__item__list__item__link"
        href={item.href}
        onClick={onRedirect}
      >
        {item.text}
      </Link>
    </li>
  );
};

export default MenuLinkItem;
