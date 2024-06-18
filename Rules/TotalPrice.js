/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function TotalPrice(clientAPI) {
    const currentPlateNum = context.getPageProxy().binding['@odata.readLink'];
    
    return context.read('/zcarcare/Services/zcarcare.service', currentPlateNum + '/_Item', []).then(function (results) {
        let data = results._array;
        let totalPrice = 0;
        // Iterate over the array with a for loop
        for (let i = 0; i < data.length; i++) {
            totalPrice = data[i].Price + totalPrice;
        }
        var currency = data[0].Currency;
        var ReturnText = "Total Price : " + totalPrice + " " + currency;
        return ReturnText;
    });
}
