/**
 * 测试testAction
 */
const testAction = async (state, dispatch, opt) => {
    if (opt && state.test) {
        return;
    }
    let res = await Request("http://10.114.20.103:8888/mock/20/deptment/deptList");
    if (res.success) {
        dispatch.setIn(["test"], res.data);
    }
    return res;
};

export default testAction;
