import React, {useState} from "react";
import data from "../data/customerdata.json"


const CustomerView = () => {

  const customerData = data
  const [myState, setMyState] = useState(0);
  const [myStageIndex, setMyStageIndex] = useState(0);

  function showCustomer() {
    return (
        <div className="customer-info">
          <p><span style={{fontWeight: "bold"}}>Kunde:</span> {customerData[myState].navn}</p>
          <p><span style={{fontWeight: "bold"}}>Adresse:</span> {customerData[myState].adresse}</p>
          <p><span style={{fontWeight: "bold"}}>Primærrom:</span> {customerData[myState].prom}</p>
          <p><span style={{fontWeight: "bold"}}>Etasje:</span> {customerData[myState].etasje}</p>
          <p><span style={{fontWeight: "bold"}}>Soverom:</span> {customerData[myState].soverom}</p>
          <p><span style={{fontWeight: "bold"}}>Lokasjon:</span> {customerData[myState].lat} + {customerData[myState].lon} (sette inn Google Maps integrasjon)</p>
        </div>
    )
  }

  // I am very very very very very sorry for this complete eyesore, but I was running out of time
  function showCurrentStage(stageIndex) {
    const customerAction = customerData[myState].status
    const stage1 = "Venter på tilbud"
    const stage2 = "Tilbud opprettet"
    const stage3 = "Tilbud akseptert"
    const stage4 = "Venter på endelig tilbud"
    const stage5 = "Endelig tilbud opprettet"
    const stage6 = "Venter på overtagelse"
    const stage7 = "Avsluttet"

    switch (customerAction) {
      case stage1:
        return (<h4 className="progress-line">
          Status (1/7):<h3>Venter på tilbud</h3>
        </h4>)
      case stage2:
        return (
            <h4 className="progress-line">
              Status (2/7):<h3>Tilbud opprettet</h3>
            </h4>)
      case stage3:
        return (
            <h4 className="progress-line">
              Status (3/7):<h3>Tilbud akseptert</h3>
            </h4>)
      case stage4:
        return (
            <h4 className="progress-line">
              Status (4/7):<h3>Venter på endelig tilbud</h3>
            </h4>)
      case stage5:
        return (
            <h4 className="progress-line">
              Status (5/7):<h3>Endelig tilbud opprettet</h3>
            </h4>)
      case stage6:
        return (
            <h4 className="progress-line">
              Status (6/7):<h3>Venter på overtagelse</h3>
            </h4>)
      case stage7:
        return (
            <h4 className="progress-line">
              Status (7/7):<h3>Avsluttet</h3>
            </h4>)
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
          <button onClick={showPreviousCustomer} className="forrige-button">Forrige</button>
          {myState + 1 + "/" + customerData.length}
          <button onClick={showNextCustomer} className="neste-button">Neste</button>
        </div>
        {showCurrentStage()}
        {showCustomer()}
        <div className="customer-action">
          <p style={{fontWeight: "bold"}}>Hva er kundens neste steg?</p>
          {customerData[myState].kundeaksjonspunkt ?
              <h3>{customerData[myState].kundeaksjonspunkt}</h3> :
              <h3>Avvent instrukser fra Solgt.no</h3>}
        </div>
      </div>
  )
}

export default CustomerView;