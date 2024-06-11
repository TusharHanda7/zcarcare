/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function MaterialPrice(clientAPI) {
    const FCCList = clientAPI.getControl("FCCList");
    var Material = FCCList.getValue();
    return Material;
}
