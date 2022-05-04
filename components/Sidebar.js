import React, { useState } from "react";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import { FaHome, FaUser } from "react-icons/fa";
import { BiAnalyse } from "react-icons/bi";
import { BiMessageSquareDots, BiSearch } from "react-icons/bi";
import { AiFillFolderOpen, AiFillHeart } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { GoThreeBars } from "react-icons/go";
import { MdClose } from "react-icons/md";
import Link from "next/link";

const routes = [
  {
    path: "/",
    name: "Dashboard",
    icon: <FaHome />,
  },
  {
    path: "/User",
    name: "User",
    icon: <FaUser />,
  },
  {
    path: "/Messages",
    name: "Messages",
    icon: <BiMessageSquareDots />,
  },
  {
    path: "/Analytics",
    name: "Analytics",
    icon: <BiAnalyse />,
  },
  {
    path: "/FileManager",
    name: "FileManager",
    icon: <AiFillFolderOpen />,
  },
  {
    path: "/Order",
    name: "Order",
    icon: <BsCartCheck />,
  },
  {
    path: "/Saved",
    name: "Saved",
    icon: <AiFillHeart />,
  },
  {
    path: "/Settings",
    name: "Settings",
    icon: <FiSettings />,
  },
];

const inputAnimation = {
  hidden: {
    width: 0,
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
  show: {
    width: "100%",
    padding: "7px 4px",
    opacity: 1,
    transition: {
      duration: 0.2,
    },
  },
};

const ShowAnimation = {
  hidden: {
    width: 0,
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
  show: {
    width:"auto",
    opacity: 1,
    transition: {
      duration: 0.2,
    },
  },
};

const Sidebar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const router = useRouter();

  return (
    <div className="side-bar-main">
      <motion.div
        animate={{ width: isOpen ? ("200px") : "40px", transition: {
            duration: 0.5,
            type: "spring",
            damping: 11,
        }}}
        className="sidebar"
      >
        <div className="side-head">
          <div
            className={`title`}
          >
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={ShowAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="Logo"
                >
                  Hs Coding
                </motion.h1>
              )}
            </AnimatePresence>
            <div className="bar" onClick={toggle}>
              {
                !isOpen && <GoThreeBars />
              }
              {
                isOpen && <MdClose />
              }
            </div>
          </div>

          <div
            className={`search `}
          >
            <div className="icon">
              <BiSearch onClick={() => {
                setIsOpen(true);
              }}/>
            </div>
            <AnimatePresence>
              {isOpen && (
                <motion.input
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  variants={inputAnimation}
                  type="search"
                  name=""
                  placeholder="Search"
                  id=""
                />
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="section-route">
          {routes.map((route) => {
            return (
              <div key={route.name} className="link-wrap">
                <Link href={route.path}>
                  <div
                    className={`route-wrap ${router.pathname == route.path ? "active" : ""}`}  
                    onClick={()=>{setIsOpen(false)}}
                  >
                    <div className="icon">{route.icon}</div>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          variants={ShowAnimation}
                          initial="hidden"
                          animate="show"
                          exit="hidden"
                          className="link_text"
                        >
                          {route.name}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default Sidebar;
