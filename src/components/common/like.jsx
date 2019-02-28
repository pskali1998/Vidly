import React from "react";
// adding awsomefont
import { library } from "@fortawesome/fontawesome-svg-core";
import { faIgloo } from "@fortawesome/free-solid-svg-icons";
library.add(faIgloo);
// Input: liked: boolean
//  Output: event this component is going to raise onClick
const Like = ({ liked, onClick }) => {
  let classes = "fa";
  if (!liked) classes += "r fa-heart";
  else classes += "s fa-heart";
  return (
    <i className={classes} onClick={onClick} style={{ cursor: "pointer" }} />
  );
};

export default Like;
