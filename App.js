import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div>
      <div></div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      {/* // Header 
       // Body 
       // Footer  */}
      <h1>hello world</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
