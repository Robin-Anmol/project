import React, { SetStateAction, useState } from "react";
import { HiMenuAlt3, Icons } from "@/utils";
import Image from "next/image";
interface SidebarProps {
  open?: boolean;
  setOpen?: React.Dispatch<SetStateAction<boolean>> | undefined;
  mobile?: boolean;
  setMobile?: React.Dispatch<SetStateAction<boolean>> | undefined;
}

// export const DesktopSidebar = ({ menu, setOpen, open, dropMenu = false }) => {
//   const [dropDown, setDropDown] = useState(false);
//   return (
//     <>
//       {dropMenu ? (
//         <div className="hidden  group lg:flex gap-2 flex-col duration-500 ">
//           <div
//             className={`hidden cursor-pointer  group lg:flex items-center   text-sm capitalize   gap-3.5 font-medium  p-2 pr-7  hover:duration-50    rounded-md ${
//               dropDown
//                 ? "bg-black text-white hover:bg-black shadow-lg"
//                 : " hover:bg-grey-100 text-white  bg-black"
//             }`}
//             onClick={() => {
//               setOpen(true);
//               setDropDown(!dropDown);
//             }}
//           >
//             <div>
//               {React.createElement(menu?.icon, {
//                 size: "20",
//               })}
//             </div>
//             <h2
//               className={`whitespace-pre hidden lg:inline-block   ${
//                 !open && "opacity-0 translate-x-28 overflow-hidden"
//               }`}
//             >
//               {menu?.name}
//             </h2>
//             {dropDown ? (
//               <>
//                 {open && (
//                   <RiArrowDropUpLine className="text-2xl  absolute self-center right-4 " />
//                 )}
//               </>
//             ) : (
//               <>
//                 {open && (
//                   <RiArrowDropDownLine className="text-2xl  absolute self-center right-4 " />
//                 )}
//               </>
//             )}
//           </div>
//           {open && dropDown && (
//             <>
//               {menu?.nestedMenu?.map((item, index) => {
//                 return (
//                   <NavLink
//                     to={item.link}
//                     key={index}
//                     className={({ isActive }) =>
//                       `  ${
//                         isActive
//                           ? "bg-primary-400 text-white hover:bg-primary-400 shadow-lg"
//                           : " hover:bg-grey-100 text-black hover:bg-slate-200"
//                       }  duration-300 flex items-center text-sm font-medium capitalize gap-2 self-end w-[90%] px-3 py-2  hover:bg-grey-100   rounded-md`
//                     }
//                   >
//                     <div>
//                       {React.createElement(item?.icon, {
//                         size: "20",
//                       })}
//                     </div>
//                     <div className="">{item.name}</div>
//                   </NavLink>
//                 );
//               })}
//             </>
//           )}
//         </div>
//       ) : (
//         <NavLink
//           to={menu?.link}
//           className={({ isActive }) =>
//             `hidden  group lg:flex items-center text-sm capitalize   gap-3.5 font-medium  p-2 pr-7  hover:duration-50   rounded-md ${
//               isActive
//                 ? "bg-primary-400 text-white hover:bg-primary-400 shadow-lg"
//                 : " hover:bg-grey-100 text-black hover:bg-slate-200"
//             }`
//           }
//           onClick={() => setOpen(true)}
//         >
//           <div>
//             {React.createElement(menu?.icon, {
//               size: "20",
//             })}
//           </div>
//           <h2
//             className={`whitespace-pre hidden lg:inline-block   ${
//               !open && "opacity-0 translate-x-28 overflow-hidden"
//             }`}
//           >
//             {menu?.name}
//           </h2>
//         </NavLink>
//       )}
//     </>
//   );
// };

