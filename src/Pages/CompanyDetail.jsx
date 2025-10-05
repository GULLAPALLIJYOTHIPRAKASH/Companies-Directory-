import { useNavigate, useParams } from "react-router-dom";
import {companies} from "../../db.json"; // Your JSON file

function CompanyDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const company = companies.find(c => c.id === parseInt(id));

  if (!company) {
    return <div  onClick={() => navigate("/")} className="p-6 text-center text-red-500">Company not found   ← Back</div>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white rounded-2xl shadow-xl max-w-4xl w-full p-6 md:flex md:gap-6">
        {/* Company Logo */}
        {company.logo && (
          <div className="flex-shrink-0 mb-4 md:mb-0 md:w-1/3 flex justify-center items-center">
            <img
              src={company.logo}
              alt={company.name}
              className="rounded-xl object-cover w-48 h-48 md:w-56 md:h-56 shadow-md"
            />
          </div>
        )}

        {/* Company Info */}
        <div className="md:w-2/3">
          <h1 className="text-3xl font-bold mb-4 text-gray-800">{company.name}</h1>
          <p className="text-gray-600 mb-2"><strong>Industry:</strong> {company.industry}</p>
          <p className="text-gray-600 mb-2"><strong>Location:</strong> {company.location}</p>
          <p className="text-gray-600 mb-2"><strong>Employees:</strong> {company.employees}</p>
          <p className="text-gray-600 mb-2"><strong>Founder:</strong> {company.founder}</p>
          <p className="text-gray-600 mb-2"><strong>CEO:</strong> {company.ceo}</p>
          <p className="text-gray-600 mb-2"><strong>Year Founded:</strong> {company.year_founded}</p>
          <p className="text-gray-600 mb-2"><strong>About:</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis nulla cumque dolor quod consectetur! Praesentium veritatis facilis quod, et mollitia dolore. Ipsum tempora sequi vitae aspernatur ex ipsa voluptatem recusandae.</p>

          {/* Back Button */}
          <button
            onClick={() => navigate("/")}
            className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md transition duration-300"
          >
            ← Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default CompanyDetail;

