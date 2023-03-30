import React from "react";
import { Spinner } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/Loading.css";

export default function Loading() {
  return (
    <div className="divPadre">
      <div className="divHijo">
        <Spinner color="primary" />
      </div>
    </div>
  );
}
