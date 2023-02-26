import React, { useState } from 'react'
import './menu.css'

const Menu = ({ arr }) => {
  const [dish, setDish] = useState('')
  console.log(dish);

  return (
    <div className='Menu'>
      <section className='searchBarFeildSection'>
        <input className='searchBarFeild' type="text" onChange={(e) => setDish(e.target.value)} placeholder='Enter the dish' />
      </section>
      <section className='menuBarSection'>
      {arr.filter(singleObj => {
        if (dish == '') {
          return singleObj;
        } else if (singleObj.name.toLowerCase().includes(dish.toLowerCase())) {
          return singleObj;
        }
      }).map((singleObj) => {
        return <section key={singleObj.id} className="menuContainer">
          <section className="imageContainer">
            <img className='dishImage' src={singleObj.image} alt='dish-image' />
          </section>
          <section className="textContainer">
            <section className="subHeading">
              <h4 className="dishName">{singleObj.name}</h4>
              <h5 className="dishCost">{singleObj.cost}</h5>
            </section>
            <hr />
            <section className="dishInfoContainer">
              <p className="dishInfo">{singleObj.info}</p>
            </section>
          </section>
        </section>
      })}
      </section>
    </div>
  )
}

export default Menu
