import React from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "../../axios";

export default () => {
  const { id } = useParams();
  const history = useHistory();

  function deletePost() {
    axios.delete("/posts/" + id + ".json").then((response) => {
      history.replace("/posts");
    });
  }

  return (
    <div>
      <p>Are you sure, you want to delete this post?</p>
      <button onClick={deletePost}>Delete</button>
    </div>
  );
};
