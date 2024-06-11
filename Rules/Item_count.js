/**
* Describe this function...
* @param {IClientAPI} context
*/
export default function Item_count(context) {
    // Retrieves the current customer's information from the context
    const currentPlateNum = context.getPageProxy().binding['@odata.readLink'];
    // Counts the number of sales orders associated with the current customer.
    // var link = context.count('/carcarenew/Services/carcarenew.service', currentPlateNum + '/_Item', '');
    // var data = context.read('/carcarenew/Services/carcarenew.service', currentPlateNum + '_Item?$apply=groupby((Currency),aggregate(Price with sum as TotalAmount))', []);
    // // return data.then((sumPrices) => {
    // //     return Materials.reduce((total, Material) => {
    // //       return total + Material.price;
    // //     }, 0);
    // //   };
    // //return sumPrices;
    // var count = link.then((count) => {
    //     return count;
    // });
    // if (data.length >0){
    //     let prod = results.getItem(0);
    //     return prod.TotatAmount;
    // }
    // return data.then((sumPrices) => {
    //     sumPrices = 20.5;
    //     return sumPrices;
    // } );
    ///sap/opu/odata4/sap/zsb_off_carcare/srvd_a2x/sap/zsd_off_carcare/0001/ZC_OFF_CARCARE(Site='N001',PlateNum='3053',PlateCode='N',MobileNum='30533053',CreatedOn=2024-05-24)/_Item?$apply=groupby((Currency),aggregate(Price with sum as TotalAmount))

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
