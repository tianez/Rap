/**
 * 字段验证
 */

const regs = {
    phone: {
        reg: /^[1][3,4,5,6,7,8,9][0-9]{9}$/,
        message: "请输入正确的手机号码"
    },
    email: {
        reg: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
        message: "请输入正确的邮箱地址"
    },
    chinese: {
        reg: /^[\u0391-\uFFE5]+$/,
        message: "必须输入中文",
        tip: true
    },
    english: {
        reg: /^[a-zA-Z]*$/,
        message: "必须输入英文字母",
        tip: true
    },
    ennum: {
        reg: /^[0-9a-zA-Z]*$/,
        message: "只能输入字母或者数字",
        tip: true
    },
    number: {
        reg: /^[0-9]+$/,
        message: "只能输入数字",
        tip: true
    }
};
const validate_conventional = ({ ruleKey, ruleValue, value, name, title, message }) => {
    let reg = regs[ruleKey];
    if (!reg) {
        return;
    }
    if (!ruleValue) {
        return;
    }
    message = message || reg.tip ? (title || name) + reg.message : reg.message;
    if (!value || !reg.reg.test(value)) {
        return message;
    }
};

export default validate_conventional;
