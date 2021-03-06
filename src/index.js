import React from "react";
import ReactDOM from "react-dom";
import App from "./pages/Home";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faEdit,
  faVideo,
  faCog,
  faPhone,
  faInfoCircle,
  faChild,
  faAngleRight,
  faPlus,
  faPaperPlane,
  faFile
} from "@fortawesome/free-solid-svg-icons";
import "./index.css";

library.add(
  faEdit,
  faVideo,
  faCog,
  faPhone,
  faInfoCircle,
  faAngleRight,
  faChild,
  faPlus,
  faPaperPlane,
  faFile
);

let PortfoCanva = document.getElementById("app");

ReactDOM.render(<App />, PortfoCanva);
