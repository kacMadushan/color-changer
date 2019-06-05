import axio from 'axios';

export const loadColor = () => {
    return (dispatch) => {
        return axio.get("http://www.colr.org/json/color/random").then((response) => {
            dispatch(changeColor("#"+response.data.new_color));
        })
    }
}

export const changeColor = (color) => ({
    type: "CHANGE_COLOR",
    color: color
});