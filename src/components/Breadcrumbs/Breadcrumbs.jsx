import React from "react";
import { Link } from "react-router-dom";

function Breadcrumbs({ pageName }) {
  return (
    <>
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-xl font-display font-semibold capitalize opacity-80 text-purple-dark">
          {pageName}
        </h2>
        <nav>
          <ol className="flex items-center gap-2">
            <li className="font-display text-purple-dark font-medium opacity-80">
              <Link to="/dashboard"> Dashboard / </Link>
            </li>
            <li className="font-display text-purple-4 font-medium opacity-80">
              {pageName}
            </li>
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
