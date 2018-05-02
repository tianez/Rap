const getWeekOfYear = currentTime => {
    let today = currentTime ? new Date(currentTime) : new Date();
    let todayOfWeek = today.getDay();
    let stepDay = 6;
    if (todayOfWeek != 0) {
        stepDay = todayOfWeek - 1;
    }
    let startDayOfWeek = new Date(today.valueOf() - 86400000 * stepDay);
    let lastDayOfWeek = new Date(today.valueOf() + 86400000 * (6 - stepDay));
    let firstDay = new Date(today.getFullYear(), 0, 1);
    let firstDayOfWeek = firstDay.getDay();
    let spendDay = 1;
    if (firstDayOfWeek != 0) {
        spendDay = 7 - firstDayOfWeek + 1;
    }
    firstDay = new Date(today.getFullYear(), 0, 1 + spendDay);
    let d = Math.ceil((today.valueOf() - firstDay.valueOf()) / 86400000);
    let result = Math.ceil(d / 7);
    return {
        startDayOfWeek,
        lastDayOfWeek,
        curWeek: result + 1
    };
};

export default getWeekOfYear;
