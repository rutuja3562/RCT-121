import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

export const Users = () => {
  const [data, setData] = useState([]);
  const [state] = useContext(AuthContext);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    axios({
      method: "get",
      url: "https://reqres.in/api/users",
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
      {state.token && <h3>Token:{state.token}</h3>}
      {data.map((e) => {
        return (
          <div style={{ marginBottom: "3rem" }}>
            <p>
              {e.first_name} {e.last_name}
            </p>
            <Link to={`/users/${e.id}`}>More</Link>
          </div>
        );
      })}
    </div>
  );
};
