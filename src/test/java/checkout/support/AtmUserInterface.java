package checkout.support;

import checkout.hooks.ServerHooks;
import io.github.bonigarcia.wdm.WebDriverManager;
import nicebank.Account;
import nicebank.Teller;
import org.javalite.activejdbc.Base;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.events.EventFiringWebDriver;

import static org.jsoup.nodes.Entities.EscapeMode.base;

public class AtmUserInterface implements Teller {


    private final WebDriver webDriver;


    public AtmUserInterface(WebDriver webDriver) {
        this.webDriver = webDriver;
    }

    public void withdrawFrom(Account account, int dollars) {
        try {
            webDriver.get("http://localhost:" + ServerHooks.PORT);
            webDriver.findElement(By.id("Amount"))
                    .sendKeys(String.valueOf(dollars));
            webDriver.findElement(By.id("Withdraw")).click();
        }
        finally {
            webDriver.close();
        }
    }
}
