public with sharing class CaseIdGenerator {

    public CaseIdGenerator() {}

    public static string checkType(Case sfCase) {
        return sfCase.Type;
    }

    public static integer getCaseCount(string type) {
        Case_Count__c caseCount = [SELECT count__c FROM Case_Count__c WHERE Name =: type];
        return (integer) caseCount.count__c;
    }

    public static string getCasePrefix( string type ) {
        Case_Count__c casePrefix = [SELECT prefix__c FROM Case_Count__c WHERE Name =: type];
        return casePrefix.prefix__c;
    }

    public static string generateCaseId (string prefix, integer count) {
        integer nextCount = count + 1;
        return prefix + '-' + nextCount;
    }

    public static void updateCaseCount (string type, integer count) {
        Case_Count__c caseCount = [SELECT count__c FROM Case_Count__c WHERE Name =: type];
        caseCount.count__c = count + 1;
        update caseCount;
    }
}