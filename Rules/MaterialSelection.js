/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function MaterialSelection(clientAPI) {
    var oSeletedItem = clientAPI.evaluateTargetPath('#Page:CreateItem/#Control:FCCList/#Value/0/BindingObject');
    var price = oSeletedItem.Price;

var oSeletedItem = clientAPI.evaluateTargetPath('#Page:CreateItem/#Control:FCCList/#Value/0/BindingObject');
    var price = oSeletedItem.Price
if (price !== ""){
    // let segControl = clientAPI.getPageProxy().getControl('SectionFormCell0').getControl('FCCPrice');
    // segControl.setValue(price);

    var totalUnitPriceFC = clientAPI.getPageProxy().evaluateTargetPath("#Control:FCCPrice");
            totalUnitPriceFC.setValue(price);
// Saving Netprice in one more field it will be hide from screen just for calulation
            var totalUnitPriceFCCopy = clientAPI.getPageProxy().evaluateTargetPath("#Control:FCCPriceCopy");
            totalUnitPriceFCCopy.setValue(price);

}
     
    return price;
                                                                          
    // const selectedValue = clientAPI.evaluateTargetPath('#Page:CreateItem/#Control:ListPicker/#SelectedValue');
    // console.log("Seleted Item", selectedValue)
    // const { Description: description } = selectedValue[0].Price;
    // return description;



}
