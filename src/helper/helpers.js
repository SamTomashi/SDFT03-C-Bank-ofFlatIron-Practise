export function getItems(URL){
    return fetch(`${URL}`)
    .then((response)=> response.json())
    .then(data => data)
}

export function addItem(URL){
    return fetch("", {})
}