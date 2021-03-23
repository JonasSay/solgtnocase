import React from "react";
import data from "../data/customerdata.json"

const CustomerView = () => {


  function showCustomers() {

    const customerData = JSON.parse(data)

    return customerData.map( customer => {
      return <div>
        Customer: {customer.name}
      </div>
    })

  }

  return (
      <div className="container">
        <div className="customer-info"> </div>
        { showCustomers() }
      </div>
  )
}

export default CustomerView;