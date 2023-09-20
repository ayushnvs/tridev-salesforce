public class CurrencyConverter {
    public static Decimal convertCurrencyToInr(Decimal eur) {
        Decimal inr = 0.0;
        
        HTTP h = new HTTP();
        HTTPRequest req = new HTTPRequest();
        
        req.setEndpoint('https://api.exchangerate.host/latest');
        req.setMethod('GET');
        
        HTTPResponse res = h.send(req);
        
        Map<String, Object> jsonBody = (Map<String, Object>)Json.deserializeUntyped(res.getBody());
        
        Map<string, object> ratesMap = (Map<string, object>)jsonBody.get('rates');
        
        Decimal eurToInrRate = (Decimal) ratesMap.get('INR');
        
        inr = eur * eurToInrRate;
        
        return inr;
    }
}