import React, { Component } from "react";
import { NavBar, Icon } from "antd-mobile";
import styled from "styled-components";

import LayoutView from "Views/Layout/LayoutView";
import ContentView from "Views/Layout/ContentView";
import LeftIcon from "./LeftIcon";

const LoadingView = styled.div`
    text-align: center;
    line-height: 3rem;
`;

const LoadingFarmeWork = ({ children }) => {
    return (
        <LayoutView>
            <NavBar mode="light" icon={<LeftIcon />} />
            <ContentView>
                {children || (
                    <LoadingView>
                        <Icon type={"loading"} size={"lg"} />
                    </LoadingView>
                )}
            </ContentView>
        </LayoutView>
    );
};

export default LoadingFarmeWork;
