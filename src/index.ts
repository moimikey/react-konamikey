import React, { useEffect, useRef } from "react";

export function Konami({
  payload = () => {},
  sequence,
  element,
  children = null,
}) {
  const pressed = useRef(0);

  const onkeydown = (evt) => {
    evt.key === sequence[pressed.current] ||
    evt.key.substr(5).toLowerCase() === sequence[pressed.current] // ArrowXXXX
      ? (pressed.current += 1)
      : (pressed.current = 0);
    if (pressed.current === sequence.length) {
      payload();
      pressed.current = 0;
    }
  };

  const listen = () => {
    if (element && element.addEventListener) {
      element.addEventListener("keydown", onkeydown);
    }
  };

  const unlisten = () => {
    if (element && element.removeEventListener) {
      element.removeEventListener("keydown", onkeydown);
    }
  };

  useEffect(() => {
    if (!(element instanceof Function)) {
      element = element;
    }
    listen();

    return () => {
      unlisten();
    };
  }, [element]);

  if (element instanceof Function) {
    return element({
      refFn: (ref: unknown) => {
        element = ref;
      },
    });
  }

  return children;
}

export default Konami;
