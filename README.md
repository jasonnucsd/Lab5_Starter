# Lab 5 - Starter
Make sure you make a PR to your own repo's main and not the class' repo!! Otherwise you will lose points!!

Jason Naidu

## Explore: Check your understanding
1) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

I would most likely not use a unit test to test the message feature of a messaging application, unless the application did not need to consider edge cases and messaging was very rudimentary. This is because a message feature is likely far too complicated to be tested by a single unit test; there are many edge cases and moving parts.

2) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.

I would likely use a unit test to test the max message length. This is something that is easily testable and verifiable, and the application development process would benefit from automating this menial task.