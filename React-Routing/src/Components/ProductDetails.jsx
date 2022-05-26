import axios from 'axios';
import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router'

export const ProductDetails = () => {
      const [data, setData] = useState([]);
    const {id}=useParams();
    useEffect(() => {
      fetchData();
    }, []);
    const fetchData = async () => {
      axios({
        method: "get",
        url: `http://localhost:8080/products/${id}`,
      })
        .then((res) => {
          setData(res.data);
        })
        .catch((e) => {
          console.log(e);
        });
    };
  return (
    <div style={{margin:"20px"}}>
    <img width="100px"src={data.url} alt="icon" />
      <p>Title : {data.name}</p>
      <p>Price : {data.price}</p>
    </div>
  );
}
