let initialState = {
    friends:[
        {name: "Dina", id: 1},
        {name: "Igor", id: 2},
        {name: "Buba", id: 3}
    ]
};

const sideBarReducer = (state = initialState, action) => {
    switch (action.type) {
        case 1:
            return state;
        default:
            return state;
    }
}


export default sideBarReducer;