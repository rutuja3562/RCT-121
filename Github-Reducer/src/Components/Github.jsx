import axios from "axios";
import { useEffect, useReducer } from "react";
const initState={
loading:true,
err:false,
data:null
}
const githubActions={
"fetch":"fetch",
"success":"success",
"failure":"failure",
}
const githubReducer =(state,action)=>{
switch (action.type) {
  case githubActions.fetch: {
    return ({
      ...state,
      loading: true,
      err: false,
      data: null,
    });
  }
  case githubActions.success: {
    console.log(action.payload)
    return ({
      ...state,
      loading: false,
      err: false,
      data: action.payload,
    });
  }
  case githubActions.err: {
    return ({
      loading: false,
      err: true,
     
    });
  }
  default :
  return state;
}
}
export const Github = () => {
const [{loading,err,data},dispatch]=useReducer(githubReducer,initState)
useEffect(()=>{
  dispatch({
    type:githubActions.fetch
  })
  axios({
    method: "get",
    // url: " https://api.github.com/search/users",
    params:{
      q:"masai"
    }
  }).then((res)=>{
    dispatch({
      type:githubActions.success,
      payload:res.data
    })
  }).catch((e)=>{
    dispatch({
      type: githubActions.failure
    });
  })
},[])  
return (
  <div>
    {loading && <div>Loading</div>}
    {err&& <div>Error</div>}
    {data?.items.map((e) => {
      return (
        <div key={e.id}>
          <img width="50px" src={e.avatar_url} alt="" />
          <p>{e.login}</p>
        </div>
      );
    })}
  </div>
);
};
