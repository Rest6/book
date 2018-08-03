package checkout.nicebank;

import checkout.support.KnowsTheDomain;
import checkout.transforms.MoneyConverter;
import cucumber.api.PendingException;
import cucumber.api.Transform;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import nicebank.Account;
import nicebank.Money;

import static org.junit.Assert.assertEquals;

public class AccountSteps {

    KnowsTheDomain helper;


    public AccountSteps(KnowsTheDomain helper) {
        this.helper = helper;
    }

    @Given("^my account has been credited with (\\$\\d+\\.\\d+)$")
    public void myAccountHasBeenCreditedWith$(@Transform(MoneyConverter.class) Money amount) throws Throwable {
        helper.getMyAccount().credit(amount);
    }

    @Then("^the balance of my account should be (\\$\\d+\\.\\d+)$")
    public void theBalanceOfMyAccountShouldBe$(@Transform(MoneyConverter.class) Money amount) throws Throwable {
        int timeoutMilliSecs = 3000;
        int pollIntervalMilliSecs = 100;
        while (!helper.getMyAccount().getBalance().equals(amount) && timeoutMilliSecs > 0){
            Thread.sleep(pollIntervalMilliSecs);
            timeoutMilliSecs -= pollIntervalMilliSecs;
        }
        assertEquals("Incorrect account balance -", amount, helper.getMyAccount().getBalance());
    }

}
