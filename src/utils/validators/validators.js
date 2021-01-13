export const required = (value) => {
    if (value ) return undefined
    return 'error message'
}


export const maxLengthCreator = (maxLength) => (value) =>{
    if (value && value.length > maxLength) return "максимальная длина превышена"
    return undefined

}

export const minLengthCreator = (minLength) => (value) =>{
    if (value && value.length < minLength) return 'слишком мало символов'
    return undefined
}
