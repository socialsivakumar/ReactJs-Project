import React, { useState, useEffect } from 'react';

import JsonData from './htmljson.json'
 function JsonDataDisplay(){
    const DisplayData=JsonData.map(
        (info)=>{
            return(
                <tr>
                    <td><input type="text" value={info.InvoiceNo} /> </td>
                    <td><input type="text" value={info.InvoiceDate} /> </td>
                    <td><input type="text" value={info.DESCRIPTION} /> </td>
                    <td><input type="text" value={info.QTY} /></td>
                    <td><input type="text" value={info.UNITPRICE} /></td>
                    <td><input type="text" value={info.TOTAL} /> </td>
                    <td><button className="btn btn-primary btn-sm">Edit</button></td>
                    <td><button className="btn btn-danger btn-sm">Delete</button></td>
                </tr>
            )
        }
    )
 
    return(
        <div>
            <table class="table table-striped">
                <thead>
                    <tr>
                    <th>InvoiceNo</th>
                    <th>InvoiceDate</th>                   
                    <th>Item</th>
                    <th>Qty</th>
                    <th>Rate</th>
                    <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                 
                    
                    {DisplayData}
                    
                </tbody>
            </table>
             
        </div>
    )
 }
 
 export default JsonDataDisplay;