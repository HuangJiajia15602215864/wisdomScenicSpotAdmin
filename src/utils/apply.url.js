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
