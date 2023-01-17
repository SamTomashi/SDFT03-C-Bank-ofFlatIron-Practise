const Table = ({list})=> {
    
    return (
        <>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Qty</th>
                        <th>Total Cost</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        list.map((item, index)=>{
                            return(
                                <tr key={index}>
                                    <td>{item.item}</td>
                                    <td>{item.qty}</td>
                                    <td>{item.price * item.qty}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <div>
                <button className="text-uppercase btn btn-sm btn-warning">Purchase</button>
            </div>
        </>
    )
}

export default Table;