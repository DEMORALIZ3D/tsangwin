import * as React from "react";
import Logo from "./Components/Logo";
import TwentyTwentyTwoCNY from "./Components/SVG/2022";
import Envelope from "./Components/SVG/envelope";
import {GoldText} from "../styles";
import GSAP from "gsap";
const CNY = () => {

    const Page = (id: string, delay = 0) => {
        const timeline = GSAP.timeline({
            duration: 0.3,
            transformOrigin: 'center',
            repeat: -1,
            yoyo: true,
            delay: delay,
        });

        timeline.fromTo(`#${id}`, {
            y: 0
        }, {
            y: 5
        });
    };

    React.useEffect(() => {
        Page('Page-1');
        Page('Page-2', 0.6);
    }, []);

    return (
        <div>
            <div className="d-flex align-items-center">
                <Logo />
                <div className="gold-text ms-4 display-4"><GoldText>tsang.win</GoldText></div>
            </div>
            <div className="d-flex flex-column align-items-center justify-content-center my-4">
                <div>
                    <h1 style={{ fontSize: "70px" }} className="mb-3">
                        <GoldText>新年快乐</GoldText>
                    </h1>
                </div>
                <div style={{ width: "200px" }}>
                    <TwentyTwentyTwoCNY />
                </div>
                <div style={{ width: "200px" }} className="mt-2 mb-3 text-center gold-text">
                    <p><GoldText>Have a great new year!</GoldText></p>
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