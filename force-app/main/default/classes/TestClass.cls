public class TestClass {
    public void method () {
        List<Account> accList = new List<Account>();
        Set<Id> accIds = new Set<Id>();
        
        accList = [SELECT Id, Name FROM Account LIMIT 2];
        
        Map<Id, Account> idToAccountMap = new Map<Id, Account>(accList);
        
        // system.debug('accList: ' + accList);
        if (!accList.isEmpty()) {
            for (Account acc : accList) {
            	accIds.add(acc.Id);
            }
        }
        if (!accIds.isEmpty()){
            for (Id i : accIds) {
                if(idToAccountMap.containsKey(i)) {
                    system.debug('map value' + idToAccountMap.get(i));
                }
                system.debug('accId i: ' + i);
            }        
        }
    }
}