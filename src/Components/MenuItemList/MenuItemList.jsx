import { MenuItemCard } from "../MenuItemCard/MenuItemCard";
import "./MenuItemList.css";

export function MenuItemList({ menuItemList, description }) {
  return (
    <div className="MenuItemListContainer">
      {menuItemList.map((menuItem) => {
        return (
          <MenuItemCard
            menuItem={menuItem}
            key={menuItem.name}
            description={description}
          />
        );
      })}
    </div>
  );
}
