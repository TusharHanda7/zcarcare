/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function CurrentDate(clientAPI) {
    //var datetime = new Date();
    //var date = datetime.slice(0,10);
    //return date;
    var date = new Date().toLocaleDateString("fr-CA", {year:"numeric", month: "2-digit", day:"2-digit"});
    return date;
}
