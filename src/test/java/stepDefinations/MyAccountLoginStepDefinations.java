package stepDefinations;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class MyAccountLoginStepDefinations {

	public WebDriver driver=null;
	@Given("^open browser$")
	public void open_browser() throws Throwable {
		System.setProperty("webdriver.chrome.driver", "jars/chromedriver.exe");
		driver = new ChromeDriver();  
		driver.manage().window().maximize();
	}

	@When("^Enter the url\"([^\"]*)\"$")
	public void enter_the_url(String arg1) throws Throwable {
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		driver.get("http://practice.automationtesting.in/");
	    
	}

	@When("^Click on My Account Menu$")
	public void click_on_My_Account_Menu() throws Throwable {
	   driver.findElement(By.linkText("My Account")).click();
	}

	@When("^Enter registered username and password$")
	public void enter_registered_username_and_password() throws Throwable {
		driver.findElement(By.id("username")).sendKeys("vinay.tomar");
		driver.findElement(By.id("password")).sendKeys("tcpladmin@1234");
	   
	}

	@When("^Click on login button$")
	public void click_on_login_button() throws Throwable {
		driver.findElement(By.name("login")).click();
	
	   
	}

	@Then("^User must successfully login to the web page$")
	public void user_must_successfully_login_to_the_web_page() throws Throwable {
	    
	}


}
