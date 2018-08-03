package checkout.support;

import io.github.bonigarcia.wdm.WebDriverManager;
import nicebank.Account;
import nicebank.CashSlot;
import nicebank.AutomatedTeller;
import nicebank.Teller;
import org.javalite.activejdbc.Base;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.events.EventFiringWebDriver;

import java.sql.Time;
import java.util.concurrent.TimeUnit;

public class KnowsTheDomain {

    private Account myAccount;
    private Teller teller;
    private CashSlot cashSlot;
    private WebDriver webDriver;

    public Account getMyAccount() {
        if (myAccount == null){
            myAccount = new Account(14831);
            myAccount.saveIt();
        }
        return myAccount;
    }

    public Teller getTeller() {
        if (teller == null){
            teller = new AtmUserInterface(getWebDriver());
        }

        return teller;
    }

    public CashSlot getCashSlot() {
        if (cashSlot == null){
            cashSlot = new CashSlot();
        }

        return cashSlot;
    }

    public WebDriver getWebDriver() {

        if (webDriver == null){
            WebDriverManager.firefoxdriver().setup();
            webDriver = new FirefoxDriver();
        }
        return webDriver;
    }

    public KnowsTheDomain() {
        if (!Base.hasConnection()){
            Base.open(
                    "com.mysql.jdbc.Driver",
                    "jdbc:mysql://localhost/bank",
                    "teller", "Test1991%");
        }
        Account.deleteAll();
    }
}
