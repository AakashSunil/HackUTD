export async function userDetails(val) {
    const returnVal = await fetch(`http://api.nessieisreal.com/enterprise/accounts/${val}?key=3a077c40b9c82b45d4233610d4275422`).then(res=>{
            return res.json()
        }).then(data=>{
            return data
        })
    return returnVal
}