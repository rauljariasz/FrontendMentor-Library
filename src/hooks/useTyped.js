import React from "react";
import Typed from "typed.js";

const TypedReactHook = () => {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);
  // Create reference to store the Typed instance itself
  const typed = React.useRef(null);

  React.useEffect(() => {
    const options = {
      strings: [
        "Hola 👋",
        `Bienvenid@ a mi libreria 
de retos de FM🎨`,
        "tómate un té ☕ y disfrútalos 👨‍🚀",
      ],
      typeSpeed: 55,
      backSpeed: 55,
    };

    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    };
  }, []);

  return (
    <div>
      <div>
        <span style={{ whiteSpace: "pre", textAlign: "center" }} ref={el} />
      </div>
    </div>
  );
};

export default TypedReactHook;
