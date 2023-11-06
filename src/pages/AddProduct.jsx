import axios from 'axios';
import React, { useState } from 'react' 
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const AddProduct = () => { 
    const [title,setTitle]= useState(""); 
    const [category, setCategory]= useState("");  
    const [price, setPrice]= useState("");
    const [rating, setRating]= useState("");  
    console.log(title,category,price,rating);

    const handleClick =  (e) => {
        e.preventDefault();  
       if(title&& category&& price&& rating) { 
        const formdata = new FormData();
      formdata.append("title",title);
      formdata.append("category",category);
      formdata.append("price",price);
      formdata.append("rating",rating);  
      axios.post("https://fakestoreapi.com/products",formdata) 
          .then(() => { 
            toast("Form Submit Sucessfully");
            setTitle("");
            setCategory("");
            setPrice("");
            setRating("");

          })

       }
    }  
    
  return (
    <div>
        <form action="" className='border-2 p-4 w-[60%] mt-4 ml-2 mb-4 bg-slate-100'>
      <div className='container '> 
      <h1 className='font-bold text-lg'>Add Products</h1>  
      <div className='grid grid-cols-1 gap-2'>
        <div>
          <label>Title</label> 
          <input  onChange={e => setTitle(e.target.value)} value={title} className='px-3 py-2 border border-gray-600 w-full focus:outline-none focus:ring focus:ring-blue-300 rounded-md' type="text" name='title'placeholder='title'required></input>
        </div> 
        <div>
        <label>Category</label> 
          <input  onChange={e => setCategory(e.target.value)} value={category} className='px-3 py-2 border border-gray-600 w-full focus:outline-none focus:ring focus:ring-blue-300 rounded-md' type="text" name='category'placeholder='category' required></input>
        </div>  
        <div>
        <label>Price</label> 
          <input  onChange={e => setPrice(e.target.value)} value={price} className='px-3 py-2 border border-gray-600 w-full focus:outline-none focus:ring focus:ring-blue-300 rounded-md' type="number" name='price'placeholder='price' required></input>
        </div> 
        <div>
        <label>Rating</label> 
          <input  onChange={e => setRating(e.target.value)} value={rating} className='px-3 py-2 border  border-gray-600 w-full focus:outline-none focus:ring focus:ring-blue-300 rounded-md' type="number" name='rating'placeholder='rating' required></input>
        </div>
        </div>
        <div className='text-center'>  
          <button onClick={handleClick} className="bg-red-500  m-10 font-bold py-2 px-4 rounded-lg hover:bg-green-500">Add Products</button>  
          <ToastContainer />
        </div>
        </div>  
      </form> 
    </div>
  )
}

export default AddProduct