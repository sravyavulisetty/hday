import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import '../App.css'
const PaymentPage = () => {
    const [showDetails, setshowDetails] = useState("");
    const handleInputChange = (e)=>{
        setshowDetails(e.target.value)
    }
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastname] = useState('');
    const [cnumber, setcnumber] = useState('');
    const [cvvnum, setcvvnum] = useState(0);
    const [date, setDate] = useState("");
    const [taken, setTaken] = useState(false);
    const handleClick=()=>{
      if(firstname==="" || lastname==="" || cnumber==="" || cvvnum==="" || date===""){
        alert("please enter valid details")
      }
      else{
        setTaken(true);
      }
    }
  return (
    <div className='text-black p-8'>
      <h1 className='text-xl font-semibold'>Payment</h1>
      <p>All payments are secured and encrypted, so don't worry!</p>
      <div className='border py-2 px-4 mt-4'>
        <p>Please select the payment method</p>
      <div className='flex flex-row items-center justify-between border rounded-md p-2 mt-1'>
        <div className='flex flex-row items-center'>
          <input type='radio' onChange={handleInputChange} checked={showDetails === true}></input>
          <label className='ml-1'>Credit/Debit card</label>
        </div>
        <span>
          <img src="https://t4.ftcdn.net/jpg/04/06/75/39/360_F_406753914_SFSBhjhp6kbHblNiUFZ1MXHcuEKe7e7P.jpg" className='w-14 h-6'></img></span>
      </div>
      {showDetails && 
      <div className=''>
        <form className='flex flex-col justify-center w-fit' onSubmit={(e)=>e.preventDefault()}>
        <div className='flex flex-col w-fit'>
          <div className='flex flex-col mt-1 mr-2'>
            <label>First name</label>
            <input type='text' name='firstname' className='border rounded-md' onChange={(e)=>setFirstName(e.target.value)}></input>
          </div>
          <div className='flex flex-col mt-1'>
          <label>Last name</label>
          <input type='text' name='lastname' className='border rounded-md' onChange={(e)=>setLastname(e.target.value)}></input>
          </div>
        </div>
        <label className='mt-2'>Credit Card Number</label>
        <input type='text' name='creditnumber' value={cnumber} className='border rounded-md mt-1 p-1 w-fit' onChange={(e)=>setcnumber(e.target.value)}></input>
        <div className='flex flex-col w-fit mt-2'>
          <label>CVV</label>
          <input type='number' name='cvvnumber' value={cvvnum} className='border rounded-md p-1' onChange={(e)=>setcvvnum(e.target.value)}></input>
          <label>Valid Until</label>
          <input type='date' className='border rounded-md p-1' onChange={(e)=>setDate(e.target.value)}></input>
        </div>
        <button onClick={handleClick} className='mt-4 bg-blue-500 w-fit rounded-lg flex items-center p-2'>Take</button>
        </form>
        {taken ? <h1 className='text-2xl font-semibold mt-2'>Taken, Thanks bavagaru!!</h1> :""}
      </div>}
    </div>
    </div>
  )
}

export default PaymentPage;