import React from 'react'
import './category.css'
import data from '../Data';

const Category = ({filterFunc, type}) => {
    
    const categories = new Set(data.map((singleObj) => singleObj.category));
    const categoriesArray = ['All', ...categories]

  return (
    <div className='Category'>
      {categoriesArray.map((value, index ) => {
        return <section   onClick={() => filterFunc(value, type)} key={value}  className="categoriesContainer">
            <span id={value} className="categorySpan">{value}</span>
        </section>
      })}
    </div>
  )
}

export default Category
