const formatOut = data => {
    data = JSON.parse(JSON.stringify(data));
    let deptLists = data.deptList.map(dep => {
        return {
            id: dep
        };
    });
    data.deptList = deptLists;
    let userList = data.userList.map(userid => {
        return {
            userId: userid
        };
    });
    data.userList = userList;
    data.userId = data.userId[0] || "";
    return data;
};

export default formatOut;
