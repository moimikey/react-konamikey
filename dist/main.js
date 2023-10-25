var $8zHUo$react = require("react");


function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "Konami", () => $882b6d93070905b3$export$e9dfd449e4eb603e);
$parcel$export(module.exports, "default", () => $882b6d93070905b3$export$2e2bcd8739ae039);

function $882b6d93070905b3$export$e9dfd449e4eb603e({ payload: payload = ()=>{}, sequence: sequence, element: element, children: children = null }) {
    const pressed = (0, $8zHUo$react.useRef)(0);
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
    (0, $8zHUo$react.useEffect)(()=>{
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
var $882b6d93070905b3$export$2e2bcd8739ae039 = $882b6d93070905b3$export$e9dfd449e4eb603e;


//# sourceMappingURL=main.js.map
