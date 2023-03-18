import React, { useState } from "react";
import "./Forms.css";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FcBusinessman } from "react-icons/fc";
import { BiShoppingBag } from "react-icons/bi";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { addUsers } from "../../Features/Slice/InfoSlice";
import { InfoCard } from "../InfoCard/InfoCard";

export const Forms = () => {
  const from = [
    {
      label: "",
    },
    {
      label: "Dhaka",
    },
    {
      label: "Syhlet",
    },
    {
      label: "Cox's Bazar",
    },
    {
      label: "Sirajgonj",
    },
  ];
  const To = [
    {
      label: "",
    },
    {
      label: "Dhaka",
    },
    {
      label: "Syhlet",
    },
    {
      label: "Cox's Bazar",
    },
    {
      label: "Sirajgonj",
    },
  ];
  const person = [
    {
      label: "",
    },
    {
      label: "1 Person",
    },
    {
      label: "2 Person",
    },
    {
      label: "3 Person",
    },
    {
      label: "4 Person",
    },
  ];
  const className = [
    {
      label: "",
    },
    {
      label: "Economy",
    },
    {
      label: "Business",
    },
  ];
  const initioalValue = {
    destinationFrom: "",
    destinationTo: "",
    guests: "",
    class: "",
    date: "",
  };
  const [info, setInfo] = useState(initioalValue);
  const usersInfo = useSelector((info) => info.infoUser.submit);

  const handleChange = (x) => {
    const { value, name } = x.target;
    setInfo((prive) => ({
      ...prive,
      [name]: value,
    }));
  };
  const dispath = useDispatch();
  const validationScrema = () => {
    if (
      info.destinationFrom &&
      info.destinationTo &&
      info.guests &&
      info.class &&
      info.date
    ) {
      dispath(addUsers(info));
    } else {
      alert("Please full the from");
    }
  };
  const handleAddInfo = () => {
    validationScrema();
  };

  return (
    <>
      <div className="forms">
        <Container fixed>
          <div className="main">
            <div className="form-box">
              <div className="from-container">
                <div className="icon">
                  <HiOutlineLocationMarker />
                </div>
                <TextField
                  onChange={handleChange}
                  name="destinationFrom"
                  id="standard-select-currency-native"
                  select
                  label="Destination From"
                  defaultValue="EUR"
                  SelectProps={{
                    native: true,
                  }}
                  variant="standard"
                  className="person"
                >
                  {from.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </TextField>
              </div>
              <div className="from-container">
                <div className="icon">
                  <HiOutlineLocationMarker />
                </div>
                <TextField
                  onChange={handleChange}
                  name="destinationTo"
                  id="standard-select-currency-native"
                  select
                  label="Destination To"
                  defaultValue="EUR"
                  SelectProps={{
                    native: true,
                  }}
                  variant="standard"
                  className="person"
                >
                  {To.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </TextField>
                <div className="icon">
                  <FcBusinessman />
                </div>
                <TextField
                  onChange={handleChange}
                  name="guests"
                  id="standard-select-currency-native"
                  select
                  label="Guests"
                  defaultValue="EUR"
                  SelectProps={{
                    native: true,
                  }}
                  variant="standard"
                  className="person"
                >
                  {person.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </TextField>
                <div className="icon">
                  <BiShoppingBag />
                </div>
                <TextField
                  onChange={handleChange}
                  name="class"
                  id="standard-select-currency-native"
                  select
                  label="ClassName"
                  defaultValue="EUR"
                  SelectProps={{
                    native: true,
                  }}
                  variant="standard"
                  className="person"
                >
                  {className.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </TextField>

                <div className="date">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={["DatePicker"]}>
                      <DatePicker
                        onChange={(date) =>
                          setInfo((prev) => ({ ...prev, date }))
                        }
                      />
                    </DemoContainer>
                  </LocalizationProvider>
                </div>
              </div>
              <div className="btn">
                <Button
                  onClick={handleAddInfo}
                  className="btn"
                  variant="outlined"
                >
                  Book
                </Button>
              </div>
            </div>
            <InfoCard usersInfo={usersInfo} />
          </div>
        </Container>
      </div>
    </>
  );
};
