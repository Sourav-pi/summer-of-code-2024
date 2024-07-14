import styles from "./OrderMenuItem.module.css";
import QtyBtn from "./QtyBtn";
import trash from "../assets/images/trash.png";
import DefaultProductImage from "../assets/images/DefaultProductImage.png";

interface Props {
  productID?: Number;
  itemName?: string;
  itemPrice?: number;
}

const OrderMenuItem = ({
  productID = 0,
  itemName = "Product X",
  itemPrice = 278.55,
}: Props) => {
  return (
    <div className={styles.OutContainer}>
      <div className={styles.item} id={`order-menu-item-${productID}`}>
        <img src={DefaultProductImage} alt="" className={styles.item_img} />
        <div className={styles.item_text}>
          <p className={styles.item_name}>{itemName}</p>
          <p className={styles.item_price}>{itemPrice}</p>
        </div>
        <div className={styles.item_qty_container}>
          <QtyBtn productID={productID} />
        </div>
      </div>
      <img
        src={trash}
        alt=""
        className={styles.trash}
        onClick={() => console.log("remove")}
      />
    </div>
  );
};

export default OrderMenuItem;
