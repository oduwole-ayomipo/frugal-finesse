import React, { useContext, useEffect, useState } from "react";
import { Dialog } from "@headlessui/react";
import FilledBtn from "../button/FilledBtn";
import { toast } from "react-toastify";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { db, storage } from "../../firebase";
import { doc, setDoc } from "firebase/firestore";
import { AuthContext } from "../../context/AuthContext";

function ImageUpdate({ uploadOpen, setUploadOpen }) {
  const [avatar, setAvatar] = useState(null);
  const [avatarUrl, setAvatarUrl] = useState(null);
  const [isAvatartUrl, setIsAvatarUrl] = useState(false);
  const [loading, setLoading] = useState(false);
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    if (avatar) {
      setAvatarUrl(URL.createObjectURL(avatar));
      setIsAvatarUrl(true);
    }
  }, [avatar]);

  const handleImageUpload = async () => {
    const avatarName = new Date().getTime() + avatar.name;
    const storageRef = ref(storage, avatarName);

    const uploadTask = uploadBytesResumable(storageRef, avatar);
    setIsAvatarUrl(true);
    setLoading(true);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
            break;
        }
      },
      (error) => {
        toast.error(error.code);
        console.log(error);
      },
      async () => {
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
        await setDoc(
          doc(db, "users", currentUser.uid),
          {
            avatar: downloadURL,
          },
          { merge: true }
        );

        setLoading(false);
        setUploadOpen(false);
        setAvatar(null);
        setIsAvatarUrl(false);
        setAvatarUrl(null);
        toast.success("Image Upload Successful");
      }
    );

    setIsAvatarUrl(false);
  };
  return (
    <>
      <Dialog
        className="relative z-50"
        open={uploadOpen}
        onClose={() => setUploadOpen(false)}
      >
        <div
          className="fixed inset-0 bg-black/30 bg-opacity-75 transition-opacity"
          aria-hidden="true"
        />
        <div className="fixed inset-0 z-9999 w-screen overflow-y-auto">
          <Dialog.Panel className="flex min-h-full w-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div className="rounded-sm border border-stroke w-full bg-white shadow-default">
                <div className=" flex w-full justify-between items-center border-b border-stroke py-4 px-6.5">
                  <label
                    className="font-semibold text-lg text-meta-1 font-display"
                    htmlFor="image-upload"
                  >
                    <span className="sr-only">Choose avatar</span>
                    <input
                      id="image-upload"
                      type="file"
                      onChange={(e) => setAvatar(e.target.files[0])}
                      accept="image/*"
                      className="block w-full outline-none text-sm file:mr-4 file:py-1 file:px-2 file:rounded-full file:border-0 file:text-xs"
                    />
                  </label>
                  <span
                    aria-roledescription="button"
                    onClick={() => {
                      setUploadOpen(false);
                      setAvatar(null);
                      setIsAvatarUrl(false);
                      setAvatarUrl(null);
                    }}
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
                  <div className=" mb-4.5 flex  justify-center items-center w-full h-60">
                    {avatarUrl ? (
                      <img
                        src={avatarUrl}
                        alt="Avatar"
                        className="h-60 aspect-square"
                      />
                    ) : (
                      <></>
                    )}
                  </div>
                  <FilledBtn
                    disabled={!isAvatartUrl}
                    buttonText={loading ? "Uploading" : "Upload"}
                    type={"button"}
                    onClick={handleImageUpload}
                  />
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
}

export default ImageUpdate;
