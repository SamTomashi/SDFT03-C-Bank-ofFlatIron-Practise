const Card = ({item, handleOnClick})=> {
    return(
        <div onClick={()=> handleOnClick(item.id)} className="card col-2 p-0 m-2">
                <img src={item.image} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{item.product}</h5>
                    <p className="card-text">{item.price}</p>
                    <a href={`/products/${item.id}`} className="btn btn-sm text-small btn-primary btn-block m-2">View Item Details</a>
                    <button className="btn btn-sm text-small btn-danger btn-block">Delete Items</button>

                </div>
        </div>
    )
}

export default Card