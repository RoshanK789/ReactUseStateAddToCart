import React, { useState } from 'react';

const Main = ({Value,SetValue,count,setcount}) => {
    const [carts,setcarts]=useState([]);
   
 
    const add=(item)=>
     {
         setcarts([...carts,item])
         setcount(count+1);
     }
     const remove=(item)=>
         {
             const newCart = carts.filter((i) => i.id !== item.id);
             setcarts(newCart);
             setcount(count-1);
         }
    return (
        <div>
            <section className="py-5">
                <div className="container px-4 px-lg-5 mt-5"> 
                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                        {Value.map((element,index)=>
                        {
                            return(
                            <div key={element.id}>
                                <div className="col mb-5">
                                    <div className="card h-100">
                                        <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..."/>
                                        <div className="card-body p-4">
                                            <div className="text-center">
                                            <h5 className="fw-bolder">{element.pname}</h5>
                                            $40.00 - $80.00
                                        </div>
                                    </div>
                                <div className=" mx-auto card-footer p-4 pt-0 border-top-0 bg-transparent">
                            
                            <button  id="btn" className='p-2' onClick={()=>
                        {
                            if(carts.some((i)=>i.id===element.id))
                                {
                                    remove(element)
                                }
                                else{
                                    console.log("hi");
                                    add(element);
                                }
                        }
                    }>{carts.some((i)=>i.id===element.id)?"Remove From Cart":"Add To Cart"}</button>
                            </div>
                            </div>
                            </div>
                            </div>
                            
                        )
                    })}
                </div>
            </div>
        </section>
        </div>
    );
};

export default Main;[]