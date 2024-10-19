// Removed the import for Menu since it's not needed in JS
// If you still need to import something from '../types', adjust accordingly

export const FooterMenus = ({ heading, menus }) => {
  return (
    <div className="space-y-3">
      <p className="font-bold">{heading}</p>
      <ul className="space-y-1">
        {menus.map((menu, index) => (
          <li key={index}>
            <a href={menu.link} className="hover:text-gray-400 hover:underline">
              {menu.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
