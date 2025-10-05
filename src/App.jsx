import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CompaniesList from "./Pages/CompaniesList";
import CompanyDetail from "./Pages/CompanyDetail";


function App(){


  

  return (
    

  
      <Routes>
        <Route path="/" element={<CompaniesList />} />
        <Route path="/company/:id" element={<CompanyDetail />} />
        <Route path="*" element={<CompaniesList/>} />
      </Routes>
  );

}
export default App;




