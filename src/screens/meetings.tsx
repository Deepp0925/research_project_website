import React from "react";
import "../App.css";
import Title from "../components/Title";
import { ImageList, ImageListItem } from "@mui/material";
import aum0 from "../images/aum_meeting_0.jpg";
import aum1 from "../images/aum_meeting_1.jpg";
import aum2 from "../images/aum_meeting_2.jpg";
import aum3 from "../images/aum_meeting_3.jpg";
import aum4 from "../images/aum_meeting_4.jpg";

const data = [
  {
    img: aum0,
    title: "AUM Meeting Image",
  },
  {
    img: aum1,
    title: "AUM Meeting Image",
  },
  {
    img: aum2,
    title: "AUM Meeting Image",
  },
  {
    img: aum3,
    title: "AUM Meeting Image",
  },
  {
    img: aum4,
    title: "AUM Meeting Image",
  },
];

const Meetings = () => {
  return (
    <div className="container">
      <div className="page-body">
        <Title text="Meetings" />
        <ImageList rowHeight={200} cols={3}>
          {data.map((element) => (
            <ImageListItem key={element.img} cols={1}>
              <img src={element.img} alt={element.title} />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    </div>
  );
};

export default Meetings;
