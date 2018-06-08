import React, { Component } from "react";
import doubanApi from "Utils/doubanApi";
import delay from "Utils/delay";
const GetDataDouBan = Component =>
    class extends React.Component {
        state = {
            loadState: {
                loading: false,
                error: false,
                errorMsg: "",
                isOk:false
            }
        };
        getData = async ({ url, ...options, delaytime = 0 } = {}, callback) => {
            if (this.loading) {
                return;
            }
            this.loading = true;
            this.delayStart = Date.now();
            this.setState({
                loadState: {
                    loading: true,
                    error: false,
                    errorMsg: "",
                    isOk:false
                }
            });
            let res = await doubanApi({ url, ...options });
            let delayend = this.delayStart + delaytime - Date.now();
            if (delayend > 0) {
                await delay(delayend);
            }
            if (res.success) {
                if (callback) {
                    await callback(res.data);
                }
                this.setState({
                    loadState: {
                        loading: false,
                        error: false,
                        errorMsg: "",
                        isOk:true
                    }
                });
            } else {
                this.setState({
                    loadState: {
                        loading: false,
                        error: true,
                        errorMsg: res.message,
                        isOk:false
                    }
                });
            }
            this.loading = false;
        };
        render() {
            return <Component {...this.props} {...this.state} getData={this.getData} />;
        }
    };

export default GetDataDouBan;
