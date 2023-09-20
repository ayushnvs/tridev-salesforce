trigger CaseTrigger on Case (before insert) {
    CaseTriggerHandler.beforeInsert(Trigger.new);
}