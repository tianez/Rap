import React, { Component } from "react";
import qs from "qs";
import delay from "Utils/delay";
import fetchJsonp from "Utils/fetchJsonp";

const cachetime = 1000 * 60 * 60;
const GetDataDouBan = Component =>
    class extends React.Component {
        state = {
            loadState: {
                loading: false,
                error: false,
                errorMsg: "",
                isOk: false
            }
        };
        getData = async ({ url, delaytime = 0, cachetime = cachetime, ...options } = {}, callback) => {
            if (this.loading) {
                return;
            }
            this.loading = true;
            this.delayStart = Date.now();
            let reqkey = "https://api.douban.com/v2/" + url + "?" + qs.stringify(options.params);
            let res;
            let dbData = await db.req
                .where("req")
                .equalsIgnoreCase(reqkey)
                .last();
            if (dbData) {
                res = dbData.res;
                let update_time = dbData.time;
                if (update_time && (Date.now() - update_time > cachetime || !res.success)) {
                    res = await this.fetchData(reqkey);
                }
            } else {
                res = await this.fetchData(reqkey);
            }
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
                        isOk: true
                    }
                });
            } else {
                this.setState({
                    loadState: {
                        loading: false,
                        error: true,
                        errorMsg: res.message,
                        isOk: false
                    }
                });
            }
            this.loading = false;
        };
        fetchData = async reqkey => {
            this.setState({
                loadState: {
                    loading: true,
                    error: false,
                    errorMsg: "",
                    isOk: false
                }
            });
            let res = await fetchJsonp(reqkey);
            db.req.put({ req: reqkey, res, time: Date.now() });
            return res;
        };
        render() {
            return <Component {...this.props} {...this.state} getData={this.getData} />;
        }
    };

export default GetDataDouBan;
