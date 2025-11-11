import { test, expect, Browser, Page, firefox, Locator} from '@playwright/test';
import { webkit, chromium} from 'playwright';

test ('login test' , async() => {

    const browser:Browser = await chromium.launch({headless:false}) ;
    const page:Page = await browser.newPage();

    await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login");
    const emailid = await page.locator('#input-email');
    const pass = await page.locator('#input-password');

    const loginbutton:Locator = await page.locator("[value='Login']");

    emailid.fill("Mrunalinee");
    pass.fill("Mrunalinee");
    loginbutton.click();

    const pagetitle = await page.title();
    console.log("Home page title : ", pagetitle);
     
    await page.screenshot({path: 'homepage.png'});
    expect(pagetitle).toEqual('Account Login') ;

    browser.close();

});

