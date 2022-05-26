import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import style from "./table.module.css"
export const Products = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    axios({
      method: "get",
      url: "http://localhost:8080/products",
    })
      .then((res) => {
        setData(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <div>
      <table className={style.table}>
        <thead style={{ border: "1px solid black" }}>
          <tr
            // style={{ border: "1px solid black", display: "flex", gap: "3rem" }}
          >
            <th>ProductName</th>
            <th>Cost</th>
            <th>More details</th>
          </tr>
        </thead>

        {data.map((e) => {
          return (
            <tbody key={e.id}>
              <tr>
                <td>
                  {e.name}
                </td>
                <td>{e.price}</td>
                <td>
                  <Link to={`/product/${e.id}`}>More Details</Link>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};
