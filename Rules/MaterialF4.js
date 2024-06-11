/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function MaterialF4(clientAPI) {
 
    clientAPI.read('/zcarcare/Services/zcarcare.service', 'ZCDS_OFF_MATERIAL', [],  '$top=5000').then(function(oData){
        let data = oData._array;
        //alert (data.length)
        if(data){
            data = data.map(({Material, MaterialName, Price}) => ({
                DisplayValue: Material + ': ' + MaterialName + ': ' + Price ,ReturnValue: Material
            }));
          //clientAPI.getPageProxy().getControls()[0].getControl("FCCList").setPickerItems(data);
          var a = clientAPI.getPageProxy();
          var b = a.getControl('SectionedTable0');
          var c = b.getControl('FCCList2');
          c.setPickerItems(data);
          // var d = b.getControl('FCCPrice');
          // b.setValue('10');
          // return data; 
        }
    });
 
}
 