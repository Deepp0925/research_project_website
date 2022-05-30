import React from "react";
import "../app.css";

interface Props {
  image: string;
  name: string;
  title: string;
  school: string;
}

const PersonCard = (props: React.PropsWithChildren<Props>) => {
  return (
    // <Card id="person-card" color="primary">
    //   <CardMedia
    //     component="img"
    //     alt="Photo"
    //     height="220"
    //     image={props.image}
    //     title="Contemplative Reptile"
    //   />
    //   <CardContent>
    //     <h2>{props.name}</h2>
    //     <p>{props.title}</p>
    //     <p>{props.school}</p>
    //   </CardContent>
    // </Card>

    <div className="person-card">
      <img src={props.image} alt={props.name} />
      <div className="person-card-info">
        <h2>{props.name}</h2>
        <p>{props.title}</p>
        <p>{props.school}</p>
      </div>
    </div>
  );
};

export default PersonCard;
