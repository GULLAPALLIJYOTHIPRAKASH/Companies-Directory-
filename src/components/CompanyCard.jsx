import React from "react";
import { useNavigate } from "react-router-dom";

function CompanyCard({ company }) {
  const navigate = useNavigate();
    
  return (
    <div       onClick={() => navigate(`/company/${company.id}`)}
 className=" cursor-pointer bg-white shadow-md rounded-lg p-4 flex flex-col md:flex-row items-center gap-4">
      <img src={company?.logo} alt={company?.name} className="w-16 h-16" />
      <div className="flex-1">
        <h2 className="font-bold text-lg">{company?.name}</h2>
        <p className="text-sm text-gray-500">{company?.industry} | {company?.location} </p>
        <p className="text-sm">CEO: {company?.ceo} | Employees: {company?.employees}</p>
      </div>
    </div>
  );
};

export default React.memo(CompanyCard);
