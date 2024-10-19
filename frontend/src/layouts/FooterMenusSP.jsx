import { ChevronDown } from 'lucide-react';
import { Menu } from '../types'; // You may need to adjust this import if 'Menu' is a TypeScript type

export const FooterMenusSP = ({ heading, menus }) => {
  return (
    <details className="group space-y-4">
      <summary className="flex list-none items-center justify-between">
        <span className="text-sm font-bold">{heading}</span>
        <ChevronDown className="stroke-1 group-open:rotate-180" />
      </summary>
      <ul className="space-y-1">
        {menus.map((menu, index) => (
          <li key={index}>
            <a
              href={menu.link}
              className="text-sm hover:text-gray-400 hover:underline"
            >
              {menu.label}
            </a>
          </li>
        ))}
      </ul>
    </details>
  );
};
