
export default function createActionNoAppID(type, payload = {}, original = {}, condition = {}) {
    return {type, payload, original, condition, timestamp: Date.now()};
}
