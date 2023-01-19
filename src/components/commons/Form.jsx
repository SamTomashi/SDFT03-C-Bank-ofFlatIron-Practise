import React, {useState, useEffect} from "react"

const Form = ({list, setList})=>{
    const [formData, setFormData] = useState({
        price: 0.00,
        qty: 0,
        item: ""
    })

    const [items, setItems] = useState([])

    useEffect(() => {
        fetch("http://localhost:3001/products/")
        .then((response)=> response.json())
        .then((data)=> {
            setItems(data)
        })
    }, [])

    const handleSubmit = (event)=> {
        event.preventDefault()
        setList([...list,formData])
    }

    const handleOnChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })

        if(event.target.name === "item"){
            setFormData(
                {
                    ...formData,
                    [event.target.name]: event.target.value,
                    price: getItem(event.target.value).price
                }
            )
        }
    }

    const getItem = (product)=> {
        return items.find(item => item.product === product)
    }


    const displayItems = ()=> {
        return items.map((item, index)=> {
            return <option key={index} value={item.product}>{item.product}</option>
        })
    }

    return (
        <form className="row p-3 m-4" onSubmit={handleSubmit}>
            <div className="col-3">
                <select name="item" onChange={handleOnChange} value={formData.item} className="form-select form-control form-control-sm" aria-label="Default select example">
                    <option defaultValue="">Select an item</option>
                    {displayItems()}
                </select>
            </div>
            <div className="col-3">
                <input name="price" onChange={handleOnChange} value={formData.price} className="form-control form-control-sm" type="number" placeholder="Price" aria-label=".form-control-sm example" readOnly/>
            </div>
            <div className="col-3">
                <input name="qty" onChange={handleOnChange} value={formData.qty} className="form-control form-control-sm" type="number" placeholder="QTY" aria-label=".form-control-sm example"/>
            </div>
           
            <div className="col-3">
                <button className="btn btn-sm btn-outline-success btn-block text-uppercase" type="submit">Add To Cart</button>
            </div>
        </form>
    )
}

export default Form