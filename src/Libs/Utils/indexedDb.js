import { log } from "core-js";

window.indexDb = (function() {
    var db;
    var create = async (dbname, version, datasheet) => {
        return new Promise(function(resolve, reject) {
            var request = indexedDB.open(dbname, version);
            request.onsuccess = function(e) {
                db = e.target.result;
                resolve("e.target.result");
            };
            request.onerror = function(e) {
                resolve(e.target.error);
            };
            request.onupgradeneeded = function(e) {
                console.log("新数据库版本号为=" + e.newVersion);
                var db = e.target.result;
                // 如果不存在Users对象仓库则创建
                // if (!db.objectStoreNames.contains('Users')) {
                datasheet.map(data => {
                    let { datasheetname, opt = { keyPath: "id", autoIncrement: true }, indexs } = data;
                    let store = db.createObjectStore(datasheetname, opt);
                    if (indexs) {
                        indexs.map(index => {
                            let { key, opt } = index;
                            store.createIndex(key, key, opt);
                        });
                    }
                    // store.createIndex('username', 'username', { unique: true });
                    // store.createIndex("email", "email", { unique: true });
                });
                // }
            };
        });
    };
    var createdatasheet = datasheet => {};
    var add = async (dbname, data) => {
        var tx = db.transaction(dbname, "readwrite");
        var store = tx.objectStore(dbname);
        return new Promise(function(resolve, reject) {
            let res = store.add(data);
            res.onsuccess = function(e) {
                // resolve(e.target.result)
                let resq = store.get(e.target.result);
                resq.onsuccess = function(e) {
                    resolve(e.target.result);
                };
                resq.onerror = function(e) {
                    resolve(e.target.error);
                };
            };
            res.onerror = function(e) {
                resolve(e.target.error);
            };
        });
    };
    var set = async (dbname, data) => {
        var tx = db.transaction(dbname, "readwrite");
        var store = tx.objectStore(dbname);
        return new Promise(function(resolve, reject) {
            let res = store.put(data);
            res.onsuccess = function(e) {
                // resolve(e.target.result)
                let resq = store.get(e.target.result);
                resq.onsuccess = function(e) {
                    resolve(e.target.result);
                };
                resq.onerror = function(e) {
                    resolve(e.target.error);
                };
            };
            res.onerror = function(e) {
                resolve(e.target.error);
            };
        });
    };
    var get = async (dbname, query, index) => {
        var tx = db.transaction(dbname);
        var store = tx.objectStore(dbname);
        if (index) {
            store = store.index(index);
        }
        return new Promise(function(resolve, reject) {
            let res = store.get(query);
            res.onsuccess = function(e) {
                resolve(e.target.result);
            };
            res.onerror = function(e) {
                resolve(e.target.error);
            };
        });
    };
    var getAll = async dbname => {
        var store = db.transaction(dbname, "readwrite").objectStore(dbname);
        return new Promise(function(resolve, reject) {
            let res = store.openCursor();
            let data = [];
            res.onsuccess = function(e) {
                var cursor = e.target.result;
                if (cursor) {
                    //必须要检查
                    data = [].concat(cursor.value, data);
                    cursor.continue(); //遍历了存储对象中的所有内容
                } else {
                    resolve(data);
                }
            };
            res.onerror = function(e) {
                resolve(e.target.error);
            };
        });
    };
    return {
        create: create,
        add: add,
        set: set,
        get: get,
        getAll: getAll
    };
})();
