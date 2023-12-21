import React from "react";
import { Link } from "react-router-dom";

function Breadcrumbs({ pageName }) {
  return (
    <>
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <nav>
          <ol className="flex items-center gap-2">
            <li>
              <Link to="/"> Home / </Link>
              <span>Dashboard / </span>
            </li>
            <li className="text-meta-1">{pageName}</li>
          </ol>
        </nav>
      </div>
    </>
  );
}

/* once user auth is set; refactor line 10-13 to
    <li>
        <Link to="/frugal-finesse/dashboard"> Dashboard / </Link>
    </li>
*/

export default Breadcrumbs;
