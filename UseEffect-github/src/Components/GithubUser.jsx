import axios from "axios";
import React, { useEffect, useState } from "react";
import { Pagination } from "./Pagination";
import { SearchUser } from "./SearchUser";
import { Usercard } from "./Usercard";

export const GithubUser = () => {
  const [user, setUser] = useState([]);
  const [loading, setLoding] = useState(true);
  const [err, setErr] = useState(false);
  const [query, setQuery] = useState("masai");
  const [page, setPage] = useState(1);
  useEffect(() => {
    GetUser(query,page);
  }, [query,page]);

  const GetUser = (q = "albseb",page=1) => {
    axios(" https://api.github.com/search/users", {
      method: "GET",
      params: {
        q,
        per_page:5,
        page
      },
    })
      .then((res) => {
        setUser(res.data);
        setLoding(false);
        setErr(false);
      })
      .catch((err) => {
        setErr(true);
        setLoding(false);
        console.log(err);
      });
  };
  // console.log(user.items)

  const handleSearch = (query) => setQuery(query);
  // console.log(query);
  return (
    <div>
      <h2>Github Users</h2>
      {loading && <div>Loading...</div>}
      {console.log(user.items)}
      <SearchUser handleSearch={handleSearch} />

      {user?.items?.map((e) => {
        return <Usercard key={e.id} {...e} />;
      })}
      <div>
        <button disabled={page==1}
          onClick={() => {
            setPage(page - 1);
          }}
        >
          Prev
        </button>
        <button
          onClick={() => {
            setPage(page + 1);
          }}
        >
          Next
        </button>
      </div>
      <div>
      <Pagination currentpage={page} lastpage={9}page={page} handleChange={setPage}/>
      </div>
      
    </div>
  );
};
