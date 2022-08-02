import { Routes, Route } from "react-router-dom";
import Home from "../home/Home";
const Directory = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      {/* <Route path="/viewInvoice" element={}/> */}
    </Routes>
  );
};

export default Directory;
