package runner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)

    @CucumberOptions(
            features = ("src/test/java/featureFiles"),
            glue = ("steps/"),
            monochrome=true,
            tags = {"@checkboxes"},
            plugin = {"pretty","html:target/cucumber", "io.qameta.allure.cucumberjvm.AllureCucumberJvm"}
    )

public class MainRunner {
}
