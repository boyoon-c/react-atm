import React, { Component, useState } from 'react';


function Account (props) {
  const [balance, setBalance] = useState(0)
  let textInput;


  const withdraw = () => {
      setBalance(balance - Number(textInput.current.value))
  };

  const deposit = () => {
      setBalance(balance + Number(textInput.current.value))
  };

  return (
  
      <div className="account">
        <h2>{props.name}</h2>
        <div className="balance"> ${balance} </div>
        <input type="text" placeholder="enter an amount" ref={textInput = React.createRef()}/>

        <input type="button" value="Deposit" onClick={deposit} />
        <input type="button" value="Withdraw" onClick={withdraw}  />
      </div>
    )
  
}



export default Account;
