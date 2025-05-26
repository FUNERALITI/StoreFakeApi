import { Routes, Route } from "react-router-dom";
import { PageOne, PageTwo } from "./Page";

function BrowserRoute() {
  console.log("BrowserRoute component rendered");
  
  return (
    <Routes>
      <Route path="*" element={<PageOne />} />
      <Route path="two" element={<PageTwo />} />
    </Routes>
  );
}

export default BrowserRoute;
