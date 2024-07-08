import React from 'react'
import "./Category.css"
const Category_item = ({item}) => {
  return (
    <div className='category-item border p-3 rounded-1 col d-flex d-sm-block flex-column  overflow-hidden align-items-center col-sm-6'>
        <div className='d-flex align-items-center gap-2 cate-header'>
            <i className={item.icon}></i>
            <strong>{item.head}</strong>
        </div>
        <p className='py-2'>{item.p}</p>
        <div className="category-btn text-center rounded-1 py-1 pointer">
           {item.btn}
        </div>
    </div>
  )
}

export default Category_item