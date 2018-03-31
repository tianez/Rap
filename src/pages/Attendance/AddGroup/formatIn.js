const formatInit = data => {
    data = JSON.parse(JSON.stringify(data));
    let deptList = data.deptList.map(d => {
        return d.id;
    });
    data.deptList = deptList;
    let userList = data.userList.map(user => {
        return user.userId;
    });
    data.userList = userList;
    let userId = data.userId;
    data.userId = userId ? [userId] : [];
    return data;
};

export default formatInit;
