import { useParams } from "react-router-dom";

const ItemDetails = ()=> {
    const id = useParams().id
    return(
            <div>
                The item id is {id}
            </div>
    )
}

export default ItemDetails