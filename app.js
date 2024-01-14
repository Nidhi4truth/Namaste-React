import React from "react";
import ReactDOM  from "react-dom/client";
const TitleComponent = () => <h1 className="head">Namaste React Using JSX</h1>
//Component Composition
const HeadingComponent = () => {
    return(
    <div className="div">
       <TitleComponent/>
      <h1 className="headName">Heading Component</h1>;
    </div>);

}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);