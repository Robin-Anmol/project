import { HiMenuAlt3, Icons, Images } from "@/utils";
import Image from "next/image";
import React, { SetStateAction } from "react";
interface NavbarProps {
  open?: boolean;
  setOpen?: React.Dispatch<SetStateAction<boolean>> | undefined;
  mobile?: boolean;
  setMobile?: React.Dispatch<SetStateAction<boolean>> | undefined;
}
const Navbar: React.FC<NavbarProps> = ({
  open,
  setOpen,
  mobile,
  setMobile,
}) => {
  return (
    <div className="w-full relative flex items-center  justify-between border-borderColor border-b px-9 py-[1.25rem]  ">
      {/* search bar  */}

      <div className="flex-2/4 flex relative  h-10 gap-6    ">
        {!open && (
          <Image
            width={24}
            height={24}
            className="cursor-pointer rotate-180"
            src={Icons.ARROW_BACK}
            alt="ARROW_BACK"
            onClick={() => setOpen(true)}
          />
        )}
        {!mobile && (
          <HiMenuAlt3
            className="cursor-pointer lg:hidden rotate-180"
            onClick={() => setMobile(true)}
          />
        )}

        <div className="relative hidden lg:flex">
          <input
            type="text"
            placeholder="Search for anything..."
            className="w-[100%] outline-none border-none text-sm  bg-blubBgColor placeholder:text-Typography rounded-md px-16   "
          />
          <Image
            className=" absolute w-6 h-6 left-5  translate-y-[30%]  "
            src={Icons.SEARCH_ICON}
            alt="search icon"
          />
        </div>
      </div>
      {/* right container  */}
      <div className="flex items-center   gap-10  ">
        {/* 3 three  container*/}
        <div className="flex gap-5 ">
          <Image
            src={Icons.SEARCH_ICON}
            className=" w-6 h-6 lg:hidden"
            alt="calendar icon"
          />
          <Image
            src={Icons.CALENDAR_ICON}
            className="w-6 h-6"
            alt="calendar icon"
          />
          <Image
            src={Icons.MESSAGES_QUESTION}
            className="w-6 h-6"
            alt="message question icon "
          />
          <div className="relative ">
            <Image
              src={Icons.NOTIFICATION_ICON}
              className="w-6 h-6"
              alt="notification icon "
            />
            <span className="w-1.5 h-1.5 absolute top-0 right-1 rounded-full bg-redTagColor"></span>
          </div>
        </div>
        {/* profile container */}

        <div className="flex items-center gap-6 ">
          {/* name ,address  */}

          <div className="flex flex-col items-end ">
            <span className="text-Heading text-md font-medium">
              Anima Agrawal
            </span>
            <span className="text-Typography text-sm">U.P, India</span>
          </div>
          <div className="flex gap-3 items-center ">
            <Image src={Images.GIRL1_IMAGE} className="" alt="Avatar_images" />
            <Image
              src={Icons.ARROW_DOWN}
              className=""
              alt="ARROW_DOWN_images"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
