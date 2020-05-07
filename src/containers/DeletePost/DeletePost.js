import React, { useState } from "react";
import { useHistory, useParams, useLocation } from "react-router-dom";
import axios from "../../axios";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default withErrorHandler(() => {
  const query = useQuery();
  const { id } = useParams();
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  function deletePost() {
    setLoading(true);
    axios
      .delete("/posts/" + id + "")
      .then((response) => {
        history.replace("/posts");
      })
      .catch((error) => setLoading(false));
  }

  return (
    <div>
      <h1>{query.get("title")}</h1>
      <p>Are you sure, you want to delete this post?</p>
      <button onClick={deletePost} disabled={loading}>
        {loading ? "Loading..." : "Confirm"}
      </button>
    </div>
  );
}, axios);
