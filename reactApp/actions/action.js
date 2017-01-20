export const add_todo = 'add_todo'
let next =0;

export function addTodo(text){
    return{
        type: add_todo,
        id: next++,
        text
    }
}