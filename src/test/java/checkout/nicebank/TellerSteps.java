package checkout.nicebank;

import checkout.support.AtmUserInterface;
import checkout.support.KnowsTheDomain;
import cucumber.api.java.en.When;
import nicebank.Account;
import nicebank.AutomatedTeller;
/*
public class TellerSteps {
    AutomatedTeller helper;
    Account account;

    public TellerSteps(AutomatedTeller helper, Account account) {
        this.helper = helper;
        this.account = account;
    }

    @When("^I withdraw \\$(\\d+)$")
    public void iWithdraw$(int amount) throws Throwable {
        helper.withdrawFrom(account, amount);
    }
}
 */


public class TellerSteps {

  KnowsTheDomain helper;

  public TellerSteps(KnowsTheDomain helper) {
      this.helper = helper;

  }

    @When("^I withdraw \\$(\\d+)$")
    public void iWithdraw$(int amount) throws Throwable {
        helper.getTeller().withdrawFrom(helper.getMyAccount(), amount);
    }
}
