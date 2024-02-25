import ItemList from "./ItemList";
import { useState } from "react";

const ResturantCategory = ({ data, showItem, setShowIndex }) => {
  // const {} = props;
  // const [showItem, setShowItem] = useState(false);
  const [toggleButton, setToggleButton] = useState(false);

  const handleClick = () => {
    // console.log("clicked");
    // setShowItem(!showItem);
    setShowIndex();
    setToggleButton(!toggleButton);
  };
  //   console.log(props);
  return (
    <div>
      {/* Header */}
      <div className="bg-gray-50  mx-auto my-4 p-4 w-6/12 shadow-lg">
        <div className="flex justify-between " onClick={handleClick}>
          <span className="font-bold">
            {data.title} ({data.itemCards.length})
          </span>
          <span>🔽</span>
        </div>
        {/* {Body} */}
        {toggleButton && showItem && <ItemList items={data?.itemCards} />}
      </div>
    </div>
  );
};
export default ResturantCategory;
