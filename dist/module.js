import {useRef as $hgUW1$useRef, useEffect as $hgUW1$useEffect} from "react";


function $149c1bd638913645$export$e9dfd449e4eb603e({ payload: payload = ()=>{}, sequence: sequence, element: element, children: children = null }) {
    const pressed = (0, $hgUW1$useRef)(0);
    const onkeydown = (evt)=>{
        evt.key === sequence[pressed.current] || evt.key.substr(5).toLowerCase() === sequence[pressed.current] // ArrowXXXX
         ? pressed.current += 1 : pressed.current = 0;
        if (pressed.current === sequence.length) {
            payload();
            pressed.current = 0;
        }
    };
    const listen = ()=>{
        if (element && element.addEventListener) element.addEventListener("keydown", onkeydown);
    };
    const unlisten = ()=>{
        if (element && element.removeEventListener) element.removeEventListener("keydown", onkeydown);
    };
    (0, $hgUW1$useEffect)(()=>{
        if (!(element instanceof Function)) element;
        listen();
        return ()=>{
            unlisten();
        };
    }, [
        element
    ]);
    if (element instanceof Function) return element({
        refFn: (ref)=>{
            element = ref;
        }
    });
    return children;
}
var $149c1bd638913645$export$2e2bcd8739ae039 = $149c1bd638913645$export$e9dfd449e4eb603e;


export {$149c1bd638913645$export$e9dfd449e4eb603e as Konami, $149c1bd638913645$export$2e2bcd8739ae039 as default};
//# sourceMappingURL=module.js.map
