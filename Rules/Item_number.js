/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function Item_number(clientAPI) {
    var ItemNo = 10;
    let desiredLength = 6;
    let ItemNoZeroes = ItemNo.toString().padStart(desiredLength, '0');
    const currentPlateNum = clientAPI.getPageProxy().binding['@odata.readLink'];
    return clientAPI.read('/zcarcare/Services/zcarcare.service', currentPlateNum + '/_Item', []).then(function (results) {
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
