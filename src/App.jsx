import Heading from "./components/Heading";
import ContactList from "./components/contactList";

import "./App.css";
import { useEffect, useState } from "react";
import { Footer } from "./components/Footer";
import useData from "./hooks/useData";

function App() {
  const { data: initialContactList } = useData();
  const [contactList, setContactList] = useState([]);

  useEffect(() => {
    setContactList(initialContactList);
  }, [initialContactList]);

  const onSearch = (searchTerm) => {
    const searchItem = searchTerm.toLowerCase();
    if (searchItem.trim() === "") {
      setContactList(initialContactList); // Reset to initial list if search input is empty
    } else {
      const filteredContacts = initialContactList.filter((user) =>
        user.name.toLowerCase().includes(searchItem)
      );
      setContactList(filteredContacts);
    }
  };

  return (
    <div className="App">
      <div className="container">
        <div className="row gap-2 mb-4">
          <Heading contactList={contactList} onSearch={onSearch} />
          <ContactList contactList={contactList} />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
