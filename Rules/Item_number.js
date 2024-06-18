/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function Item_number(clientAPI) {
    var ItemNo = 10;
    let desiredLength = 6;
    let ItemNoZeroes = ItemNo.toString().padStart(desiredLength, '0');
    //var FCSite2 = clientAPI.evaluateTargetPath('#Page:DisplayWashTabPage/#Control:SectionKeyValue0');
    //var FCSite2 = clientAPI.evaluateTargetPath('#Page:-Previous');
    var FCSite = clientAPI.evaluateTargetPath('#Page:PaymentCopy/#Control:FCPSite/#Value');
    var FCPlateCode = clientAPI.evaluateTargetPath('#Page:PaymentCopy/#Control:FCPPlateCode/#Value');
    var FCPlateNum = clientAPI.evaluateTargetPath('#Page:PaymentCopy/#Control:FCPPlateNum/#Value');
    var FCMobile = clientAPI.evaluateTargetPath('#Page:PaymentCopy/#Control:FCPMobile/#Value');
    var FCDate = clientAPI.evaluateTargetPath('#Page:PaymentCopy/#Control:FCPDate/#Value');
    var FCKey = `ZC_OFF_CARCARE(Site='${FCSite}',PlateNum='${FCPlateNum}',PlateCode='${FCPlateCode}',MobileNum='${FCMobile}',CreatedOn=${FCDate})`;;
    //const currentPlateNum = pageproxy.binding['@odata.readLink'];
    //const currentPlateNum = 'Site='
    return clientAPI.read('/zcarcare/Services/zcarcare.service', FCKey + '/_Item', []).then(function (results) {
        let data = results._array;
        if(data.length == 0 ){
            ItemNoZeroes = ItemNo.toString().padStart(desiredLength, '0');
            return ItemNoZeroes;
        }else{
            const highestItemNo = data.reduce((max, item) => item.ItemNo > max ? item.ItemNo : max, data[0].ItemNo);
            var highestItemNoInt = parseInt(highestItemNo,10);
            ItemNo = highestItemNoInt + 10;
            ItemNoZeroes = ItemNo.toString().padStart(desiredLength, '0');
            return ItemNoZeroes;
        }
        
    }
    )


    // var link = ('/carcarenew/Services/carcarenew.service', currentPlateNum + '/_Item', []);
    // let data = clientAPI.read(link);
    // let array = data._array;
    // if(
    //     array.length < 1){
    //         return ItemNo;
    // }
    // if( array.length > 0){
    //     ItemNo = data[0].ItemNo + 10;
    //     return ItemNo;
    // }    
}

// return context.read('/carcarenew/Services/carcarenew.service', currentPlateNum + '/_Item', []).then(function (results) {
//     let data = results._array;
//     let totalPrice = 0;
//     // Iterate over the array with a for loop
//     for (let i = 0; i < data.length; i++) {
//         totalPrice = data[i].Price + totalPrice;
//     }
//     return totalPrice;
// });
