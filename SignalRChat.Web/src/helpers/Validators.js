export const required = (e, errorMessage) => {
    if(e.target.value)
        return '';
    return errorMessage || `The field '${e.target.name}' is required`;
}