const formatOut = data => {
    let approver = data.approver.map(d => {
        return d + "@" + data.organization;
    });
    data.approver = approver.join("#");
    let sendRangeList = data.sendRangeList.map(d => {
        return {
            userId: d,
            orgId: data.organization
        };
    });
    // data.sendRangeList = JSON.stringify(sendRangeList);
    data.sendRangeList = sendRangeList;
    return data;
};

export default formatOut;
