import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "https://randomuser.me/api/?results=50";

const useData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await axios.get(API_URL);
        const fetchedContacts = response.data.results.map((user) => ({
          name: `${user.name.first} ${user.name.last}`,
          phone: user.phone,
          picture: user.picture.thumbnail,
        }));
        setData(fetchedContacts);
      } catch (error) {
        console.log("Error fetching the data", error);
      }
    };
    fetchContacts();
  }, []);

  return { data };
};

export default useData;
