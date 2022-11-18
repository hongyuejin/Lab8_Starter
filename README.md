# Lab 8 - Starter

### Grace Jin (worked individually)

### Where would you fit your automated tests in your Recipe project development pipeline?
Within a Github action that runs whenever code is pushed. As mentioned in the previous lab, we can see Github action as a event-listener, which it gets automatically triggered when we do certain actions like pull request, issues, and etc. By fitting our automated tests to the github action and let it be triggered everytime we push to the repo, we can achieve the goal of always testing for quality code and maintaining our general project structure while continuously integrating features/changes to our repo. </br>

### Would you use an end to end test to check if a function is returning the correct output? (yes/no)
No.</br>

### Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.
No. I think UI test would be better to test this feature since write/send a message is not a single function operation but a series of user actions. Since unit test cannot test how these individual components interact with each other on an application/feature level, it's not applicable to use unit test here. </br>

### Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.
Yes. We can achieve checking the max message length by using regular expressions to do unit tests. </br>