$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("cash_withdrawal.feature");
formatter.feature({
  "line": 1,
  "name": "Cash Withdrawal",
  "description": "",
  "id": "cash-withdrawal",
  "keyword": "Feature"
});
formatter.before({
  "duration": 448343,
  "status": "passed"
});
formatter.before({
  "duration": 12861633,
  "status": "passed"
});
formatter.before({
  "duration": 190846043,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Successful withdrawal from an account in credit",
  "description": "",
  "id": "cash-withdrawal;successful-withdrawal-from-an-account-in-credit",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "my account has been credited with $100.00",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I withdraw $20",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "$20 should be dispensed",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "the balance of my account should be $80.00",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "$100.00",
      "offset": 34
    }
  ],
  "location": "AccountSteps.myAccountHasBeenCreditedWith$(Money)"
});
formatter.result({
  "duration": 251899538,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 12
    }
  ],
  "location": "AccountSteps.iWithdraw$(int)"
});
formatter.result({
  "duration": 22114857821,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 1
    }
  ],
  "location": "CashSlotSteps.$ShouldBeDispensed(int)"
});
formatter.result({
  "duration": 2408915,
  "error_message": "java.lang.AssertionError: Incorrect amount dispensed - expected:\u003c20\u003e but was:\u003c0\u003e\n\tat org.junit.Assert.fail(Assert.java:88)\n\tat org.junit.Assert.failNotEquals(Assert.java:834)\n\tat org.junit.Assert.assertEquals(Assert.java:645)\n\tat checkout.nicebank.CashSlotSteps.$ShouldBeDispensed(CashSlotSteps.java:21)\n\tat ✽.Then $20 should be dispensed(cash_withdrawal.feature:6)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "$80.00",
      "offset": 36
    }
  ],
  "location": "AccountSteps.theBalanceOfMyAccountShouldBe$(Money)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 75647,
  "status": "passed"
});
formatter.after({
  "duration": 682818,
  "error_message": "org.javalite.activejdbc.DBException: Can\u0027t call rollback when autocommit\u003dtrue\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat com.mysql.jdbc.Util.handleNewInstance(Util.java:411)\n\tat com.mysql.jdbc.Util.getInstance(Util.java:386)\n\tat com.mysql.jdbc.SQLError.createSQLException(SQLError.java:1015)\n\tat com.mysql.jdbc.SQLError.createSQLException(SQLError.java:989)\n\tat com.mysql.jdbc.SQLError.createSQLException(SQLError.java:975)\n\tat com.mysql.jdbc.SQLError.createSQLException(SQLError.java:920)\n\tat com.mysql.jdbc.ConnectionImpl.rollback(ConnectionImpl.java:5056)\n\tat org.javalite.activejdbc.DB.rollbackTransaction(DB.java:589)\n\tat org.javalite.activejdbc.Base.rollbackTransaction(Base.java:296)\n\tat checkout.hooks.ResetHooks.rollback(ResetHooks.java:17)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:365)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeWithRerun(JUnit4Provider.java:273)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:238)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:159)\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:383)\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:344)\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:125)\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:417)\nCaused by: com.mysql.jdbc.exceptions.jdbc4.MySQLNonTransientConnectionException: Can\u0027t call rollback when autocommit\u003dtrue\n\t... 53 more\n",
  "status": "failed"
});
formatter.after({
  "duration": 27042383,
  "status": "passed"
});
});