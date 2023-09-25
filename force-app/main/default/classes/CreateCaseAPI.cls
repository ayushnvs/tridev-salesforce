@RESTResource(urlMapping='/createCase/')
global with sharing class CreateCaseAPI {

    @HTTPPost
    global static string doPost() {

        string contactId, orgId, status, type, subject, description, origin;

        RestRequest req = RestContext.request;
        RestResponse res = RestContext.response;

        string jsonBody = req.requestBody.toString();

        JSONParser parser = JSON.createParser(jsonBody);

        while (parser.nextToken() != null) {
            if (parser.getCurrentToken() != JSONToken.END_OBJECT) {
                string fieldName = parser.getCurrentName();
                string fieldValue = parser.getText();

                if (fieldName == 'ContactId') {
                    contactId = fieldValue;
                }
                if (fieldName == 'OrgId') {
                    orgId = fieldValue;
                }
                if (fieldName == 'Status') {
                    status = fieldValue;
                }
                if (fieldName == 'Type') {
                    type = fieldValue;
                }
                if (fieldName == 'Subject') {
                    subject = fieldValue;
                }
                if (fieldName == 'Description') {
                    description = fieldValue;
                }
                if (fieldName == 'Origin') {
                    origin = fieldValue;
                }
            }
        }

        Case recCase = new Case(contactId=contactId,
                                accountId=orgId,
                                status=status,
                                type=type,
                                subject=subject,
                                description=description,
                                origin=origin);
        
        insert recCase;

        return recCase.id;
    }
}