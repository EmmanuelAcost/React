import React from "react";
import Header from "../components/header/header";

function FullLayout(props) {
  return (
    <div>
      <Header></Header>
      <main className="h-100">
        <div className="app-content">{props.children}</div>
      </main>
    </div>
  );
}

export default FullLayout;
