// code your solution here
function saturdayFun(event = 'roller-skate') {
    return `This Saturday, I want to ${event}!`;
};
saturdayFun();
saturdayFun("bathe my dog");

function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
};
mondayWork();
mondayWork("work from home");

function wrapAdjective( special = "*") {
    return function (adjective = "special") {
        return `You are ${special}${adjective}${special}!`;
    };
}
wrapAdjective("||")("a dedicated programmer")