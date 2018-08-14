export const required = (object) => { //TODO: rename parameter
    const value = object.node ? object.node.value : object.e.target.value;
    const name = object.node ? object.node.ame : object.e.target.name;
    if(value)
        return '';
    return object.errorMessage || `The field '${name}' is required`;
}