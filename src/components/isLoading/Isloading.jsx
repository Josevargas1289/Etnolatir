import React from "react";
import { Spinner } from "react-bootstrap";
import "../../components/isLoading/spinner.css";
import { PulseLoader } from "react-spinners";

const Isloading = () => {
  return (
    <div className="sppiner">
      <PulseLoader color="#29abe0" size={25} />
      
    </div>
  );
};

export default Isloading;
