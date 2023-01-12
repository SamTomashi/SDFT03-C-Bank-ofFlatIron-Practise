import React, {useState} from "react"

const Form = ({list, setList})=>{
    const [formData, setFormData] = useState({
        date:"",
        price:"",
        qty:"",
        item:""
    })

    const handleSubmit = (event)=> {
        event.preventDefault()
        
       setList(
        [
            ...list,
            formData
        ]
       )
    }

    const handleOnChange = (event) => {
        formData[event.target.name] = event.target.value
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    return (
        <form className="row p-3" onSubmit={handleSubmit}>
            <div className="col-3">
                <input name="date" onChange={handleOnChange} value={formData.date} className="form-control form-control-sm" type="date"  placeholder="date" aria-label=".form-control-sm example"/>
            </div>
            <div className="col-3">
                <input name="item" onChange={handleOnChange} value={formData.item} className="form-control form-control-sm" type="text" placeholder="Item" aria-label=".form-control-sm example"/>
            </div>
            <div className="col-3">
                <input name="qty" onChange={handleOnChange} value={formData.qty} className="form-control form-control-sm" type="number" placeholder="QTY" aria-label=".form-control-sm example"/>
            </div>
            <div className="col-3">
                <input name="price" onChange={handleOnChange} value={formData.price} className="form-control form-control-sm" type="number" placeholder="Price" aria-label=".form-control-sm example"/>
            </div>
            <div className="col-3 mx-auto p-3">
                <button className="btn btn-sm btn-success mx-auto" type="submit">Submit</button>
            </div>
        </form>
    )
}

export default Form