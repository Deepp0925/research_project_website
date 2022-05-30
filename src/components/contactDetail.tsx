import React from "react";

interface Props {
  name: string;
  jobTitle: string;
  email: string;
  phone: string;
}

const ContactDetail = (props: React.PropsWithChildren<Props>) => {
  return (
    <div className="contact-detail">
      <h1>{props.name}</h1>
      <h3>{props.jobTitle}</h3>
      <p>Email: {props.email}</p>
      <p>Phone: {props.phone}</p>
    </div>
  );
};

export default ContactDetail;
