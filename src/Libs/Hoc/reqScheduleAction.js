/**
 * 获取人员列表
 * @param {全局状态} state
 * @param {状态操作方法集合} dispatch
 */
const reqUsersAction = async (state, dispatch) => {
    let orgId = localStorage.organizationId;
    let res = await Request("shift/getShiftList", {
        params: {
            orgId
        }
    });
    if (res.success) {
        dispatch.setIn(["schedules", orgId], res.data.list);
    }
};

export default reqUsersAction;
