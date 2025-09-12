function todoReducer(state, action) {
    if(action.type == 'add_todo') {
        let todoText = action.payload.todoText;
        return [
            ...state, {id: state.length+1, todoData: todoText, finished: false}
        ];
    }
    else if(action.type == "finish_todo") {
        let todoId = action.payload.todo;
        let isFinished = action.payload.isFinished;
        const updatedList=state.map(t => {
            if(t.id == todoId){
                t.finished = isFinished;
            }
            return t;
        }
        );
        return updatedList;
    }

    else if(action.type == "edit_todo") {
        let todoId = action.payload.todo;
        let todoText = action.payload.todoText;
        const updatedList=state.map(t => {
            if(t.id == todoId){
                t.todoData = todoText;
            }
            return t;
        }
        );
        return updatedList;
    }else if(action.type == "delete_todo") {
        let todoId = action.payload.todo;
        const updatedList= state.filter(t => t.id != todoId);
        return updatedList;
    }
}

export default todoReducer;