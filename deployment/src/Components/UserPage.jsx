import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

export const UserPage = () => {
  const { id } = useParams();
  // console.log("id",id)
  const [data, setData] = useState([]);

  // console.log(id)
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    console.log("data1", data);
    axios({
      method: "get",
      url: `https://reqres.in/api/users/${id}`,
    })
      .then((res) => {
        console.log(res.data.data);

        setData(res.data.data);
        console.log("data", data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <div>
      <img width="100px" src={data.avatar} alt="icon" />
      <p>{data.email}</p>
      <p>{data.first_name}</p>
      <p>{data.last_name}</p>
    </div>
  );
};
