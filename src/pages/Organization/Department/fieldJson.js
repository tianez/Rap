const fields = [
    {
        title: "部门名称",
        name: "name",
        type: "text",
        placeholder: "部门名称",
        rules: [{ required: true, message: "部门名称必填" }]
    },
    {
        title: "上级部门",
        name: "parent"
    }
];

export default fields;
