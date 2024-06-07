import React from "react";
import { Photo } from "./Photo";
import { Name } from "./Name";
import { Phone } from "./Phone";

export const Card = ({ user }) => {
  return (
    <div className="d-flex">
      <div className="contact-card">
        <div className="id-card row">
          <div className="col-md-4 ">
            <Photo user={user} />
          </div>
          <div className="col-md-8">
            <Name user={user} />
            <Phone user={user} />
          </div>
        </div>
      </div>
    </div>
  );
};
