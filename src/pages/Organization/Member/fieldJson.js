const fields = [
    {
        title: "电话",
        name: "phonenumber1",
        type: "text",
        placeholder: "电话",
        rules: [{ required: true, message: "电话必填" }]
    },
    {
        title: "姓名",
        name: "personname",
        type: "text",
        placeholder: "必填",
        rules: [{ required: true, message: "姓名必填" }]
    },
    {
        title: "职位",
        name: "userPosition",
        type: "text",
        placeholder: "必填",
        rules: [{ required: true, message: "职位必填" }]
    },
    {
        title: "企业邮箱",
        name: "companyemail",
        type: "text",
        placeholder: "选填"
    },
    {
        title: "部门",
        name: "depArr",
        type: "departments",
        multiple: true,
        placeholder: "选填"
    },
    {
        title: "工号",
        name: "jobnumber",
        type: "text",
        placeholder: "选填"
    }
];

export default fields;
