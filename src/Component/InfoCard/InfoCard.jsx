import React from "react";
import { useDispatch } from "react-redux";
import { removeUser } from "../../Features/Slice/InfoSlice";
import Button from "@mui/material/Button";
import "./InfoCard.css";

export const InfoCard = ({ usersInfo }) => {
  const dispatch = useDispatch();
  const deleteItem = (id) => {
    dispatch(removeUser(id));
  };
  return (
    <>
      {usersInfo.map((item, id) => (
        <div className="card">
          <div className="card-head">
            <div className="d-from">
              <h3 className="title">DestinationFrom</h3>
              <p className="sub-title">{item.destinationFrom}</p>
            </div>
            <div className="d-to">
              <h3 className="title">DestinationTo</h3>
              <p className="sub-title">{item.destinationTo}</p>
            </div>
            <div className="guest">
              <h3 className="title">Guests</h3>
              <p className="sub-title">{item.guests}</p>
            </div>
            <div className="class">
              <h3 className="title">ClassName</h3>
              <p className="sub-title">{item.class}</p>
            </div>
            <div className="c-date">
              <h3 className="title">Date</h3>
              <div className="card-info">
                {item.date && (
                  <div className="date">
                    <p className="sub-title">{item.date.$M + 1}</p>
                    <small>-</small>
                    <p className="sub-title">{item.date.$D}</p>
                    <small>-</small>
                    <p className="sub-title">{item.date.$y}</p>
                  </div>
                )}
              </div>
            </div>
            <div className="btn">
              <Button onClick={() => deleteItem(id)} variant="outlined">
                remove
              </Button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
