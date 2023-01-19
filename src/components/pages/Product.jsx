import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { getItems, addItem } from "../../helper/helpers";
const Product = ()=> {
    const [items, setItems] = useState([])
    useEffect(() => {
        getItems("http://localhost:3001/products")
        .then((data)=> setItems(data))
    }, [])

    const [formData,setFormData] = useState({
        product: "",
        price: 0,
        image: "https://via.placeholder.com/150x100"
    })
    const handleSubmit = (event)=>{
        event.preventDefault();
        postItem(formData)
    }

    const postItem = (daisy)=> {
        fetch("http://localhost:3001/products/", 
        {
            method: "POST",
            headers: {
               "Content-Type": "application/json", 
               "Accept": "application/json",
            },
            body: JSON.stringify(daisy)
        })
        .then((response)=> response.json())
        .then(data =>{
            setItems([...items, data])
        })
    }

    const handleOnChange = (event)=> {
 
        setFormData({
            ...formData,
            [event.target.name] : event.target.value
        })
    }


   

    return(
        <div className="m-4">
            <form className="row" onSubmit={handleSubmit}>
                    <div className="col-4">
                        <input name="product" onChange={handleOnChange} value={formData.product}  className="form-control form-control-sm" type="text" placeholder="item name" aria-label=".form-control-sm example"/>
                    </div>
                    <div className="col-4">
                        <input name="price" onChange={handleOnChange} value={formData.price}  className="form-control form-control-sm" type="number" placeholder="Price" aria-label=".form-control-sm example"/>
                    </div>
                    <div className="col-4">
                        <button type="submit" className="btn btn-sm btn-primary">Add Item</button>
                    </div>
            </form>
            <div className="row p-4">
                {
                    items.map((item, index)=> {
                        return(
                            <div key={index} class="card col-sm-3 m-1 p-0" style={{width: "18rem;"}}>
                                <img src={item.image} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <p class="card-text">Item Name: {item.product}</p>
                                    <p class="card-text">Item Price: {item.price}</p>
                                    {/* <a href={`/products/${item.id}`}>Learn More</a> */}
                                    <Link to={`/products/${item.id}`}>Learn More</Link>
                                </div>
                            </div>
                        )
                    })
                }
                
            </div>
        </div>
    )
}

export default Product;