// export const MobileSidebar = ({
//   menu,
//   mobile,
//   setMobile,
//   dropMenu = false,
// }) => {
//   const [dropDown, setDropDown] = useState(false);
//   return (
//     <>
//       {dropMenu ? (
//         <div className="  group lg:hidden flex gap-2 flex-col duration-500 ">
//           <div
//             className={` cursor-pointer  group lg:hidden flex items-center    capitalize   gap-3.5 font-medium  p-2 pr-7  hover:duration-50    rounded-md ${
//               dropDown
//                 ? "bg-black text-white hover:bg-black shadow-lg"
//                 : " hover:bg-grey-100 text-white  bg-black"
//             }`}
//             onClick={() => {
//               setDropDown(!dropDown);
//             }}
//           >
//             <div>
//               {React.createElement(menu?.icon, {
//                 size: "20",
//               })}
//             </div>
//             <h2
//               className={`whitespace-pre ${
//                 !mobile && "opacity-0 translate-x-28 overflow-hidden"
//               }`}
//             >
//               {menu?.name}
//             </h2>
//             {dropDown ? (
//               <>
//                 {mobile && (
//                   <RiArrowDropUpLine className="text-2xl absolute self-center right-4" />
//                 )}
//               </>
//             ) : (
//               <>
//                 {mobile && (
//                   <RiArrowDropDownLine className="text-2xl absolute self-center right-4" />
//                 )}
//               </>
//             )}
//           </div>
//           {mobile && dropDown && (
//             <>
//               {menu?.nestedMenu?.map((item, index) => {
//                 return (
//                   <NavLink
//                     to={item.link}
//                     key={index}
//                     className={({ isActive }) =>
//                       `  ${
//                         isActive
//                           ? "bg-primary-400 text-white hover:bg-primary-400 shadow-lg"
//                           : " hover:bg-grey-100 text-black hover:bg-slate-200"
//                       }  duration-300 flex items-center capitalize text-sm font-medium  gap-2 self-end w-[90%] px-3 py-2  hover:bg-grey-100   rounded-md`
//                     }
//                     onClick={() => setMobile(false)}
//                   >
//                     <div>
//                       {React.createElement(item?.icon, {
//                         size: "20",
//                       })}
//                     </div>
//                     <div className="">{item.name}</div>
//                   </NavLink>
//                 );
//               })}
//             </>
//           )}
//         </div>
//       ) : (
//         <NavLink
//           onClick={() => setMobile(false)}
//           to={menu?.link}
//           className={({ isActive }) =>
//             `  group lg:hidden flex items-center text-sm capitalize   gap-3.5 font-medium  p-2  hover:duration-50  rounded-md ${
//               isActive
//                 ? "bg-primary-400 text-white hover:bg-primary-400 shadow-lg "
//                 : " hover:bg-grey-100 text-black hover:bg-slate-200"
//             }`
//           }
//         >
//           <div>
//             {React.createElement(menu?.icon, {
//               size: "20",
//             })}
//           </div>
//           <h2
//             className={`whitespace-pre ${
//               mobile ? "inline-block" : "hidden"
//             } lg:hidden`}
//             onClick={() => setMobile(false)}
//           >
//             {menu?.name}
//           </h2>
//         </NavLink>
//       )}
//     </>
//   );
// };

