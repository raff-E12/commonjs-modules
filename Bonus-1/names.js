console.log(">> Sezione Sul Nome Completo");

export default function HandlePersonName (firstname, lastname){
    let name_ps = firstname;
    let last_name_ps = lastname;
    const result = `${name_ps} ${last_name_ps}.`;
    const obj_result = {firstName: name_ps, lastName: last_name_ps, complete: result};
    return obj_result;
}