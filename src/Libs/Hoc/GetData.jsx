import React, { Component } from "react";
import delay from "Utils/delay";
const GetData = Component =>
    class extends React.Component {
        state = {
            // data: null,
            loadState: {
                loading: false,
                error: false,
                errorMsg: ""
            }
        };
        getData = async (url, options, delaytime = 0) => {
            this.delayStart = Date.now();
            this.setState({
                loadState: {
                    loading: true,
                    error: false,
                    errorMsg: ""
                }
            });
            let res = await Apicloud(url, options);
            let delayend = this.delayStart + delaytime - Date.now();
            if (delayend > 0) {
                await delay(delayend);
            }
            if (res.success) {
                this.setState({
                    data: res.data,
                    loadState: {
                        loading: false,
                        error: false,
                        errorMsg: ""
                    }
                });
            } else {
                this.setState({
                    loadState: {
                        loading: false,
                        error: true,
                        errorMsg: res.message
                    }
                });
            }
        };
        render() {
            return <Component {...this.props} {...this.state} getData={this.getData} />;
        }
    };

export default GetData;
