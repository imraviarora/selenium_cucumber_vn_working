Feature: MyAccount-Login Feature
Description: This fearture will test a login functionality

Scenario: Login with valid username and password
Given open browser
When Enter the url"http://practice.automationtesting.in/"
And Click on My Account Menu
And Enter registered username and password
And Click on login button
Then User must successfully login to the web page 
