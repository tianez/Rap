const filterData = (props, searchValue) => {
    let { breadcrumbs, deptlist = $arr, userlists = $arr } = props;
    if (!deptlist) {
        return;
    }
    let userlist = $arr;
    let length = breadcrumbs.length;
    let breadcrumbId = length == 0 ? 0 : breadcrumbs.getIn([length - 1, "id"]);
    let deptlists = deptlist.filter(dep => {
        return dep.parent == breadcrumbId;
    });
    deptlists = deptlists.map(list => {
        let children = deptlist.filter(dep => {
            return dep.parent == list.id;
        });
        let member = userlists.filter(mb => {
            return mb.depArr && mb.depArr.indexOf(list.id) != -1;
        });
        list = list.merge({ children, member });
        return list;
    });
    if (breadcrumbId == 0 && !searchValue) {
        return {
            deptlist: deptlists,
            userlist
        };
    }
    if (breadcrumbId == 0 && searchValue) {
        userlist = userlists.filter(d => {
            return d.personname.indexOf(searchValue) != -1;
        });
        return {
            deptlist: deptlists,
            userlist
        };
    }
    userlist = userlists.filter(mb => {
        return mb.depArr && mb.depArr.indexOf(breadcrumbId) != -1;
    });
    if (searchValue) {
        userlist = userlist.filter(d => {
            return d.personname.indexOf(searchValue) != -1;
        });
    }
    return {
        deptlist: deptlists,
        userlist
    };
};

export default filterData;
