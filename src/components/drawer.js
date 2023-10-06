import React from "react";
import Drawer from "react-modern-drawer";
import "./drawer.css";
import "react-modern-drawer/dist/index.css";

const App = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <button onClick={toggleDrawer} className="icon">
        <span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M2.5 11.5C2.5 11.2239 2.72386 11 3 11H13C13.2761 11 13.5 11.2239 13.5 11.5C13.5 11.7761 13.2761 12 13 12H3C2.72386 12 2.5 11.7761 2.5 11.5Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M2.5 7.5C2.5 7.22386 2.72386 7 3 7H13C13.2761 7 13.5 7.22386 13.5 7.5C13.5 7.77614 13.2761 8 13 8H3C2.72386 8 2.5 7.77614 2.5 7.5Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M2.5 3.5C2.5 3.22386 2.72386 3 3 3H13C13.2761 3 13.5 3.22386 13.5 3.5C13.5 3.77614 13.2761 4 13 4H3C2.72386 4 2.5 3.77614 2.5 3.5Z"
              fill="white"
            />
          </svg>
        </span>
      </button>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="left"
        className="drawer"
      >
        <div>Hello World</div>
      </Drawer>
    </>
  );
};

export default App;
