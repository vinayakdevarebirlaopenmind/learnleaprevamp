import { useEffect } from "react";
import "./Cursor.css";

const Cursor = () => {
  useEffect(() => {
    const cursor = document.getElementById("cursor");

    const handleMouseMove = (e) => {
      if (cursor) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <div id="cursor"></div>;
};

export default Cursor;
