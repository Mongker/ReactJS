
export function completedAll(todoList) {
    if(todoList !== null ) {
        let temp = 1;
        for(let i = 0; i < todoList.length; i++) {
            if(todoList[i].isActive.isActive === true) {
                temp = 0;
                break;
            }
        }
        if(temp === 1) {
            return true;
        } return false;
    } else return null;
}
