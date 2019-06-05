
const defaultColor =  {
    color: "red"
};

export default (state = defaultColor, action) => {
    if(action.type === "CHANGE_COLOR") {
        return {
            ...state,
            color: action.color
        }
    } else {
        return {
            ...state
        }
    }
};