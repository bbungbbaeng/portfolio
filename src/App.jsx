import React, { useRef, useState, useEffect } from "react";
import { useOutlet, useLocation } from "react-router-dom";
import { CSSTransition, SwitchTransition } from "react-transition-group";

import "./App.css";

export default function App() {
    const location = useLocation();
    const nextOutlet = useOutlet();
    const [displayOutlet, setDisplayOutlet] = useState(nextOutlet);
    const [displayKey, setDisplayKey] = useState(location.pathname);
    const nodeRef = useRef(null);

    useEffect(() => {
        if (location.pathname !== displayKey) {
            setDisplayKey(location.pathname);
        }
    }, [location.pathname, displayKey]);

    return (
        <div className="App">
            <SwitchTransition mode="out-in">
                <CSSTransition key={displayKey} nodeRef={nodeRef} timeout={400} classNames="fade" unmountOnExit mountOnEnter onExited={() => { setDisplayOutlet(nextOutlet); }}>
                    <div ref={nodeRef} className="route-container">
                        {displayOutlet}
                    </div>
                </CSSTransition>
            </SwitchTransition>
        </div>
    );
}