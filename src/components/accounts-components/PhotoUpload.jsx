import React, { useContext, useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { AuthContext } from "../../context/AuthContext";
function PhotoUpload({ openUploadModal }) {
  const { currentUser } = useContext(AuthContext);
  const [avatar, setAvatar] = useState("");

  useEffect(() => {
    const fetchAvatar = async () => {
      const docSnap = await getDoc(doc(db, "users", currentUser.uid));

      if (docSnap.exists()) {
        const avatarURL = docSnap.data().avatar;
        setAvatar(avatarURL);
      }
    };

    fetchAvatar();
  }, [currentUser]);
  return (
    <>
      <div className="col-span-5 xl:col-span-2">
        <div className="rounded-sm border border-stroke bg-white shadow-default">
          <div className="border-b border-stroke py-4 px-7">
            <h3 className="font-medium text-purple-dark font-display">
              Profile Photo
            </h3>
          </div>
          <div className="p-7">
            <div className="mb-7 flex items-center gap-3">
              <div className="h-14 w-14 rounded-full">
                <img
                  src={
                    !avatar ? "https://avatar.iran.liara.run/public" : avatar
                  }
                  alt="Avatar"
                  className="h-14 w-14"
                />
              </div>
              <div>
                <span className="mb-2 text-black font-display">
                  Edit your photo
                </span>
              </div>
            </div>

            <div
              role="button"
              aria-roledescription="button"
              onClick={openUploadModal}
              className="relative block w-full cursor-pointer appearance-none rounded border border-purple-6 bg-[#F9F6FF] border-dashed border-primary py-4 px-4"
            >
              <div className="flex flex-col items-center justify-center space-y-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-stroke bg-white">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1.99967 9.33337C2.36786 9.33337 2.66634 9.63185 2.66634 10V12.6667C2.66634 12.8435 2.73658 13.0131 2.8616 13.1381C2.98663 13.2631 3.1562 13.3334 3.33301 13.3334H12.6663C12.8431 13.3334 13.0127 13.2631 13.1377 13.1381C13.2628 13.0131 13.333 12.8435 13.333 12.6667V10C13.333 9.63185 13.6315 9.33337 13.9997 9.33337C14.3679 9.33337 14.6663 9.63185 14.6663 10V12.6667C14.6663 13.1971 14.4556 13.7058 14.0806 14.0809C13.7055 14.456 13.1968 14.6667 12.6663 14.6667H3.33301C2.80257 14.6667 2.29387 14.456 1.91879 14.0809C1.54372 13.7058 1.33301 13.1971 1.33301 12.6667V10C1.33301 9.63185 1.63148 9.33337 1.99967 9.33337Z"
                      fill="#7151A9"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7.5286 1.52864C7.78894 1.26829 8.21106 1.26829 8.4714 1.52864L11.8047 4.86197C12.0651 5.12232 12.0651 5.54443 11.8047 5.80478C11.5444 6.06513 11.1223 6.06513 10.8619 5.80478L8 2.94285L5.13807 5.80478C4.87772 6.06513 4.45561 6.06513 4.19526 5.80478C3.93491 5.54443 3.93491 5.12232 4.19526 4.86197L7.5286 1.52864Z"
                      fill="#7151A9"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7.99967 1.33337C8.36786 1.33337 8.66634 1.63185 8.66634 2.00004V10C8.66634 10.3682 8.36786 10.6667 7.99967 10.6667C7.63148 10.6667 7.33301 10.3682 7.33301 10V2.00004C7.33301 1.63185 7.63148 1.33337 7.99967 1.33337Z"
                      fill="#7151A9"
                    />
                  </svg>
                </span>
                <p className="font-display">
                  <span className="text-purple-6">Click to upload</span> or edit
                  your avatar
                </p>
                <p className="mt-1.5 font-display">SVG, PNG, JPG or GIF</p>
                <p className="font-display">(max, 150 X 150px)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PhotoUpload;
