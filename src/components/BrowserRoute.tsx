import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PageOne, PageTwo } from './Page';

function BrowserRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<PageOne />} />
        <Route path="two" element={<PageTwo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default BrowserRoute