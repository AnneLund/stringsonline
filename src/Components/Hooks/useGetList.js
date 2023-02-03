import { useState, useEffect } from "react";
import AppService from "../Appservices/Appservice";

const useGetListItemsByEndPoint = () => {
  const [state, setState] = useState([]);

  useEffect(() => {
    async function fetchData() {
      //fetches and sets data to the response object
      const response = await AppService.GetList();
      //sets the data to the variable
      try {
        if (response.data) {
          console.log("Response Data: ", response.data);
          setState(response.data);
        }
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  return { state };
};

export default useGetListItemsByEndPoint;
