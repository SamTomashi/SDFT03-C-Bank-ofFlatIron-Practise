import React, {useState} from "react"

const Form = ({list, setList})=>{
    const [formData, setFormData] = useState({
        price: 0.00,
        qty: 0,
        item: ""
    })

    const handleSubmit = (event)=> {
        event.preventDefault()
        setList([...list,formData])
    }

    const handleOnChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    return (
        <form className="row p-3 m-4" onSubmit={handleSubmit}>
            <div className="col-3">
                <select name="item" onChange={handleOnChange} value={formData.item} className="form-select form-control form-control-sm" aria-label="Default select example">
                    <option selected>select Item</option>
                    <option value="Item 1">item 1</option>
                    <option value="Item 2">item 2</option>
                    <option value="Item 3">item 3</option>
                </select>
            </div>
            <div className="col-3">
                <input name="price" onChange={handleOnChange} value={formData.price} className="form-control form-control-sm" type="number" placeholder="Price" aria-label=".form-control-sm example" readOnly/>
            </div>
            <div className="col-3">
                <input name="qty" onChange={handleOnChange} value={formData.qty} className="form-control form-control-sm" type="number" placeholder="QTY" aria-label=".form-control-sm example"/>
            </div>
           
            <div className="col-3">
                <button className="btn btn-sm btn-success btn-block text-uppercase" type="submit">Add To Cart</button>
            </div>
        </form>
    )
}

export default Form