const Table = ({list})=> {
    
    return (
        <table className="table table-striped table-hover">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Item</th>
                    <th>Qty</th>
                    <th>Fee</th>
                </tr>
            </thead>
            <tbody>
                {
                    list.map((item, index)=>{
                        return(
                            <tr key={index}>
                                <td>{item.date}</td>
                                <td>{item.item}</td>
                                <td>{item.qty}</td>
                                <td>{item.price}</td>
                            </tr>
                        )
                    })
                }
            </tbody>

        </table>
    )
}

export default Table;