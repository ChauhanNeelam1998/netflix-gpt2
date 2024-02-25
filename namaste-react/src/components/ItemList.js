import { CDN_URL } from "../utils/comman";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleaddItem = (item) => {
    // Dispatch an action
    dispatch(addItem(item));
  };

  console.log(items);
  return (
    <div>
      {items.map((item) => {
        return (
          <div
            data-testid="items"
            key={item.card.info.id}
            className="p-2 m-2 border-gray-200 text-left border-b-2 flex justify-between"
          >
            <div className="w-9/12">
              <div className="py-2 ">
                <span className="font-medium">{item?.card?.info?.name}</span>
                <span>
                  {" "}
                  - ₹
                  {item.card.info.price
                    ? item.card.info.price / 100
                    : item.card.info.defaultPrice / 100}
                </span>
              </div>
              <p className="text-xs">{item.card.info.description}</p>
            </div>
            <div className="w-3/12">
              <img src={CDN_URL + item.card.info.imageId} />
              <div className="absolute mx-12 my-[-30px]">
                <button
                  className="p-2 rounded-md bg-black text-white "
                  onClick={() => handleaddItem(item)}
                >
                  Add +
                </button>
              </div>
            </div>
          </div>
        );

        // console.log(item.card.info.defaultPrice);
      })}
    </div>
  );
};
export default ItemList;
