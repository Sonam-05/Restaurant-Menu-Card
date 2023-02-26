import React, { useEffect, useState } from 'react'
import Category from './components/Category';
import Header from './components/Header'
import Menu from './components/Menu';
import TypeCategories from './components/TypeCategories';
import data from './Data'

const App = () => {
  
  const [arr, setArr] = useState(data);
  const [type, setType] = useState('Veg');
  const [val, setVal] = useState('All')

  const handleChange = (e) => {
    setType(e.target.value);
    // console.log(e.target.value);
  }

  useEffect(() => {
    const allSpan = document.querySelectorAll('SPAN');
    allSpan[0].style.backgroundColor = 'grey'
    // console.log(type)
    filterFunc('All', 'Veg')
  },[]);
  
  const filterFunc = (value, type) => {
    setVal(value)
    const allSpan = document.querySelectorAll('SPAN')
    for(let i = 0; i<allSpan.length; i++){
      allSpan[i].style.backgroundColor = 'aliceblue'
    }
    const spanId = document.querySelector(`#${value}`);
    spanId.style.backgroundColor = 'grey';
    if(value == 'All' && type == 'All Three'){
      setArr(data)
    }else if(value == 'All' && type != 'All Three'){ 
      const arr1 = data.filter((singleObj) => {
        if(singleObj.type == type)
        return singleObj
      })
      setArr([...arr1]);
    }else if(type == 'All Three' && value != 'All'){  
      const arr1 = data.filter((singleObj) => {
        if(singleObj.category == value)
        return singleObj
      })
      setArr([...arr1]);
    }else{
      const arr2 = data.filter((singleObj) => {
        if(singleObj.category == value && singleObj.type == type)
        return singleObj
      })
      setArr([...arr2]);
    }
  }

  const filterByCategory = (type, value) => {
    // console.log(value);
    // console.log(type)
    const allSpan = document.querySelectorAll('SPAN')
    for(let i = 0; i<allSpan.length; i++){
      allSpan[i].style.backgroundColor = 'aliceblue'
    }
    const spanId = document.querySelector(`#${value}`);
    spanId.style.backgroundColor = 'grey';
    if(value == 'All' && type == 'All Three'){
      setArr(data)
    }else if(value == 'All' && type != 'All Three'){  
      const arr1 = data.filter((singleObj) => {
        if(singleObj.type == type)
        return singleObj
      })
      setArr([...arr1]);
    }else if(type == 'All Three' && value != 'All'){  
      const arr1 = data.filter((singleObj) => {
        if(singleObj.category == value)
        return singleObj
      })
      setArr([...arr1]);
    }else{
      const arr2 = data.filter((singleObj) => {
        if(singleObj.category == value && singleObj.type == type)
        return singleObj
      })
      setArr([...arr2]);
    }
  }

  return (
    <div className='App'>
      <Header />
      <Category type={type} filterFunc={filterFunc}/>
      <TypeCategories filterByCategory={filterByCategory} type={type} value={val} handleChange={handleChange} />
      <Menu arr={arr}/>
    </div>
  )
}

export default App
