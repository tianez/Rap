import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { stringify } from "qs";

const Links = ({ to, iframe, children, staticContext, ...props }) => {
    if (typeof to === "string" && (to.indexOf("https://") == 0 || to.indexOf("http://") == 0)) {
        if (!iframe) {
            return (
                <Link
                    {...props}
                    to={{
                        pathname: "/iframe",
                        search: stringify({ outlink: to }),
                        state: { outlink: to }
                    }}
                >
                    {children}
                </Link>
            );
        }
        return (
            <a {...props} href={to} target="_blank">
                {children}
            </a>
        );
    }
    return (
        <Link to={{ pathname: to, search: stringify({ red: to }) }} {...props}>
            {children}
        </Link>
    );
};

export default Links;
