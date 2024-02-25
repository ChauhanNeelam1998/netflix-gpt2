import { useEffect, useState } from "react";
import { MENU_API } from "./comman";

const useResturantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const jsonData = await data.json();
    // console.log(jsonData);
    setResInfo(jsonData?.data);
  };
  return resInfo;
};
export default useResturantMenu;
