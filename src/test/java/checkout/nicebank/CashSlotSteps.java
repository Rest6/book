package checkout.nicebank;

import checkout.support.KnowsTheDomain;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import gherkin.lexer.Th;
import nicebank.CashSlot;

import static org.junit.Assert.assertEquals;

public class CashSlotSteps {

    KnowsTheDomain helper;

    public CashSlotSteps(KnowsTheDomain helper) {
        this.helper = helper;
    }

    @Then("^\\$(\\d+) should be dispensed$")
    public void $ShouldBeDispensed(int dollars) throws Throwable {
        assertEquals("Incorrect amount dispensed -", dollars, helper.getCashSlot().getContents());
    }

}
