import React, {useState} from "react";
const Product = ()=> {

    const [formData,setFormData] = useState({
        product: "",
        price: 0
    })
    const handleSubmit = (event)=>{
        event.preventDefault();
        fetch("http://localhost:3001/products/", 
        {
            method: "POST",
            headers: {
               "Content-Type": "application/json", 
               accept: "application/json",
            },
            body: JSON.stringify(formData)
        })
        .then((response)=> response.json())
        .then(data => data)
    }

    const handleOnChange = (event)=> {
 
        setFormData({
            ...formData,
            [event.target.name] : event.target.value
        })
    }

    return(
        <div className="">
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
        </div>
    )
}

export default Product;