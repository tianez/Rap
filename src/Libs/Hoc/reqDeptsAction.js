/**
 * 获取部门列表
 * @param {全局状态} state
 * @param {状态操作方法集合} dispatch
 */
const reqDeptsAction = async (state, dispatch) => {
    let organizationId = localStorage.organizationId;
    let res = await Request("deptment/deptList", {
        params: {
            id: organizationId,
            psize: 10000
        }
    });
    if (res.success) {
        dispatch.setIn(["deptList", organizationId], res.data.deptList);
    }
    return res;
};

export default reqDeptsAction;
