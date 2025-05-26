import { Routes, Route } from "react-router-dom";
import { PageOne, PageTwo } from "./Page";

function BrowserRoute() {
  console.log("BrowserRoute component rendered");
  console.log("BrowserRoute component props:", {});
  
  return (
    <Routes>
      <Route path="*" element={<PageOne />} />
      <Route path="two" element={<PageTwo />} />
    </Routes>
  );
}

export default BrowserRoute;
