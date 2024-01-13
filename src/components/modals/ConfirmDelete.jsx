import React from "react";
import { Dialog } from "@headlessui/react";
import FilledBtn from "../button/FilledBtn";
import { ToastContainer } from "react-toastify";

function ConfirmDelete({
  deleteWarning,
  setDeleteWarning,
  handleDelete,
  loading,
}) {
  return (
    <>
      <Dialog
        className="bg-purple-light relative z-50"
        open={deleteWarning}
        onClose={() => setDeleteWarning(false)}
      >
        <div
          className="fixed inset-0 bg-black/30 bg-opacity-75 transition-opacity"
          aria-hidden="true"
        />
        <div className="fixed inset-0 z-9999 w-screen overflow-y-auto">
          <Dialog.Panel className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div className="rounded-sm border border-stroke bg-white shadow-default">
                <div className=" flex w-full justify-between items-center border-b border-stroke py-4 px-6.5 ">
                  <h3 className="font-semibold text-lg text-meta-1 font-display">
                    Confirm delete
                  </h3>
                  <span
                    aria-roledescription="button"
                    onClick={() => setDeleteWarning(false)}
                    className="p-2 cursor-pointer"
                  >
                    <svg
                      aria-roledescription="button"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      opacity="0.5"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18 18 6M6 6l12 12"
                      />
                    </svg>
                  </span>
                </div>

                <div className="px-6.5 py-3">
                  <div className="mb-4.5 justify-center flex flex-row gap-3 items-start">
                    <span className="p-1 text-meta-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
                        />
                      </svg>
                    </span>
                    <p className="mb-2.5 opacity-80 block font-medium text-purple-dark font-display">
                      Are you sure you want to delete this transaction? This
                      action cannot be undone.
                    </p>
                  </div>

                  <FilledBtn
                    disabled={loading}
                    buttonText={loading ? "Proceeding" : "Proceed"}
                    type={"button"}
                    onClick={handleDelete}
                  />
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>

      <ToastContainer />
    </>
  );
}

export default ConfirmDelete;
