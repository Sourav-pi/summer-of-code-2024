import "./AvailableItems.css";
import { memo, useState, useEffect } from "react";
import DefaultProductImage from "../assets/images/DefaultProductImage.png";

interface Props {
  style?: React.CSSProperties;
  onCardClick?: any;
}

const AvailableItems = memo(({ style = {}, onCardClick = () => {} }: Props) => {
  const [cards, setCards]: any = useState([]);
  useEffect(() => {
    const authToken = sessionStorage.getItem("token");

    const allItemsAPI =
      "https://dsoc-2024.webredirect.org/api/inventory/items/";

    fetch(allItemsAPI, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log(data.items);
        setCards(data.items);
      })
      .catch((error) => console.error(error));
  }, []);
  return (
    <div
      className="gridContainer overflow-scroll"
      onClick={onCardClick}
      style={{ width: "100%", ...style }}
    >
      {cards &&
        cards.map((item: any) => (
          <div
            key={item.id}
            className="gridItem w-100 "
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img
                src={DefaultProductImage}
                alt=""
                style={{
                  width: "100px",
                  height: "100px",
                  objectFit: "cover",
                  objectPosition: "center",
                  borderRadius: "10px",
                  margin: "5px",
                }}
              />
              <p className="text-center fw-bold font-monospace">
                {item.name.length > 20
                  ? item.name.slice(0, 20) + "..."
                  : item.name}
              </p>
            </div>
            <p className="text-center">{item.price}</p>
            <button className="btn btn-primary w-100">Add</button>
          </div>
        ))}
    </div>
  );
});

export default AvailableItems;
