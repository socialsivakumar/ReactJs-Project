import React, { useState } from 'react';
import JsonData from './htmljson.json';
import './jsondata.css'

function JsonDataDisplay() {
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState('');
  const [unitPrice, setUnitPrice] = useState('');
  const [total, setTotal] = useState('');

  const handleDataClick = (info) => {
    setDescription(info.DESCRIPTION);
    setQuantity(info.QTY);
    setUnitPrice(info.UNITPRICE);
    setTotal(info.TOTAL);
  };

  return (
    <div className='totalcontainer'>
      <table className="table tablestriped">        

        <thead>
          <tr>
            <th>Description</th>
            <th>Quantity</th>
            <th>Unit Price</th>
            <th>Total</th>
          </tr>
        </thead>

        <tbody>
          {JsonData.map((info, index) => (
            <tr key={index}>
              <td>{info.DESCRIPTION}</td>
              <td>{info.QTY}</td>
              <td>{info.UNITPRICE}</td>
              <td>{info.TOTAL}</td>
              <td>
                <button onClick={() => handleDataClick(info)}>Set Values</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className='horizontalines'>
        <h2>Selected Data:</h2>
        <label>Description: </label>
        <input type="text" value={description} readOnly />
        <br />
        <label>Quantity: </label>
        <input type="text" value={quantity} readOnly />
        <br />
        <label>Unit Price: </label>
        <input type="text" value={unitPrice} readOnly />
        <br />
        <label>Total: </label>
        <input type="text" value={total} readOnly />
      </div>
    </div>
  );
}

export default JsonDataDisplay;