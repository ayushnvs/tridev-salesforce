// Use .apex files to store anonymous Apex.
// You can execute anonymous Apex in VS Code by selecting the
//     apex text and running the command:
//     SFDX: Execute Anonymous Apex with Currently Selected Text
// You can also execute the entire file by running the command:
//     SFDX: Execute Anonymous Apex with Editor Contents

Case caseRec = new Case();

caseRec.Type = 'Question';

CaseIdGenerator gen1 = new CaseIdGenerator();

string type = gen1.checkType(caseRec);

System.debug('Case Type: ' + type);

integer caseCount = gen1.getCaseCount(type);
string casePrefix = gen1.getCasePrefix(type);

System.debug('Case Prefix: ' + casePrefix);

string newCaseId = gen1.generateCaseId(casePrefix, caseCount);

System.debug('New Case Id: ' + newCaseId);