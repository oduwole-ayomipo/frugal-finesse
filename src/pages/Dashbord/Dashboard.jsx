import React from "react";

function Dashboard({ formData }) {
  const renderFormData = () => {
    return Object.keys(formData).map((data) => (
      <div key={data} className="mb-2">
        {formData[data]}
      </div>
    ));
  };
  return (
    <div className="flex">
      <div className="m-24 mx-auto font-display text-lg font-semibold">
        {renderFormData()}
        Welcome to something that will eventually look like a dashboard!!!
      </div>
    </div>
  );
}

export default Dashboard;
