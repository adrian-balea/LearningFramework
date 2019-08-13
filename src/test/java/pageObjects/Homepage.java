
package pageObjects;


import java.io.IOException;

public class Homepage extends BasePage {


    public Homepage() throws IOException {
        super();
    }

    public Homepage getHomepage() throws IOException {
        return  new Homepage();
    }
}

