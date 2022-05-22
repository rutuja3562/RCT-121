import axios from "axios";
import React, { useEffect, useState } from "react";
import { FoodDetails } from "./FoodDetails";
import { Pagination } from "./Pagination";
export const Food = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [ratingorder, setRatingorder] = useState();
  const [costorder, setCostorder] = useState();
  const [filter, setFilter] = useState(0);
  useEffect(() => {
    fetchData({ page, ratingorder, costorder, filter });
  }, [page, ratingorder, costorder, filter]);

  const fetchData = async ({ page, ratingorder, costorder, filter }) => {
    axios({
      method: "get",
      params: {
        _page: page,
        _limit: 5,
        _sort: "cost,rating",
        _order: `${costorder},${ratingorder}`,
        rating_gte: filter,
      },
      url: "http://localhost:8080/foods",
    })
      .then((res) => {
        setData(res.data);
        setLoading(false);
        // console.log(res.data);
      })

      .catch((err) => {
        setError(true);
        console.log(err);
      });
  };
  console.log(data);

  //   const handlePageChange=(value)=>{
  //       setPage(page+value)
  //   }

  return (
    <div style={{  }}>
      <div style={{ border: "1px solid red" }}>
        <div>
          <button
            disabled={costorder == "desc"}
            onClick={() => setCostorder("desc")}
          >
            High to Low
          </button>

          <button
            disabled={costorder === "asc"}
            onClick={() => setCostorder("asc")}
          >
            Low to High
          </button>
        </div>

        <div>
          <button
            disabled={ratingorder == "desc"}
            onClick={() => setRatingorder("desc")}
          >
            High
          </button>
          <button
            disabled={ratingorder === "asc"}
            onClick={() => setRatingorder("asc")}
          >
            Low
          </button>
        </div>
        <div>
          <h4>Filter Ratings</h4>
          <button onClick={() => setFilter(4)}>4</button>
          <button onClick={() => setFilter(3)}>3</button>
          <button onClick={() => setFilter(2)}>2</button>
          <button onClick={() => setFilter(1)}>1</button>
          <button onClick={() => setFilter(0)}>0</button>
        </div>
      </div>
      <div>
        <div>
          <h1>Restraurent Details</h1>
          {data.map((e) => {
            return <FoodDetails key={e.id} {...e} />;
          })}
        </div>
        <div
          style={{
            width: "35%",
            border: "1px solid red",
            margin: "auto",
            textAlign: "end",
          }}
        >
          <Pagination
            handlePageChange={setPage}
            page={page}
            currentPage={page}
            lastPage={5}
          />
        </div>
      </div>
    </div>
  );
};
// <div>
//   <button disabled={costorder == "desc"} onClick={() => setCostorder("desc")}>
//     High to Low
//   </button>
//   <button disabled={costorder === "asc"} onClick={() => setCostorder("asc")}>
//     Low to High
//   </button>
// </div>;
