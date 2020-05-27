import { fetchData } from './ajax'
//登录
export function login(data, type, callFunc) {
    var msg = data
    if(callFunc && (callFunc.constructor === Function)){
        return fetchData('/login', msg, type, callFunc)
    }
    return fetchData('/login', msg, type)
}
//注册
export function register(data, type, callFunc) {
    var msg = data
    if(callFunc && (callFunc.constructor === Function)){
        return fetchData('/register', msg, type, callFunc)
    }
    return fetchData('/register', msg, type)
}

//获取景点信息
export function spots(data, type, callFunc) {
    var msg = data
    if(callFunc && (callFunc.constructor === Function)){
        return fetchData('/spots', msg, type, callFunc)
    }
    return fetchData('/spots', msg, type)
}
//通过关键字获取景点信息
export function findSpot(data, type, callFunc) {
    var msg = data
    if(callFunc && (callFunc.constructor === Function)){
        return fetchData('/findSpot', msg, type, callFunc)
    }
    return fetchData('/findSpot', msg, type)
}
//添加景点信息
export function spot(data, type, callFunc) {
    var msg = data
    if(callFunc && (callFunc.constructor === Function)){
        return fetchData('/spot', msg, type, callFunc)
    }
    return fetchData('/spot', msg, type)
}
// 更新景点信息
export function updateSpot(data, type, callFunc) {
    var msg = data
    if(callFunc && (callFunc.constructor === Function)){
        return fetchData('/updateSpot', msg, type, callFunc)
    }
    return fetchData('/updateSpot', msg, type)
}
// 删除景点信息
export function deleteSpot(data, type, callFunc) {
    var msg = data
    if(callFunc && (callFunc.constructor === Function)){
        return fetchData('/deleteSpot', msg, type, callFunc)
    }
    return fetchData('/deleteSpot', msg, type)
}

//获取活动资讯
export function activityinfo(data, type, callFunc) {
    var msg = data
    if(callFunc && (callFunc.constructor === Function)){
        return fetchData('/activity', msg, type, callFunc)
    }
    return fetchData('/activity', msg, type)
}
//通过关键字获取活动资讯
export function findActivity(data, type, callFunc) {
    var msg = data
    if(callFunc && (callFunc.constructor === Function)){
        return fetchData('/findActivity', msg, type, callFunc)
    }
    return fetchData('/findActivity', msg, type)
}
//获取活动资讯
export function activityP(data, type, callFunc) {
    var msg = data
    if(callFunc && (callFunc.constructor === Function)){
        return fetchData('/activity', msg, type, callFunc)
    }
    return fetchData('/activity', msg, type)
}
// 更新活动资讯
export function updateActivity(data, type, callFunc) {
    var msg = data
    if(callFunc && (callFunc.constructor === Function)){
        return fetchData('/updateActivity', msg, type, callFunc)
    }
    return fetchData('/updateActivity', msg, type)
}
// 删除活动资讯
export function deleteActivity(data, type, callFunc) {
    var msg = data
    if(callFunc && (callFunc.constructor === Function)){
        return fetchData('/deleteActivity', msg, type, callFunc)
    }
    return fetchData('/deleteActivity', msg, type)
}

//获取电子门票
export function tickets(data, type, callFunc) {
    var msg = data
    if(callFunc && (callFunc.constructor === Function)){
        return fetchData('/tickets', msg, type, callFunc)
    }
    return fetchData('/tickets', msg, type)
}
//通过关键字获取电子门票
export function findTicket(data, type, callFunc) {
    var msg = data
    if(callFunc && (callFunc.constructor === Function)){
        return fetchData('/findTicket', msg, type, callFunc)
    }
    return fetchData('/findTicket', msg, type)
}
//添加电子门票
export function ticket(data, type, callFunc) {
    var msg = data
    if(callFunc && (callFunc.constructor === Function)){
        return fetchData('/ticket', msg, type, callFunc)
    }
    return fetchData('/ticket', msg, type)
}
//通过id获取电子门票
export function findTicketById(data, type, callFunc) {
    var msg = data
    if(callFunc && (callFunc.constructor === Function)){
        return fetchData('/findTicketById', msg, type, callFunc)
    }
    return fetchData('/findTicketById', msg, type)
}
// 更新电子门票
export function updateTicket(data, type, callFunc) {
    var msg = data
    if(callFunc && (callFunc.constructor === Function)){
        return fetchData('/updateTicket', msg, type, callFunc)
    }
    return fetchData('/updateTicket', msg, type)
}
// 删除电子门票
export function deleteTicket(data, type, callFunc) {
    var msg = data
    if(callFunc && (callFunc.constructor === Function)){
        return fetchData('/deleteTicket', msg, type, callFunc)
    }
    return fetchData('/deleteTicket', msg, type)
}

// 通过区域获取停车信息
export function parkingByArea(data, type, callFunc) {
    var msg = data
    if(callFunc && (callFunc.constructor === Function)){
        return fetchData('/parkingByArea', msg, type, callFunc)
    }
    return fetchData('/parkingByArea', msg, type)
}

//获取电子门票
export function buySearch(data, type, callFunc) {
    var msg = data
    if(callFunc && (callFunc.constructor === Function)){
        return fetchData('/buySearch', msg, type, callFunc)
    }
    return fetchData('/buySearch', msg, type)
}
