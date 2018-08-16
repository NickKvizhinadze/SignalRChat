export const required = (object) => { //TODO: rename parameter
    const value = object.node ? object.node.value : object.e.target.value;
    const name = object.node ? object.node.name : object.e.target.name;
    if (value)
        return '';
    return object.errorMessage || `The field '${name}' is required`;
}

export const min = (object) => {
    const value = object.node ? object.node.value : object.e.target.value;
    if (!value || value.length < object.parameters)
        return object.errorMessage || `The minimum length is '${object.parameters}'`;
}