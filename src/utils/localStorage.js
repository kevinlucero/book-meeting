export const setList = (state) =>{
    if(!!state.list)
        localStorage.setItem('state', JSON.stringify(state));
}

export const getList = () => {
    const state = localStorage.getItem('state')
    return JSON.parse(state);
}