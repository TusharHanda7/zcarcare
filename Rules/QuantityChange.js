/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function QuantityChange(clientAPI) {
    var FCCPriceCopy = clientAPI.evaluateTargetPath('#Page:CreateItem/#Control:FCCPriceCopy/#Value');
    // let UnitPrice = clientAPI.evaluateTargetPath('#Page:CreateItem/#Control:FCCPrice/#Value');
    let Qty = clientAPI.evaluateTargetPath('#Page:CreateItem/#Control:FCCQuantity/#Value');

    if(Qty !== "" && Qty !== 0){

        var sum = parseFloat(FCCPriceCopy) * Qty ;
       sum =  parseFloat(sum).toFixed(2);
       
      var totalUnitPriceFC = clientAPI.getPageProxy().evaluateTargetPath("#Control:FCCPrice");
            totalUnitPriceFC.setValue(sum);

    }else {
        
    }
   
}
