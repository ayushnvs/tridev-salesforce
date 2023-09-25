public with sharing class GetCasesFromIR365 {
    public static string GetCases () {
        
        string testApi = 'https://my.api.mockaroo.com/sf_cases?key=f82c72e0';
        
        HTTP h = new HTTP();
        HTTPRequest req = new HTTPRequest();
        
        req.setEndpoint(testApi);
        req.setMethod('GET');

        HTTPResponse res = h.send(req);

        string jsonBody = res.getBody();

        List<Case> allCases = (List<Case>) JSON.deserialize(jsonBody, List<Case>.class);
        // system.debug(allCases);

        insert allCases;

        return '';
    }
}