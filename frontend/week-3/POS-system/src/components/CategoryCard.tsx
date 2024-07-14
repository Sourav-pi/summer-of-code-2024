import "./CategoryCard.css";
import burger from "../assets/images/burger.svg";
interface Props {
  style?: React.CSSProperties;
}

const CategoryCard = ({ style = {} }: Props) => {
  return (
    <div
      className="outer-container border border-1"
      style={{
        height: "100%",
        width: "100%",
        display: "grid",
        gridTemplateRows: "auto 1fr",
        ...style,
      }}
    >
      <div className="w-100 head-container">
        <img src={burger} style={{ width: "50px" }} alt="" />
        <p
          style={{
            fontWeight: "bold",
            fontFamily: "monospace",
            fontSize: "20px",
          }}
        >
          CATEGORY
        </p>
      </div>
      <div className="outer-option-container ">
        <div className="option-container w-100 clicked">
          <p>Item Name</p>
        </div>
        <div className="option-container w-100 ">
          <p>Item Name</p>
        </div>
        <div className="option-container w-100">
          <p>Item Name</p>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
