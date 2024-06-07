import { Card } from "./card";
import "./contactList.css";

const contactList = ({ contactList }) => {
  return (
    <>
      <div className="d-flex contacts-container">
        {contactList.map((user, index) => (
          <div key={index} classNameName="card-column">
            <Card user={user} />
          </div>
        ))}
      </div>
    </>
  );
};

export default contactList;
