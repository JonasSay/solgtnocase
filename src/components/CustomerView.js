import React, {useState} from "react";
import data from "../data/customerdata.json"


const CustomerView = () => {

  const customerData = data
  const [myState, setMyState] = useState(0);
  const [myStageIndex, setMyStageIndex] = useState(0);

  function showCustomer() {
    return (
        <div className="customer-info">
          <p>Navn: {customerData[myState].navn}</p>
          <p>Adresse: {customerData[myState].adresse}</p>
          <p>Primærrom: {customerData[myState].prom}</p>
          <p>Etasje: {customerData[myState].etasje}</p>
          <p>Soverom: {customerData[myState].soverom}</p>
          <p>Lokasjon: {customerData[myState].lat} + {customerData[myState].lon} (sette inn Google Maps integrasjon)</p>
        </div>
    )
  }

  function showCurrentStage(stageIndex) {
    switch (stageIndex) {
      case "Venter på tilbud":
        setMyStageIndex(0)
        break;
      case "Tilbud opprettet":
        setMyStageIndex(1)
        break;
      case "Tilbud akseptert":
        setMyStageIndex(2)
        break;
      case "Venter på endelig tilbud":
        setMyStageIndex(3)
        break;
      case "Endelig tilbud opprettet":
        setMyStageIndex(4)
        break;
      case "Venter på overtagelse":
        setMyStageIndex(5)
        break;
      case "Avsluttet":
        setMyStageIndex(6);
        break;
    }
  }

  function showPreviousCustomer() {
    if (myState > 0) {
      setMyState(myState - 1)
    }
  }

  function showNextCustomer() {
    if (myState < customerData.length - 1) {
      setMyState(myState + 1)
    }
  }

  return (
      <div className="container">

        <div className="buttons">
          <button onClick={showPreviousCustomer} className="forrigeButton">Forrige</button>
          <button onClick={showNextCustomer} className="nesteButton">Neste</button>
        </div>
          {showCustomer()}
          <div className="customer-action">
            <p>Kundeaksjonspunkt: {customerData[myState].kundeaksjonspunkt}</p>
          </div>
      </div>
  )
}
// <div className="customer-info"></div>

export default CustomerView;