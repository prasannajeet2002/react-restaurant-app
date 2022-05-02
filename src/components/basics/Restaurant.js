import React, {useState} from 'react'
import './Restaurant.css'
import Menu from './menuApi'
import MenuCard from './menuCard'
import Navbar from './Navbar'

const uniqueCategory = [
    ...new Set(
        Menu.map((currentElement)=>{
            return currentElement.category
        })
    ),
    "All",
]

// console.log(uniqueCategory)

function Restaurant() {
    const [menuData , setMenuData] = useState(Menu)
    const [menuCategory , setMenuCategory] = useState(uniqueCategory)

    const filterItems = (category) => {
        
       if (category === "All") {
           setMenuData(Menu)
           return
       }

        const updatedItems = Menu.filter((currElement)=>{
            return currElement.category === category;
        })
        setMenuData(updatedItems)
    }
  return (
    <>
    <div className="container">
    <Navbar filterItems ={filterItems} menuCategory={menuCategory}/>
    <MenuCard menuData={menuData}/>
    </div>
    </>
  )
}

export default Restaurant