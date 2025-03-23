
import { Suspense } from 'react';
import './App.css'
import Counter from './counter';
import Users from './users';


const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
.then(res=>res.json())

function App() {
  
function handleClick(){
  alert('i am clicked')
}

const clickHandle = ()=>{
  alert('clicked-3')
}

const handleClicked4=(num)=>{
  const addNum= num + 5;
  alert(addNum)
}
  return (
    <>
      

      <h3>Vite + React</h3>
     
     <Counter></Counter>
     <Suspense fallback={<h3>Loading....</h3>}>
      <Users fetchUsers ={fetchUsers}></Users>
     </Suspense>

      <button onClick={handleClick}>Click Me</button>
      <button onClick={clickHandle}>clicked-3</button>
      <button onClick={clickHandle}>clicked-3</button>
      <button onClick={()=>handleClicked4(12)}>clicked-4</button>
      
    </>
  )
}

export default App
