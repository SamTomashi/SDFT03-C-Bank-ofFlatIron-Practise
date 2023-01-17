const Table = ({list})=> {
    
    return (
        <>
            <table className="text-center table table-striped table-hover">
                <thead>
                    <tr className="text-uppercase">
                        <th>Item</th>
                        <th>Qty</th>
                        <th>Total Cost</th>
                        {/* <th></th> */}
                    </tr>
                </thead>
                <tbody>
                    {
                        list.map((item, index)=>{
                            return(
                                <tr key={index} >
                                    <td>{item.item}</td>
                                    <td>{item.qty}</td>
                                    {/* <td>{item.price * item.qty}</td> */}
                                    <td>
                                    Ksh.{item.price * item.qty}
                                        <button className="float-md-end btn btn-sm btn-outline-danger px-3">
                                            X
                                        </button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <div>
                <button className="text-uppercase btn btn-sm btn-outline-warning">Purchase</button>
            </div>
        </>
    )
}

export default Table;