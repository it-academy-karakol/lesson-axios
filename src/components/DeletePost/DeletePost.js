import React from "react";
import { useHistory, useParams, useLocation } from "react-router-dom";
import axios from "../../axios";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default () => {
  const query = useQuery();
  const { id } = useParams();
  const history = useHistory();

  function deletePost() {
    axios.delete("/posts/" + id + ".json").then((response) => {
      history.replace("/posts");
    });
  }

  return (
    <div>
      <h1>{query.get("title")}</h1>
      <p>Are you sure, you want to delete this post?</p>
      <button onClick={deletePost}>Delete</button>
    </div>
  );
};
