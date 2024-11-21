import {useState, useEffect} from 'react';
export default function Home(){
    const [arrayData , setArrayData] = useState([]);


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((res) => setArrayData(res))
    },[])
    console.log(arrayData);

    return(
        <>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>USRName</th>
                    <th>Email</th>
                    <th>Addres</th>
                    <th>Addres1</th>
                    <th>website</th>
                </tr>
            </thead>
            <tbody>
                {
                    arrayData.map((val) => {
                    return(
                            <tr>
                                <td>{ val.name }</td>
                                <td>{ val.username}</td>
                                <td>{ val.email }</td>
                                
                                <td>{ val.address.street}</td>
                                <td>{ val.address.geo.lat}</td>
                                <td>{ val.website}</td>
                            </tr>

                          )
                    })
                }
            </tbody>
        </table>
        </>
    )
}