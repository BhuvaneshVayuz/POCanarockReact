import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./App.css";


window.noticeBoardMF = {
    mount: (container, props) => {
        const root = createRoot(container);
        root.render(React.createElement(App, props));
        return () => root.unmount();
    }
};
