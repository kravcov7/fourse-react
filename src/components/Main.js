import React from "react";
import Category from "./Category";
import General from "./General";
import Favorite from "./Favorite";

function Main() {
  return(
    <main className="main">
      <Category />
      <General />
      <Favorite />      
    </main>
  )
}

export default Main;
