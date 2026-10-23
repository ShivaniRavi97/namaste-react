  import React from "react";
  import ReactDOM from "react-dom/client";


  const heading = React.createElement("div", {}, "Hi Shivi!");

  const root = ReactDOM.createRoot(document.getElementById("root"));

  root.render(heading);
//   const heading = React.createElement("h1", {}, "Hello World");
//     // {} -  gives attributes -> {id""heading", xyz="abc"}
//     const rootbyId = document.getElementById("root");

//     const root = ReactDOM.createRoot(rootbyId);
//     root.render(heading);


    // heading is just an object, when root is rendering the heading that's when H1 tag is created and shown on the browser
    // React.createElement is not creating a html element it is only creating an object
    // ReactElement(Object) => HTML(Browser Understands)
    //createElement has 3 - name of the tag, attributes, children - 
    //children can be given directly or we can pass an array

