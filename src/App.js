// import React, {Component } from 'react'
// import Display from './Display';

// export default class App extends Component {
//   state ={
//     name : "sai",
//     age : 25,
//     email : "sai@gamil.com"
//   }
//   render() {
//     return (
//       <div>
//         <center>
//           <Display name = {this.state.name}/>
//           <Display age = {this.state.age}/>
//           <Display email = {this.state.email}/>
//         </center>
//         <button onClick={() =>alert("Login Successfull") }>Login</button>
//       </div>
//     )
//   }
// }



// import React,{useState,useEffect} from 'react'

// const App = () => {
//   const [name,setName] = useState("");
//   useEffect(() => console.log("name"),[])
//   const handler = e =>{
//     setName(e.target.value)

//   }
//   return (
//     <div>
//       <input type = "text" placeholder = "username" value={name} name="name" onChange= {handler}/><br/>{name }
//     </div>
//   )
// }

// export default App



// import React,{useState} from 'react'
// function App() {
//   const[data,setData] =useState({
//     username:'',
//     password:'', 
//   })
//   const{username,password} = data;
//   const onChange = e =>{
//     setData({...data,[e.target.name]:[e.target.value]})
//   }
//   const submitHandler = e =>{
//     e.preventDefault();
//     console.log(data);
//   }

//   return (
//     <div>
//       <form onSubmit={submitHandler}>
//         <center>
//           <input type="text" name="username" value={username} onChange={onChange} placeholder="Username"/><br/>
//           <input type="password " name="password" value={password} onChange={onChange} placeholder="Password"/><br/>
//           <input type="submit" name="submit"/>
//         </center>
//       </form>
//     </div>
//   );
// }

// export default App



// import React from 'react'

// function App() {
//   const names=['sai','ravi','suresh','sukumar'];
//   const filtered = names.filter(name => name.includes('s'))
//   return (
//     <div>
//       {
//         filtered.map(item => <li>{item}</li>)
//       } 
//     </div>
//   )
// }
// export default App





//creating a login form 




// import React ,{useState}from 'react'

// const App = () => {
//   const [data,setData] = useState({
//     username : '',
//     password : ''
//   })
//   const {username,password} = data;
//   const changeHandler = e =>{
//     setData({...data,[e.target.name]:[e.target.value]})
//   }
//   const submitHandler = e =>{
//     e.preventDefault()
//     console.log(data)
//   }
//   return (
//     <div>
//       <center>
//         <form onSubmit={submitHandler}>
//           <input type="text" name="username" value={username} onChange={changeHandler}/><br/>
//           <input type="password" name="password" value={password} onChange={changeHandler}/><br/>
//           <input type="submit" name="submit"/>
//         </form>
//       </center>
//     </div>
//   )
// }

// export default App





// creating a Signup form





// import React,{useState} from 'react'

// const App = () => {
//   const [data,setData] = useState({
//     name : '',
//     email : '',
//     passwword :'',
//     confirmpassword :'',
//   })
//   const {username,email,password,confirmpassword}=data;
//   const changeHandler = e =>{
//     setData({...data,[e.target.name]:e.target.value})
//   }
//   const submitHandler = e =>{
//     e.preventDefault()
//     if(username.lenght <=5){
//       alert("username must be more than 5 characters")
//     }
//     else if (password!==confirmpassword){
//       alert("passwords are not matching")
//     }
//     else{
//       console.log(data)
//     }
//   }
//   return (
//     <div>
//       <center>
//         <form autoComplete="off" onSubmit={submitHandler}>
//           <input placeholder="enter Username" type="text" name="username" value={username} onChange={changeHandler}/><br/>
//           <input placeholder ="enter email" type="email" name="email" value={email} onChange={changeHandler}/><br/>
//           <input placeholder ="enter password" type="password" name="password" value={password} onChange={changeHandler}/><br/>
//           <input placeholder="confirm password" type="password" name="confirmpassword" value={confirmpassword} onChange={changeHandler}/><br/>
//           <input type="submit" name="submit"/>
//           {password !==confirmpassword ?<p style={{"color":"red"}}>"passwords are not matching"</p>:null}
//         </form>
//       </center>
//     </div>
//   )
// }

// export default App





// creating a Calculator App





// import React,{useState} from 'react'
// import './App.css';

// const App = () => {
//   const[input,setInput] = useState(" ");
//   const[result,setResult] = useState(0)
//   const handler = e =>{
//     setInput(e.target.value)
//   }
  
//   return (
//     <div>
//       <center>
//         <input type="text" name="input" value={input} onChange={handler}/><br/>
//         <button onClick={() => setResult(eval(input))}>Result</button>
//         <h4> Result is : {result}</h4>

//         <button onClick={() => setInput(input+'1')}>1</button>
//         <button onClick={() => setInput(input+'2')}>2</button>
//         <button onClick={() => setInput(input+'3')}>3</button>
//         <button onClick={() => setInput(input+'4')}>4</button>
//         <button onClick={() => setInput(input+'5')}>5</button><br/>

//         <button onClick={() => setInput(input+'6')}>6</button>
//         <button onClick={() => setInput(input+'7')}>7</button>
//         <button onClick={() => setInput(input+'8')}>8</button>
//         <button onClick={() => setInput(input+'9')}>9</button>
//         <button onClick={() => setInput(input+'0')}>0</button><br/>

//         <button onClick={() => setInput(input+'/')}>/</button>
//         <button onClick={() => setInput(input+'*')}>*</button>
//         <button onClick={() => setInput(input+'+')}>+</button>
//         <button onClick={() => setInput(input+'-')}>-</button>
//         <button onClick={() => setInput(' ')}>clr</button>
//       </center>
//     </div>
//   )
// }

// export default App





// fetch data from the url





// import React,{useEffect,useState} from 'react'

// const App = () => {
//   const [data,setData] = useState([]);
//     useEffect(()=>{
//       fetch('https://jsonplaceholder.typicode.com/todos')
//       .then(response => response.json())
//       .then(json => setData(json))
//     },[])
//   return (
//     <div>
//       {data.map(item => <li key = {item.id}>{item.title}</li>)}
//     </div>
//   )
// }

// export default App






// using Axios library






// import React,{useEffect,useState} from 'react'
// import axios from 'axios';

// const App = () => {
//   const [data,setData] = useState([]);
//     useEffect(()=>{
//       axios.get('https://jsonplaceholder.typicode.com/todos').then(
//         response => setData(response.data))
//     },[])
//   return (
//     <div>
//       {data.map(item => <li key = {item.id}>{item.title}</li>)}
//     </div>
//   )
// }
// export default App




import React from 'react';
import Navbar from './Navbar';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import Home from './Home';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
            <Route path = "/" exact component = {Home} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App