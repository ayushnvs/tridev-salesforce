// Use .apex files to store anonymous Apex.
// You can execute anonymous Apex in VS Code by selecting the
//     apex text and running the command:
//     SFDX: Execute Anonymous Apex with Currently Selected Text
// You can also execute the entire file by running the command:
//     SFDX: Execute Anonymous Apex with Editor Contents



// GetCasesClass gcc = new GetCasesClass();
Case rec = GetCasesClass.createCase({caseSubject: 'this.subject', caseStatus: 'New', caseOrigin: 'Phone', caseType: 'Question', casePriority: 'High'});
system.debug('record' + rec);

Case rec = GetCasesClass.createCase(caseSubject='this.subject', caseStatus='New', caseOrigin='Phone', caseType='Question', casePriority='High')
system.debug('record' + rec);


GetCasesClass.createCase(caseSubject='Test Subject', caseDescription='Test Description', caseStatus='New', caseOrigin='Email', caseType='Feature Request', casePriority='High');
system.debug('Record');



List<Case> cases = GetCasesClass.GetReqCases();

System.debug(cases);
