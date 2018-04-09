import React, { Component } from "react";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    componentDidCatch(error, info) {
        this.setState({ hasError: true, error, info });
        console.log(error.toString());
        console.log(info);
        console.log(error.stack[1]);
        // logErrorToMyService(error, info);
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return (
                <div>
                    <h1>Error AGAIN: {this.state.error.toString()}</h1>
                    {/* {this.state.info &&
                        this.state.info.componentStack.split("\n").map(i => {
                            return <div key={i}>{i}</div>;
                        })} */}
                </div>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
