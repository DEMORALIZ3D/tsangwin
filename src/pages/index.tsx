import * as React from 'react';
import { Global, css } from '@emotion/react'
import Head from "next/head";

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
            <Global
                styles={css`
                    body {
                        @import url('https://fonts.googleapis.com/css2?family=Caveat+Brush&display=swap');
                        font-family: "Lato", sans-serif;
                        height: 100vh;
                        background: linear-gradient(
                        61deg,
                        rgba(79, 16, 24, 1) 0%,
                        rgba(212, 33, 39, 1) 100%
                        );
                        padding: 20px;
                        position: absolute;
                        width: 100vw;
                        display: flex;
                        flex-direction: column;
                        overflow: hidden;
                    }
               `}
            />
            test
        </div>
    )
};

export default Index;
