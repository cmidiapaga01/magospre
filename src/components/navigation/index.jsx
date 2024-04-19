"use client";
import { useState } from "react";
import { BtnList } from "@/app/data";
import React from "react";
import NavButton from "./NavButton";
import useScreenSize from "../hooks/useScreenSize";
import ResponsiveComponent from "../ResponsiveComponent";
import { motion } from "framer-motion";
import Modal1 from "../modals/Modal1"; // Importei o componente Modal
import Modal2 from "../modals/Modal2"; // Importei o componente Modal2
import Modal3 from "../modals/Modal3"; // Importei o componente Modal3

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const Navigation = () => {
  const [currentModal, setCurrentModal] = useState(null);
  const angleIncrement = 360 / BtnList.length;
  const size = useScreenSize();
  const isLarge = size >= 1024;
  const isMedium = size >= 768;

  const openModal = (modalComponent) => {
    setCurrentModal(() => modalComponent);
  };

  const closeModal = () => {
    setCurrentModal(null);
  };

  return (
    <div className="w-full fixed h-screen flex items-center justify-center">
      <ResponsiveComponent>
        {({ size }) => {
          return size && size >= 480 ? (
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="w-max flex items-center justify-center relative hover:pause animate-spin-slow group"
            >
              {BtnList.map((btn, index) => {
                const angleRad = (index * angleIncrement * Math.PI) / 180;
                const radius = isLarge
                  ? "calc(20vw - 1rem)"
                  : isMedium
                  ? "calc(30vw - 1rem)"
                  : "calc(40vw - 1rem)";
                const x = `calc(${radius}*${Math.cos(angleRad)})`;
                const y = `calc(${radius}*${Math.sin(angleRad)})`;

                return (
                  <NavButton
                    key={btn.label}
                    x={x}
                    y={y}
                    {...btn}
                    onClick={() => openModal(btn.modalComponent)}
                  />
                );
              })}
            </motion.div>
          ) : (
            <>
              <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="w-full px-2.5 xs:p-0 xs:w-max flex flex-col space-y-4 item-start xs:items-center justify-center relative group xs:hidden"
              >
                {BtnList.map((btn) => (
                  <NavButton key={btn.label} {...btn} onClick={() => openModal(btn.modalComponent)} />
                ))}
              </motion.div>
            </>
          );
        }}
      </ResponsiveComponent>
      {currentModal && React.createElement(currentModal, { onClose: closeModal })}
    </div>
  );
};

export default Navigation;
// "use client";
// import { useState } from "react";
// import { BtnList } from "@/app/data";
// import React from "react";
// import NavButton from "./NavButton";
// import useScreenSize from "../hooks/useScreenSize";
// import ResponsiveComponent from "../ResponsiveComponent";
// import { motion } from "framer-motion";

// const container = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.3,
//     },
//   },
// };

// const Navigation = () => {
//   const [currentModal, setCurrentModal] = useState(null);
//   const size = useScreenSize();

//   const openModal = (modalComponent) => {
//     setCurrentModal(modalComponent);
//   };

//   const closeModal = () => {
//     setCurrentModal(null);
//   };

//   return (
//     <div className="w-full fixed h-screen flex items-center justify-center">
//       <ResponsiveComponent>
//         {({ size }) => {
//           return size && size >= 480 ? (
//             <motion.div
//               variants={container}
//               initial="hidden"
//               animate="show"
//               className="w-max flex items-center justify-center relative hover:pause animate-spin-slow group"
//             >
//               {BtnList.map((btn, index) => (
//                 <NavButton
//                   key={btn.label}
//                   x={`calc(${index * 30}vw)`} // Simplesmente para exemplificar, ajuste como necessário
//                   y={`calc(${index * 30}vh)`}
//                   {...btn}
//                   onClick={() => openModal(btn.modalComponent)}
//                 />
//               ))}
//             </motion.div>
//           ) : (
//             <div className="w-full px-2.5 xs:p-0 xs:w-max flex flex-col space-y-4 item-start xs:items-center justify-center relative group xs:hidden">
//               {BtnList.map((btn) => (
//                 <NavButton key={btn.label} {...btn} onClick={() => openModal(btn.modalComponent)} />
//               ))}
//             </div>
//           );
//         }}
//       </ResponsiveComponent>
//       {currentModal && React.createElement(currentModal, { onClose: closeModal })}
//     </div>
//   );
// };

// export default Navigation;

