import React, {useState} from "react";
import data from "../data/customerdata.json"


const CustomerView = () => {

  const customerData = data
  const [myState, setMyState] = useState(0);

  function showCustomer() {
    return customerData[myState].navn
  }

  function showPreviousCustomer() {
    if(myState > 0) {
      setMyState(myState - 1)
    }
  }

  function showNextCustomer() {
    if(myState < customerData.length - 1) {
      setMyState(myState + 1)
    }
  }

  return (
      <div className="container">
        <button onClick={showPreviousCustomer} className="forrigeButton">Forrige</button>
        {showCustomer()}
        <button onClick={showNextCustomer} className="nesteButton">Neste</button>
      </div>
  )
}
// <div className="customer-info"></div>

export default CustomerView;