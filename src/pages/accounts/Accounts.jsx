import React from "react";

import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";
import PersonalInfo from "../../components/accounts-components/PersonalInfo";
import PhotoUpload from "./PhotoUpload";

function Accounts() {
  return (
    <>
      <div className="mx-auto max-w-270">
        <Breadcrumbs pageName="Accounts" />

        <div className="grid grid-cols-5 gap-8">
          <PersonalInfo />
          <PhotoUpload />
        </div>
      </div>
    </>
  );
}

export default Accounts;
