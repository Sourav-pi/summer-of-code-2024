import { useState } from "react";
import "./QtyBtn.css";

interface Props {
  productID?: Number;
}

const QtyBtn = ({ productID = 0 }: Props) => {
  let strProductID = productID.toString();
  let [value, setValue] = useState(1);
  return (
    <form>
      <div className="input-group">
        <input
          style={{
            borderRadius: "5px 0px 0px 5px",
          }}
          className="qty-btn"
          value={"-"}
          readOnly
          onClick={() => {
            if (value > 1) {
              setValue(value - 1);
            }
          }}
        />
        <input
          type="number"
          className="qty-value no-spinner"
          value={value}
          readOnly
          id={`qty-value-${strProductID}`}
        ></input>
        <input
          style={{
            borderRadius: "0px 5px 5px 0px",
          }}
          className="qty-btn"
          value={"+"}
          readOnly
          onClick={() => {
            setValue(value + 1);
          }}
        />
      </div>
    </form>
  );
};

export default QtyBtn;
