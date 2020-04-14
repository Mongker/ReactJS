import {convertObject} from './covertToObject';

export function changeAllCompleted(toDoList) {
    let todoNew = [];
    let temp = 0;
    for(let j = 0; j < toDoList.length - 1; j++) {
        if(toDoList[j].isActive.isActive === toDoList[j + 1].isActive.isActive) {
            temp = 1;
        } else {
            break;
        }
    }
    if(temp === 1) {
        for(let i = 0; i < toDoList.length; i++) {
            const object = convertObject(toDoList[i].id.id, toDoList[i].data.value, !toDoList[i].isActive.isActive);
            todoNew.push(object);
        }
    } else {
        for(let k = 0; k < toDoList.length; k++) {
            if(toDoList[k].isActive.isActive === true) {
                const object = convertObject(toDoList[k].id.id, toDoList[k].data.value, !toDoList[k].isActive.isActive);
                todoNew.push(object);
            } else {
                todoNew.push(toDoList[k]);
            }
        }
    }
    return todoNew;
}
