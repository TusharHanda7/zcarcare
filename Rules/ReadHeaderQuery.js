/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function ReadHeaderQuery(clientAPI) {
    var FCSite = clientAPI.evaluateTargetPath('#Page:CreateOrder/#Control:FCSite/#Value');
    var FCPlateCode = clientAPI.evaluateTargetPath('#Page:CreateOrder/#Control:FCPlateCode/#Value');
    var FCPlateNum = clientAPI.evaluateTargetPath('#Page:CreateOrder/#Control:FCPlateNum/#Value');
    var FCMobile = clientAPI.evaluateTargetPath('#Page:CreateOrder/#Control:FCMobile/#Value');
    var FCDate = clientAPI.evaluateTargetPath('#Page:CreateOrder/#Control:FCDate/#Value');
    var FCDate = FCDate.toLocaleDateString("fr-CA", {year:"numeric", month: "2-digit", day:"2-digit"});

    var filter = `$filter=Site eq '${FCSite}' and PlateNum eq '${FCPlateNum}' and PlateCode eq '${FCPlateCode}' and MobileNum eq '${FCMobile}' and CreatedOn eq ${FCDate}`;
    return filter;
}
