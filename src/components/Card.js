import Image from "next/image";

const FileCard = ({ data }) => {
  document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
  });
  const handleClick = (url) => {
    window.open(url, "_blank");
  };
  return (
    <div className=" p-5  grid grid-cols-5 gap-3 ">
      {data
        .flatMap((file) =>
          file.owners.map((owner) => ({
            name: owner.displayName,
            photo: owner.photoLink,
            fileName: file.name,
            thumbNail: file.thumbnailLink,
            link: file.webViewLink,
            modifiedTime: file.modifiedTime,
          }))
        )
        .map((owner) => (
          <div className="max-w-xs  shadow-md rounded-lg overflow-hidden  bg-slate-200  p-1">
            <div className="p-2">
              <div className="flex items-center gap-1">
                <div className=" bg-red-600">
                  <svg
                    fill="#eadcdc"
                    height="33px"
                    width="33px"
                    version="1.1"
                    id="Layer_1"
                    viewBox="0 0 455 455"
                    stroke="#eadcdc"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path d="M0,0v455h455V0H0z M259.405,80c17.949,0,32.5,14.551,32.5,32.5s-14.551,32.5-32.5,32.5s-32.5-14.551-32.5-32.5 S241.456,80,259.405,80z M375,375H80v-65.556l83.142-87.725l96.263,68.792l69.233-40.271L375,299.158V375z"></path>{" "}
                    </g>
                  </svg>
                </div>
                <span className="text-gray-800 font-medium overflow-hidden whitespace-nowrap overflow-ellipsis">
                  {owner.fileName}
                </span>
              </div>
            </div>
            {/* <button></button> */}
            <Image
              src={owner.thumbNail ? owner.thumbNail : "/noimage.jpg"}
              alt="File image"
              width={400}
              height={225}
              className="w-full h-48 object-cover"
              onClick={() => {
                handleClick(owner.link);
              }}
            />
            <div className="px-2 py-4">
              <div className="flex items-center gap-1">
                <div className=" rounded-full h-[20px] w-[20px] flex items-center justify-center overflow-hidden">
                  <Image
                    src={owner.photo}
                    alt="File image"
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-gray-500 text-base ">
                  {owner.modifiedTime}
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default FileCard;
