import * as React from "react";
import {GoldText, LogoWrapper} from "../../../styles";

const Logo = () => {
    return (
        <LogoWrapper>
            <div>
                <div><GoldText>曾</GoldText></div>
                <div className="logo-square" />
                <div className="logo-square" />
            </div>
        </LogoWrapper>
    );
};

export default Logo;
