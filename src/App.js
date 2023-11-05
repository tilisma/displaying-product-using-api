import axios from 'axios';
import './App.css';

function App() {
  fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>console.log(json))
  axios.get('https://fakestoreapi.com/products').then(res => console.log(res.data))
  return (
    <div>
      
    </div>
  );
}

export default App;
