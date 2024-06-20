/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function PaymentPrice(clientAPI) {
    var FCSite = clientAPI.evaluateTargetPath('#Page:CreateOrder/#Control:FCSite/#Value');
    var FCPlateCode = clientAPI.evaluateTargetPath('#Page:CreateOrder/#Control:FCPlateCode/#Value');
    var FCPlateNum = clientAPI.evaluateTargetPath('#Page:CreateOrder/#Control:FCPlateNum/#Value');
    var FCMobile = clientAPI.evaluateTargetPath('#Page:CreateOrder/#Control:FCMobile/#Value');
    var FCDate = clientAPI.evaluateTargetPath('#Page:CreateOrder/#Control:FCDate/#Value');;
    var FCDate = FCDate.toLocaleDateString("fr-CA", {year:"numeric", month: "2-digit", day:"2-digit"});
    var FCKey = `ZC_OFF_CARCARE(Site='${FCSite}',PlateNum='${FCPlateNum}',PlateCode='${FCPlateCode}',MobileNum='${FCMobile}',CreatedOn=${FCDate})`;
    
    return clientAPI.read('/zcarcare/Services/zcarcare.service', FCKey + '/_Item', []).then(function (results) {
        let data = results._array;
        let totalPrice = 0;
        // Iterate over the array with a for loop
        for (let i = 0; i < data.length; i++) {
            totalPrice = data[i].Price + totalPrice;
        }
        return totalPrice;
    });
}