const Sidebar: React.FC<SidebarProps> = ({
  mobile,
  open,
  setMobile,
  setOpen,
}) => {
  const menus = [
    { name: "Home", link: "/dashboard", icon: Icons.HOME },
    { name: "Messages", link: "/user", icon: Icons.MESSAGES },
    { name: "Tasks", link: "/saved", icon: Icons.TASKS },
    { name: "Members", link: "/giftcard", icon: Icons.MEMBERS },
    { name: "Settings", link: "/messages", icon: Icons.SETTINGS },
  ];
  const myProjects = [
    { name: "Mobile App", link: "mobile", color: "7AC555" },
    { name: "Website Redesign ", link: "website", color: "FFA500" },
    { name: "Design System ", link: "Design", color: "E4CCFD" },
    { name: "Wireframes ", link: "wireframes", color: "76A5EA" },
  ];
  const [isActiveProject, setActiveProject] = useState<string>("mobile");
  return (
    <div
      className={` min-h-screen  overflow-y-scroll overflow-x-hidden border-r border-borderColor lg:overflow-auto bg-white w-[100%]  text-gray-900 `}
    >
      {/* sidebar top */}
      <div className="w-full flex  justify-between border-borderColor border-b px-5 py-7">
        <div className="flex  items-center gap-2">
          <Image width={24} height={24} src={Icons.LOGO_M} alt="Logo" />
          <p className="font-bold  text-lg   "> Project M.</p>
        </div>
        <Image
          width={24}
          height={24}
          className="cursor-pointer"
          src={Icons.ARROW_BACK}
          alt="ARROW_BACK"
          onClick={() => setOpen(false)}
        />
        <HiMenuAlt3
          size={28}
          className="   lg:hidden cursor-pointer  
            duration-75 hover:scale-95"
          onClick={() => setMobile(!mobile)}
        />
      </div>
      <div className="mx-3 py-6 border-b border-borderColor">
        <ul className="flex flex-col gap-2">
          {menus?.map((item, index) => {
            return (
              <li
                key={`${item.name}-${index}`}
                className="flex hover:bg-[#5030E5] transition-all ease-in-out duration-300 hover:bg-opacity-10  px-2 py-2 cursor-pointer  rounded-md  items-center gap-3"
              >
                <Image
                  className=" "
                  width={24}
                  height={24}
                  src={item.icon}
                  alt={item.name}
                />
                <p className="text-md font-medium  text-Typography ">
                  {item.name}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="mx-3 py-6 flex flex-col gap-3">
        <div className="flex   items-center justify-between ">
          <p className="text-xs mx-2  font-bold  text-Typography">
            MY PROJECTS
          </p>
          <Image className="w-4 h-4" src={Icons.ADD_SQUARE} alt="ADD_SQUARE" />
        </div>
        <ul className="flex flex-col gap-2">
          {myProjects?.map((item, index) => {
            return (
              <li
                key={`${item.name}-${index}`}
                className={` transition-all ease-in-out duration-300 ${
                  isActiveProject === item.link
                    ? "bg-hoverBg bg-opacity-10 text-Heading "
                    : "text-Typography"
                } flex hover:bg-hoverBg hover:bg-opacity-10 hover:text-Heading hover:font-semibold relative   px-2 py-2 cursor-pointer  rounded-md  items-center gap-3`}
              >
                <p
                  className={`w-2 h-2 rounded-full `}
                  style={{ backgroundColor: `#${item.color}` }}
                ></p>
                <p
                  className={`${
                    isActiveProject === item.link
                      ? " font-semibold "
                      : " font-medium "
                  }text-md     `}
                >
                  {item.name}
                </p>
                {isActiveProject === item.link && (
                  <Image
                    src={Icons.THREE_DOT}
                    className="w-4 h-1 absolute right-3  "
                    alt="three dots"
                  />
                )}
              </li>
            );
          })}
        </ul>
      </div>

      <div
        className="mx-3 p-6 my-12 flex flex-col gap-3 items-center relative rounded-xl bg-blubBgColor
       "
      >
        {/* radical bg color  */}
        <div className=" w-16 h-16 bg-blubBgColor flex items-center justify-center absolute -top-[15%]   rounded-full ">
          <div className=" w-full h-full flex items-center justify-center bg-gradient-radial  ">
            <Image src={Icons.LAMP_ON} alt="LAMP_ON" className=" " />
          </div>
        </div>
        <h1 className="text-Heading font-medium mt-3">Thoughts Time</h1>
        <p className="text-xs text-Typography text-center">
          We don’t have any notice for you, till then you can share your
          thoughts with your peers.
        </p>
        <button className="w-full py-2 outline-none rounded-md border-none hover:bg-[#5030E5] transition-all ease-in-out duration-300 hover:bg-opacity-10  bg-white text-Heading text-md font-medium">
          Write a message
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
