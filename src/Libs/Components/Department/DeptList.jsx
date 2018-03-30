import React, { Component } from "react";
import { Icon, List, WhiteSpace } from "antd-mobile";
const Item = List.Item;

import styles from "./DeptList.scss";

const DepartmentList = ({ deptlist = $arr, multiple, selectedKeys, onClick, onChangeLists }) => {
    return deptlist.length > 0 ? (
        <List style={{ marginTop: "6px" }}>
            {multiple
                ? deptlist.map((list, index) => {
                      let cls = styles.checkbox;
                      if (selectedKeys.indexOf(list.id) != -1) {
                          cls = styles.checked;
                      }
                      return (
                          <Item key={list.id} extra={<Extra list={list} onClick={onChangeLists} />}>
                              <div onClick={() => onClick(list)}>
                                  <span className={cls} />
                                  {list.name}
                              </div>
                          </Item>
                      );
                  })
                : deptlist.map((list, index) => {
                      return (
                          <Item key={list.id} extra={<Extra list={list} onClick={onChangeLists} />}>
                              <div onClick={() => onClick(list)}>{list.name}</div>
                          </Item>
                      );
                  })}
        </List>
    ) : (
        <List style={{ marginTop: "6px" }}>
            <Item>没有子部门</Item>
        </List>
    );
};

export default DepartmentList;

const Extra = ({ list, onClick }) => {
    return (
        <span className={styles.extra} onClick={() => onClick(list)}>
            <i className="iconfont icon-wodexiaji" />
            下级
        </span>
    );
};
