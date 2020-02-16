import * as React from "react";
import {render} from "react-dom";

import {Header} from "components/Header";

const App = () => {
  return <div><Header city="Arusha"/></div>;
};

render(<App />, document.querySelector("#root"));
