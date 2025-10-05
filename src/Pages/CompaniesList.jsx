import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCompanies } from "../store/companiesSlice";
import CompanyCard from "../components/CompanyCard";
import Pagination from "../components/Pagination";

function CompanyList(){
    const dispatch = useDispatch();
  // access redux  initial  state
  const { data, status, error } = useSelector((state) => state.companies);
  // for search
  const [search, setSearch] = useState("");
  // for sort dropdown
  const [sort, setSort] = useState("name");
  // initial page state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;


  useEffect(() => {
    // calling fetch fn through redux
    dispatch(fetchCompanies());
  }, [dispatch]);

  // it will filter data through search and sort values  by (loc , name, industry)

const filtered = data
  .filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.location.toLowerCase().includes(search.toLowerCase()) ||
      c.industry.toLowerCase().includes(search.toLowerCase())
  )
  .sort((a, b) => a[sort].localeCompare(b[sort]));


  console.log(filtered);
  

  // calculate pages lenght from  filtered data
  const totalPages = Math.ceil(filtered.length / itemsPerPage);

  // display compaines based on page number
  const displayedCompanies = filtered.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );


  

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Companies Directory</h1>


      {/* search  */}
      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <input
          type="text"
          placeholder={"Search by "+ sort}
          className="border border-blue-500 focus:outline-blue-400 p-2 flex-1 rounded "
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="border border-blue-500 focus:outline-blue-400 p-2 rounded"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="name">Name</option>
          <option value="location">Location</option>
          <option value="industry">Industry</option>
        </select>
      </div>

      {/* loading or error or not found data */}
      {status === "loading" && <p className=" text-center text-blue-300 font-medium">Loading...</p>}
      {status === "failed" && <p className="text-center text-red-500 font-medium">{error}</p>}
      {status != "loading" &&  status != "failed"&&  displayedCompanies?.length === 0 && <p className="text-center text-blue-500 font-medium">No Data Found by {sort}.</p>}
  

      

      {/* card UI */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {displayedCompanies.map((company) => (
          <CompanyCard key={company.id} company={company} />
        ))}
      </div>

      {/* pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>

    

  );
}

export default CompanyList;