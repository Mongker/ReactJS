
export default function createActionNoAppID(type, payload = {}, original = {}, condition = {}) {
    debugger;
    return {type, payload, original, condition, timestamp: Date.now()};
}
