import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
import { decermentWithCheckingAction, incerment } from "../App/Feature/CounterFeature/actions";

const Learn = () => {
  const stateCount = useSelector((state) => state.counter);
  const dispacth = useDispatch();

  return (
    <div className="text-center">
      <h1 className="my-5">REDUX</h1>
      <h1>Ini adalah Halaman Redux</h1>

      <h3 className="mt-5">Contoh Perhitungan</h3>
      <h5 className="mb-3">Kurang | Tambah</h5>

      <Button onClick={() => dispacth(decermentWithCheckingAction(5))} variant="danger">
        -
      </Button>
      <span className="mx-4 fw-bold">{stateCount.count}</span>
      <Button onClick={() => dispacth(incerment(5))} variant="success">
        +
      </Button>
      <h4 className="mt-5">Perkenalkan nama saya : {stateCount.name}</h4>
    </div>
  );
};

export default Learn;
