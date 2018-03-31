/**
 * 获取人员列表
 * @param {全局状态} state
 * @param {状态操作方法集合} dispatch
 */
const reqUsersAction = async (state, dispatch) => {
    let organizationId = localStorage.organizationId;
    let res = await Request("relation/findList", {
        params: {
            organizationId,
            psize: 10000
        }
    });
    if (res.success) {
        dispatch.setIn(["userList", organizationId], res.data.list.userList);
    }
};

export default reqUsersAction;
