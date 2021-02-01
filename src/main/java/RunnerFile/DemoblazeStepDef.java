package RunnerFile;

//package stepDefinationFile;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;


public class DemoblazeStepDef {
	WebDriver driver;
	WebElement ele, ele1;
	@Given("^User is on home page of demoblaze\\.$")
	public void user_is_on_home_page_of_demoblaze()  {
	 //System.setProperty("webdriver.chrome.driver", "D:\\Projects\\Selenium\\workspace\\SeleniumEndToEndBDDFramework\\src\\main\\resources\\Driver\\chromedriver\\chromedriver.exe");
		WebDriverManager.chromedriver().setup();
		driver = new ChromeDriver();
	 driver.manage().window().maximize();
	driver.get("https://www.demoblaze.com/index.html");
	}

	@When("^User clicks on Log In link\\.$")
	public void user_clicks_on_Log_In_link()  {
	    ele =  driver.findElement(By.id("login2"));
	}

	@Then("^Login window will open\\.$")
	public void login_window_will_open() {
		ele.click();
	   	}

	@Then("^user will enter username and password$")
	public void user_will_enter_username_and_password()  {
		driver.findElement(By.id("loginusername")).sendKeys("minal");
		driver.findElement(By.id("loginpassword")).sendKeys("minal");
	}

	@Then("^click on Log In button$")
	public void click_on_Log_In_button()  {
	   driver.findElement(By.xpath("//button[contains(text(),'Log in')]")).click();
	}

	@Then("^User will login sucessfully\\.$")
	public void user_will_login_sucessfully()  {
	  // ele1.click();
	}
	
public void tearDown() {
	driver.close();
}
}
