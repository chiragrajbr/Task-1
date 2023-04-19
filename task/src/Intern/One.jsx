import {React,useState} from 'react'


function One() {
    let [state,setState]=useState();
    let  [message,setMessage]=useState("")

    let positive=(event)=>{
      const state = event.target.value;
      setState(state)

        if(state===""){
            setMessage("")
        }
        else if(state<1){
       setMessage(`Please Enter a Positive Number`)
       }else{
        if(state%2===0){
          setMessage( ` ${Number(state) + 2}, 
                        ${Number(state) + 4 }, 
                        ${Number(state) + 6}`)
        }
        else{
          setMessage( `${Number(state) + 2},

           ${Number(state) + 4},
            ${Number(state) + 6}`)
        }
       }
    }
     
  return (
    <div>
        <center>
            <form action="" className="mt-3" onChange={positive}>
      <label htmlFor="" className='mt-5' >Enter a Number :</label>
      <input type="number"  value={state} /><br/>
     <p>{message}</p>
     </form>
      </center>
    </div>
  )
}


export default One

