import * as React from "react";
import Logo from "./Components/Logo";
import TwentyTwentyTwoCNY from "./Components/SVGs/2022";
import Envelope from "./Components/SVGs/envelope";
const CNY = () => {
    return (
        <div>
            <div className="d-flex align-items-center">
                <Logo />
                <div className="gold-text ms-4 display-4">tsang.win</div>
            </div>
            <div className="d-flex flex-column align-items-center justify-content-center my-4">
                <div>
                    <h1 style={{ fontSize: "70px" }} className="gold-text mb-3">
                        新年快乐
                    </h1>
                </div>
                <div style={{ width: "200px" }}>
                    <TwentyTwentyTwoCNY />
                </div>
                <div style={{ width: "200px" }} className="mt-2 text-center gold-text">
                    <p>Have a great new year!</p>
                </div>
                <div>
                    <div className="envelope">
                        <Envelope />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CNY;