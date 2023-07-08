import "./MenuItemCard.css";

export function MenuItemCard({ menuItem, description }) {
  return (
    <div className="MenuItemContainer">
      <img src={menuItem.imgSrc} alt={menuItem.name} />
      <div className="MenuItemDetails">
        <div className="MenuItemName">{menuItem.name}</div>
        <div>
          Rs. {menuItem.price} for {menuItem.qty}
        </div>
        <div>{description}</div>
      </div>
    </div>
  );
}
