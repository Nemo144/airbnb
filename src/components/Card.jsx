import React from "react";

export const Card = ({
  img1,
  img2,
  img3,
  star1,
  lessons1,
  rate1,
  star2,
  lessons2,
  rate2,
  star3,
  lessons3,
  rate3,
}) => {
  return (
    <div className="flex flex-row m-4 pl-16 ">
      <div className="flex flex-col">
        <img src={img1} alt="air1" />
        <p>{star1}</p>
        <p>{lessons1}</p>
        <p>{rate1}</p>
      </div>

      <div className="flex flex-col">
        <img src={img2} alt="air2" className=" pl-5 w-72" />
        <div className="pl-5">
          <p>{star2}</p>
          <p>{lessons2}</p>
          <p>{rate2}</p>
        </div>
      </div>

      <div>
        <img src={img3} alt="air3" className=" pl-5 w-52 my-1" />
        <div className="pl-5">
          <p>{star3}</p>
          <p>{lessons3}</p>
          <p>{rate3}</p>
        </div>
      </div>
    </div>
  );
};
