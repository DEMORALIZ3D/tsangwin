import * as React from 'react';
import Head from "next/head";
import CNY from "../CNY";
import {IndexWrapper} from "../styles";
import {Footer} from "../styles/Footer";
import BorderCorner from "../CNY/Components/SVG/borderCorner";

const Index = () => {

    return (
        <div>
            <Head>
                <title>Tsang Win</title>
                <link
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
                    integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
                    crossOrigin="anonymous"
                />
            </Head>
            <IndexWrapper>
                <CNY />
                <Footer className="d-flex justify-content-between">
                    <div>
                        <BorderCorner />
                    </div>
                    <div>
                        <BorderCorner />
                    </div>
                </Footer>
            </IndexWrapper>

        </div>
    )
};

export default Index;
