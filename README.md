PlayWright README.md

<img width="1919" height="858" alt="Screenshot 2025-11-27 141559" src="https://github.com/user-attachments/assets/6f8dd599-a8a8-4f91-a97b-57aa00f995c6" />

[Day1](Day-1)
[Tools](Performance-Testing-Tools)
[STLC](Software-Testing-Life-Cycle)


















Day 1



What is Software Testing?
Software Testing is a process of verifying and validating whether the Software Product or Application is working as expected or not. The complete testing includes identifying errors and bugs that cause future problems for the performance of an application.

Software testing mainly divides into the two parts, which is used in the Software Development Process:
1.	Verification: This step involves checking if the software is doing what is supposed to do. It’s like asking, "Are we building the product the right way?"
2.	Validation: This step verifies that the software actually meets the customer's needs and requirements. It’s like asking, "Are we building the right product?"



 

1.	Manual Testing is a technique to test the software that is carried out using the functions and features of an application. Which means manual testing will check the defect manually with trying one by one function is working as expected.

2.	Automation Testing It is a technique where the Tester writes scripts independently and uses suitable Software or Automation Tools to test the software. It is an Automation Process of a Manual Process. It allows for executing repetitive tasks without the use of a Manual Tester.
===============================================================
3.	White Box Testing is a software testing technique that involves testing the internal structure and workings of a software application. The tester has access to the source code and uses this knowledge to design test cases that can verify the correctness of the software at the code level.
4.	Black-Box Testing is a type of software testing in which the tester is not concerned with the internal knowledge or implementation details of the software but rather focuses on validating the functionality based on the provided specifications or requirements.

5.	Gray Box Testing is a software testing technique that is a combination of the Black Box Testing technique and the White Box Testing technique. In the Black Box Testing technique, the tester is unaware of the internal structure of the item being tested and in White Box Testing the internal structure is known to the tester
===========================================================
6.	Functional Testing is a type of Software Testing in which the system is tested against the functional requirements and specifications. Functional testing ensures that the requirements or specifications are properly satisfied by the application. 
7.	Non-Functional Testing is a type of Software Testing that is performed to verify the non-functional requirements of the application. It verifies whether the behavior of the system is as per the requirement or not. It tests all the aspects that are not tested in functional testing.
===========================================================
8.	Unit Testing is a method of testing individual units or components of a software application. It is typically done by developers and is used to ensure that the individual units of the software are working as intended.
9.	Integration Testing is a method of testing how different units or components of a software application interact with each other. It is used to identify and resolve any issues that may arise when different units of the software are combined
10.	System Testing is a type of software testing that evaluates the overall functionality and performance of a complete and fully integrated software solution. It tests if the system meets the specified requirements and if it is suitable for delivery to the end-users.
===========================================================
11.	Performance Testing is a type of software testing that ensures software applications perform properly under their expected workload. It is a testing technique carried out to determine system performance in terms of sensitivity, reactivity, and stability under a particular workload

 

Load testing simulates a real-world load on the system to see how it performs under stress. It helps identify bottlenecks and determine the maximum number of users or transactions the system can handle. It checks the product's ability to perform under anticipated user loads. The objective is to identify performance congestion before the software product is launched in the market

Stress testing is a type of load testing that tests the system's ability to handle a high load above normal usage levels. It helps identify the breaking point of the system and any potential issues that may occur under heavy load conditions. It involves testing a product under extreme workloads to see whether it handles high traffic or not. The objective is to identify the breaking point of a software product.

Spike testing is a type of load testing that tests the system's ability to handle sudden spikes in traffic. It helps identify any issues that may occur when the system is suddenly hit with a high number of requests. It tests the product's reaction to sudden large spikes in the load generated by users.

Soak testing is a type of load testing that tests the system's ability to handle a sustained load over a prolonged period. It helps identify any issues that may occur after prolonged usage of the system.

Endurance testing is similar to soak testing, but it focuses on the long-term behavior of the system under a constant load. It is performed to ensure the software can handle the expected load over a long period.

In Volume testing , a large number of data is saved in a database and the overall software system's behavior is observed. The objective is to check the product's performance under varying database volumes.

In Scalability testing , the software application's effectiveness is determined by scaling up to support an increase in user load. It helps in planning capacity additions to your software system.

Performance Testing Attributes
•	Speed: It determines whether the software product responds rapidly.
•	Scalability: It determines the amount of load the software product can handle at a time.
•	Stability: It determines whether the software product is stable in case of varying workloads.
•	Reliability: It determines whether the software product is secure or not.

Performance Testing Tools
a)	Apache JMeter: is an open-source tool used for performance testing and load testing of applications. It simulates multiple users sending requests to a server, collecting performance metrics to analyze the application's behavior under different load conditions.
b)	Open STA (Open, Systems Testing Architecture) Apache JMeter is an open-source tool used for performance testing and measuring the load and stress on web applications. Its main function is to simulate multiple users accessing a site simultaneously to evaluate its performance and scalability.
c)	Load Runner: LoadRunner is a performance testing tool used to simulate virtual users and analyze the behavior of applications under load. It helps identify performance bottlenecks by measuring system performance and response times under varying conditions.
d)	Web Load: Web Load is a performance testing tool designed to test the scalability and reliability of web applications under various load conditions. The function by sending user requests to a web server, which processes the requests and sends back the appropriate web pages or data.
e)	Gatling: Gatling is an open-source load testing tool designed to analyze and measure the performance of web applications. Its main function is to simulate a large number of users interacting with a website to identify performance bottlenecks and ensure the site can handle high traffic.
f)	BlazeMeter: BlazeMeter is a cloud-based testing platform designed to simulate large-scale user load and measure application performance. It allows developers and testers to run continuous performance tests and analyze results to ensure their applications can handle high traffic and perform optimally under stress.

12.	Usability Testing in software testing is a type of testing, that is done from an end user’s perspective to determine if the system is easily usable. Usability testing is generally the practice of testing how easy a design is to use on a group of representative users.
13.	Compatibility Testing is software testing that comes under the non functional testing category, and it is performed on an application to check its compatibility (running capability) on different platforms/environments. This testing is done only when the application becomes stable.

 	
 

================================================================
14.	Different Levels of Software Testing
1.	Unit Testing: In this type of testing, errors are detected individually from every component or unit by individually testing the components or units of software to ensure that they are fit for use by the developers. It is the smallest testable part of the software.

2.	Integration Testing: In this testing, two or more modules which are unit tested are integrated to test i.e., technique interacting components, and are then verified if these integrated modules work as per the expectation or not, and interface errors are also detected.

 



3.	System Testing: In system testing, complete and integrated Software are tested i.e., all the system elements forming the system are tested as a whole to meet the requirements of the system.

4.	Acceptance Testing: This is a kind of testing conducted to ensure that the requirements of the users are fulfilled before its delivery and that the software works correctly in the user’s working environment

========================================================
Why is Importance of Software Testing?

•	Defects can be Identified Early: Software testing is important because if there are any bugs they can be identified early and can be fixed before the delivery of the software.
•	Improves Quality of Software: Software Testing uncovers the defects in the software, and fixing them improves the quality of the software.
•	Increased Customer Satisfaction: Software testing ensures reliability, security, and high performance which results in saving time, costs, and customer satisfaction.
•	Helps with Scalability: Software testing type non-functional testing helps to identify the scalability issues and the point where an application might stop working.
•	Saves Time and Money: After the application is launched it will be very difficult to trace and resolve the issues, as performing this activity will incur more costs and time. Thus, it is better to conduct software testing at regular intervals during software development.
========================================================

Best Practices for Software Testing

1.	Continuous Testing: Project teams test each build as it becomes available thus it enables software to be validated in real environments earlier in the development cycle, reducing risks and improving the functionality and design.
2.	Involve Users: It is very important for the developers to involve users in the process and open-ended questions about the functionality required in the application. This will help to develop and test the software from the customer's perspective.
3.	Divide Tests into Smaller Parts: Dividing tests into smaller fractions save time and other resources in environments where frequent testing needs to be conducted. This also helps teams to make better analyses of the tests and the test results.
4.	Metrics and Reporting: Reporting enables the team members to share goals and test results. Advanced tools integrate the project metrics and present an integrated report in the dashboard that can be easily reviewed by the team members to see the overall health of the project.
5.	Don't Skip Regression Testing: Regression testing is one of the most important steps as it encourages the validation of the application. Thus, it should not be skipped.
6.	Programmers Should Avoid Writing Tests: Test cases are usually written before the start of the coding phase so it is considered a best practice for programmers to avoid writing test cases as they can be biased towards their code and the application.
7.	Service Virtualization: Service virtualization simulates the systems and services that are not yet developed or are missing. Thus, enabling teams to reduce dependency and start the testing process sooner. They can modify, and reuse the configuration to test different scenarios without having to alter the original environment.
=======================================================

Benefits of Software Testing

•	Product Quality: Testing ensures the delivery of a high-quality product as the errors are discovered and fixed early in the development cycle.
•	Customer Satisfaction: Software testing aims to detect the errors or vulnerabilities in the software early in the development phase so that the detected bugs can be fixed before the delivery of the product. Usability testing is a type of software testing that checks the application for how easily usable it is for the users to use the application.
•	Cost-Effective: Testing any project on time helps to save money and time for the long term. If the bugs are caught in the early phases of software testing, it costs less to fix those errors.
•	Security: Security testing is a type of software testing that is focused on testing the application for security vulnerabilities from internal or external sources.
========================================================
========================================================

Software Testing is a method to assess the functionality of the software program. The process checks whether the actual software matches the expected requirements and ensures the software is bug-free. The purpose of software testing is to identify the errors, faults, or missing requirements in contrast to actual requirements. It mainly aims at measuring the specification, functionality, and performance of a software program or application.

 



1.	Saves Money
•	Software testing offers numerous advantages, with cost-effectiveness being a key factor that attracts companies to opt for testing services.
•	Software testing involves various stages and projects.
•	Discovering bugs early on means they can be fixed at a lower cost.
2. Security
•	It is every other essential factor why software programs trying out need to not be taken into consideration.
•	It is considered to be the most susceptible and touchy component. There are a group of conditions in which the statistics and information of the users are stolen and they are used for the benefits.
•	It is considered to be the motive why humans look for nicely tested and reliable products.
•	elected product undergoes testing, and the consumer can be ensured that they are going to receive a dependable product.
•	The non-public information of the user may be secure. Users can receive merchandise that might be free from vulnerability with the aid of software checking out.
3. Quality of the product
•	To make sure that the unique product involves life, it needs to work by the following.
•	Following the desires of the product is a prerequisite as it is beneficial in getting the prerequisite consequences.
•	Products have to be serving the user in a single way or the opposite. It is a must that it's far going to bring the price, as according to the promise.
•	Hence, it should be characteristic in a whole manner for ensuring a powerful purchaser enjoys. It is also important to check the compatibility of the device.
•	For instance, in case, you are making plans to launch a utility, it is a need to test the compatibility of the identical in a big selection of operating structures and devices.
4. Satisfaction of the consumer
•	The primary goal of the proprietor of the products is to provide the pleasant pride of the customers.
•	The reasons why it's far necessary to opt for software testing is because it offers the prerequisite and perfect consumer revel.
•	As you choose the excellent venture inside the saturated assignment, you may be able to incomes the reputation of dependable customers.
•	Thus, you'll acquire lengthy-term blessings by using opting for software programs to try out. Earning the belief of the consumer is sincerely not a clean undertaking, mostly in case the product is determined to be functioning and glitching on every occasion or the opposite.
•	You yourself have used several merchandises and also you without a doubt had numerous terrible studies thanks to that you might have deleted the utility.
•	The market is without a doubt saturated within the present days.
•	The first impression is sincerely essential and if you fail to give the identical, users are going to locate some other product for you to accomplish all of the necessities.
5. Enhancing the development technique
•	With the aid of Quality Assurance, you could find a big selection of situations and mistakes, for the reproduction of the error.
•	It is really simple and the builders want to repair the same very quickly. In addition to this, software testers need to be operating with the development team parallelly, which is beneficial in the acceleration of the improvement method.
6. Easy even as adding new capabilities
•	The extra interconnected and older the code, the tougher it's far to exchange. Tests counteract this calcification tendency through allowing builders to confidently add new capabilities.
•	As a new developer, changing older parts of your codebase may be terrifying, however with exams, you’ll as a minimum recognize if you’ve broken some thing essential.
•	This enables in making your software program stand beforehand inside the marketplace, and beat the competition.
7. Determining the performance of the software program
•	If you discover software program or software that has low or reduced overall performance, you'll find that it brings your recognition down in the marketplace.
•	By prioritizing software trying out, businesses can supply dependable, stable, and amazing merchandise that meet person needs and exceed expectancies in brand new competitive market.


Software testing techniques

1.	Manual testing – Involves manual inspection and testing of the software by a human tester.
2.	Automated testing – Involves using software tools to automate the testing process.
3.	Functional testing – Tests the functional requirements of the software to ensure they are met.
4.	Non-functional testing – Tests non-functional requirements such as performance, security, and usability.
5.	Unit testing – Tests individual units or components of the software to ensure they are functioning as intended.
6.	Integration testing – Tests the integration of different components of the software to ensure they work together as a system.
7.	System testing – Tests the complete software system to ensure it meets the specified requirements.
8.	Acceptance testing – Tests the software to ensure it meets the customer’s or end-user’s expectations.
9.	Regression testing – Tests the software after changes or modifications have been made to ensure the changes have not introduced new defects.
10.	Performance testing – Tests the software to determine its performance characteristics such as speed, scalability, and stability.
11.	Security testing – Tests the software to identify vulnerabilities and ensure it meets security requirements.
12.	Exploratory testing – A type of testing where the tester actively explores the software to find defects, without following a specific test plan.
13.	Boundary value testing – Tests the software at the boundaries of input values to identify any defects.
14.	Usability testing – Tests the software to evaluate its user-friendliness and ease of use.
15.	User acceptance testing (UAT) – Tests the software to determine if it meets the end-user’s needs and expectations.
=======================================================
=======================================================

Software Testing Life Cycle (STLC)


The Software Testing Life Cycle (STLC) is a process that verifies whether the Software Quality meets the expectations or not. STLC is an important process that provides a simple approach to testing through the step-by-step process, which we are discussing here. Software Testing Life Cycle (STLC) is a fundamental part of the Software Development Life Cycle (SDLC).

Phases of STLC


 


Requirement Analysis is the first phase where the QA/testing team understands what needs to be tested. The activities that take place during the Requirement Analysis stage include:
•	Reviewing the software requirements document (SRD) and other related documents
•	Interviewing stakeholders to gather additional information
•	Identifying any ambiguities or inconsistencies in the requirements
•	Identifying any missing or incomplete requirements
•	Identifying any potential risks or issues that may impact the testing process

Test Planning is the most crucial phase where the overall test strategy and plan are created. The major activities carried out during the Test Planning phase include:
•	Identifying the testing objectives and scope
•	Developing a test strategy: selecting the testing methods and techniques that will be used
•	Identifying the testing environment and resources needed
•	Identifying the test cases that will be executed and the test data that will be used
•	Estimating the time and cost required for testing
•	Identifying the test deliverables and milestones
•	Assigning roles and responsibilities to the testing team
•	Reviewing and approving the test plan

The Test Case Development phase testers design detailed test cases and prepare the necessary test data. The main activities performed during the Test Case Development phase include:
•	Identifying the test cases that will be developed
•	Writing test cases that are clear, concise and easy to understand
•	Creating test data and test scenarios that will be used in the test cases
•	Identifying the expected results for each test case
•	Reviewing and validating the test cases
•	Updating the requirement traceability matrix (RTM) to map requirements to test cases


Test Environment Setup defines the hardware, software and network conditions under which testing will be executed. The activities involved in the Test Environment Setup phase include:
•	Install and configure required software, tools and databases.
•	Set up servers, browsers, operating systems and devices.
•	Prepare access credentials and permissions.
•	Validate the environment before test execution.

In Test Execution phase prepared test cases are executed in the defined environment. The activities performed during the Test Execution phase include:
•	Run manual or automated test cases.
•	Log defects with details like severity and priority.
•	Retest fixed defects (defect retesting).
•	Perform regression testing if required.
•	Collect and analyze test results.
•	Document and share test reports.

Test Closure is the final phase where testing activities are completed and documented. The final activities carried out during the Test Closure phase include:
•	Prepare a Test Summary Report (test cases executed, pass/fail count, defects found/resolved).
•	Ensure all defects are tracked and closed.
•	Clean up the test environment.
•	Archive test cases, data and reports.
•	Conduct a retrospective for lessons learned.
•	Share knowledge with stakeholders.


Aspect	SDLC (Software Development Life Cycle)	STLC (Software Testing Life Cycle)
Definition	A process that defines all phases of software development, from requirements gathering to deployment & maintenance.	A process that defines all phases of software testing, from requirement analysis to test closure.
Focus	Focuses on building the software.	Focuses on verifying and validating the software.
Phases	a)	Requirement gathering
b)	Design
c)	Development
d)	Testing
e)	Deployment 
f)	Maintenance	a)	Requirement analysis
b)	Test planning
c)	Test case development
d)	Test environment setup
e)	Test execution
f)	Test closure.
Performed By	a)	Developers
b)	business analysts
c)	project managers
d)	QA team (partly).	QA/testing team primarily.
Deliverables	Software product, design documents, user manuals, deployment package.	Test plan, test cases, defect reports, test summary, closure report.
Objective	To deliver a working software product that meets user requirements.	To ensure the product is defect-free and high quality before release.
Relation	Covers the entire lifecycle of the software.	Part of SDLC, focused only on testing.



 


 



 



 

====================================================
====================================================

Manual testing is a type of testing in which we do not use any tools or automation to perform the testing. In this testing, testers make test cases for the codes test the software, and give the final report about that software. Manual testing is time-consuming testing because humans do it and there is a chance of human errors.
•	Manual testing is conducted to discover bugs in the developed software application.
•	The tester checks all the essential features of the application.
•	The tester executes test cases and generates test reports without any help from the automation tools.
•	It is conducted by the experienced tester to accomplish the testing process

When to Perform Manual Testing?

Manual testing should be conducted when:
•	Flexibility is required: With manual tests, QA can quickly test and provide fast feedback.
•	Short-term projects: It is not advisable to invest more money and effort to set up short-term projects that focus on minor features because such setup will require huge effort and money that would be too high for such small projects.
•	When testing end-user usability: Humans can use their sensibilities to understand the application behaviour if the application offers a satisfactory user journey. No machine can perform this task as humans can.


Manual testing is done when automation can't be used or isn't enough. Here are key reasons and scenarios:

•	Exploratory Testing: Discovering issues in new or unclear features by exploring them.
•	Usability Testing: Checking if the UI is easy to use and looks good.
•	Ad-Hoc Testing: Doing quick, informal tests after updates or bug fixes.
•	Visual/GUI Testing: Checking the layout, colors, or how the site looks across different browsers.



Benefits of Manual Testing

•	Easy hiring: In manual testing, anyone can test so it helps in easy hiring.
•	Fast feedback: Manual testing helps to provide fast and accurate feedback.
•	Versatile: Manual test cases can be applied to many test cases.
•	Flexible: Manual testing is flexible as it can adapt easily to changes in the user interface.
•	Less expensive: Manual testing is less expensive as one does not need to spend a budget on automation tools and processes.


Limitations of Manual Testing

Here are the Limitations of Manual Testing:
•	Not all defects detected: In manual cases, there is no assurance that there will be 100% test coverage as a result some of the defects may not be detected.
•	High expertise: Although manual testing can be done by anyone, in some complex cases high expertise is required.
•	Lots of time: Manual testing times extensive activity. It requires a lot of time to manually develop test cases so that all the functionalities are covered and tested.
•	Cannot be recorded: Manual testing process cannot be recorded so it is not possible to reuse the manual test cases.
•	Less reliable: Manual testing is less reliable as it is conducted by humans and all test cases are designed by humans so there are chances for human error.



Automation testing is a type of testing in which we take the help of tools (automation) to perform the testing. It is faster than manual testing because it is done with some automation tools. There is no chance of any human errors.
•	It relies entirely on pre-scripted test which runs automatically to compare actual results with expected results.
•	Automation testing helps the tester determine whether the application performs as expected or not.
•	It allows the execution of repetitive tasks and regression tests.
•	Automation requires manual effort to create initial testing scripts.

When to Perform Automation Testing?

•	When need to run repetitive tasks: Automated tests are the best option in scenarios where there is a requirement to run repetitive tests. For example, in the case of regression, tests must be executed periodically to make sure that the newly added code does not disrupt the existing functionality of the software.
•	When human resources are scarce: Automated tests are viable and the best option to get tests executed within deadlines when there are only a limited number of dedicated testers.


Benefits of Automation Testing

•	Finds more bugs: Automation testing helps to find more bugs and defects in the software.
•	Reduce time for regression tests: Automated tests are suitable for regression tests as the tests can be executed in a repetitive manner periodically.
•	The process can be recorded: This is one of the benefits of using automation tests as these tests can be recorded and thus allows to reuse of the tests.
•	No fatigue: As automation, tests are executed using software tools so there is no fatigue or tiring factor as in manual testing.
•	Increased test coverage: Automation tests help to increase the test coverage as using the tool for testing helps to make sure that not even the smallest unit is left for testing.


Limitations of Automation Testing

•	Difficult to inspect visual elements: In automated tests, it is difficult to get insight into the visual elements like color, font size, font type, button sizes, etc. as there is no human intervention.
•	High cost: Automation tests have a high cost of implementation as tools are required for testing, thus adding the cost to the project budget.
•	Test maintenance is costly: In automation tests, test maintenance is costly.
•	Not false proof: Automation tests also have some limitations and mistakes in automated tests can lead to errors and omissions.
•	Trained employees required: For conducting automated tests, trained employees with knowledge of programming languages and testing knowledge are required.



Parameters	Manual Testing	Automation Testing
Definition	In manual testing, the test cases are executed by the human tester.	In automated testing, the test cases are executed by the software tools.
Processing Time	Manual testing is time-consuming.	Automation testing is faster than manual testing.
Resources requirement	Manual testing takes up human resources.	Automation testing takes up automation tools and trained employees.
Exploratory testing	Exploratory testing is possible in manual testing.	Exploratory testing is not possible in automation testing.
Framework requirement	Manual testing doesn't use frameworks.	Automation testing uses frameworks like Data Driven, Keyword, etc.
Reliability	Manual testing is not reliable due to the possibility of manual errors.	Automated testing is more reliable due to the use of automated tools and scripts.
Investment	In manual testing, investment is required for human resources.	In automated testing, investment is required for tools and automated engineers.
Test results availability	In manual testing, the test results are recorded in an excel sheet so they are not readily available.	In automated testing, the test results are readily available to all the stakeholders in the dashboard of the automated tool.
Human Intervention	Manual testing allows human observation; thus, it is useful in developing user-friendly systems.	Automated testing is conducted by automated tools and scripts so it does not involve assurance of user-friendliness.
Performance testing	Impractical for systematic performance testing (e.g., load, stress, spike testing).	Supports performance testing (e.g., load, stress, spike testing with tools like JMeter).
Batch Testing	In manual testing, batch testing is not possible.	You can batch multiple tests for fast execution.
Programming knowledge	There is no need for programming knowledge in manual testing.	Programming knowledge is a must in case of automation testing as using tools requires trained staff.
Documentation	In manual testing, there is no documentation.	In automation testing, the documentation acts as a training resource for new developer. He/ She can look into unit test cases and understand the code base quickly.
When to Use?	Manual testing is usable for Exploratory testing, Usability testing, and Adhoc testing.	Automated testing is suitable for Regression testing, Load testing, and Performance testing.






Extra 


Exploratory Testing is a type of software testing in which the tester is free to select any possible methodology to test the software. It is an unscripted approach to software testing. In exploratory testing, software developers use their learning, knowledge, skills, and abilities to test the software developed by themselves. Exploratory testing checks the functionality and operations of the software as well as identify the functional and technical faults in it. Exploratory testing aims to optimize and improve the software in every possible way. The exploratory testing technique combines the experience of testers with a structured approach to testing. It is often performed as a black box testing technique. Exploratory testing is an unscripted testing technique. Exploratory testing is first named "ad-hoc testing".

The following 4 steps are involved in the exploratory testing process: 
 


1.	Learn: This is the first phase of exploratory testing in which the tester learns about the faults or issues that occur in the software. The tester uses his/her knowledge, skill, and experience to observe and find what kind of problem the software is suffering from. This is the initial phase of exploratory testing. It also involves different new learning for the tester.
2.	Test Case Creation: When the fault is identified i.e. tester comes to know what kind of problem the software is suffering from then the tester creates test cases according to defects to test the software. Test cases are designed by keeping in mind the problems end users can face.
3.	Test Case Execution: After the creation of test cases according to end user problems, the tester executes the test cases. Execution of test cases is a prominent phase of any testing process. This includes the computational and operational tasks performed by the software to get the desired output.
4.	Analysis: After the execution of the test cases, the result is analyzed and observed whether the software is working properly or not. If the defects are found then they are fixed and the above three steps are performed again. Hence this whole process goes on in a cycle and software testing is performed.



Parameters	Exploratory Testing	Automated Testing
Documentation	No need to maintain documentation.	Proper documentation is required.
Test cases	Test cases are determined during testing.	Test cases are determined in advance.
Is testing reproducible	Testing cannot be reproduced, only defects can be reproduced.	Testing can be reproduced.
Investment in documentation	There is no investment in preparing documentation.	There is a significant investment in preparing documentation and test scripts. scripts.
Spontaneity	This is spontaneous and directed by requirements and exploring during testing. 	This is well-planned and directed from requirements.
Cost	It usually requires less tools and scripting, which results in cheaper initial expenses. Ongoing manual testing initiatives, however, can raise long-term expenses.	Higher initial costs for tools and script development are involved. After that, it can result in cost reductions over time when using automated testing.
Skills	It depends on the tester's abilities, inventiveness, and intuition. Ideal for situations when human discretion and flexibility are essential.	Technical expertise is needed for script development, preservation and troubleshooting.


 

Monkey testing – random testing where in application you start doing testing by providing some random data (invalid data) and make sure whether application is stable or not. Main purpose of monkey testing is to find crashes in the system. It as also known as fuss testing.




Fuzz testing
Fuzz Testing is a Software Testing technique that uses invalid, unexpected, or random data as input and then checks for exceptions such as crashes and potential memory leaks. It is an automated testing technique that is performed to describe the system testing processes involving randomized or distributed approaches. 

During fuzz testing, a system or software application can have a lot of different bugs or glitches related to data input. Barton Miller at the University of Wisconsin in 1989 first developed fuzz testing, also known as fuzzing, which is a type of software testing that involves providing invalid, unexpected, or random data as inputs to a system to identify potential security vulnerabilities or crashes. The goal of fuzz testing is to identify issues that can be exploited by an attacker, such as buffer overflows, SQL injection, or other types of input-validation issues.

Smoke testing
Smoke testing, also known as "Build Verification Testing" or "Build Acceptance Testing," is a type of software testing that is typically performed at the beginning of the development process to ensure that the most critical functions of a software application are working correctly. It is used to quickly identify and fix any major issues with the software before more detailed testing is performed. The goal of smoke testing is to determine whether the build is stable enough to proceed with further types of testing.


Sanity testing

Sanity testing is a type of software testing that aims to quickly evaluate whether the basic functionality of a new software build is working correctly or not. It is usually performed on builds that are in the initial stages of development before the full regression testing is performed. Sanity testing is limited in scope and typically focuses on critical functionality and does not aim to uncover every possible error or bug in the system. It is a quick and lightweight way to ensure that the software is functioning as expected before further testing is conducted.

It is a subset of regression testing. Sanity testing is performed to ensure that the code changes that are made are working properly. Sanity testing is a stoppage to check whether testing for the build can proceed or not. The focus of the team during the sanity testing process is to validate the functionality of the application and not detailed testing. Sanity testing is generally performed on a build where the production deployment is required immediately like a critical bug fix. 


Regression Testing involves re-executing a previously created test suite to verify that recent code changes haven't caused new issues. This verifies that updates, bug fixes, or enhancements do not break the functionality of the application.

 


1.	Identify Code Changes: Analyze the source code to determine which areas have been modified, such as new features, bug fixes, or optimizations.
2.	Debug and Fix Failures: If existing test cases fail due to changes, debug the code to identify and resolve defects.
3.	Modify Code: Apply necessary updates to the code to incorporate changes or fixes.
4.	Select Test Cases: Choose relevant test cases from the existing test suite that cover modified and affected areas. Add new test cases if needed to address new functionality.
5.	Execute Regression Tests: Run the selected test cases, either manually or using automated tools, to verify system behavior.
6.	Analyze Results: Review test outcomes to identify regressions, document issues, and recommend fixes.
7.	Retest as Needed: If defects are found, fix them and re-run tests to confirm resolution.


 


What are the Priority and Severity in Software Testing?
Priority is the order in which the developer should resolve the defect, on the other hand, Severity is the degree of impact that defect has on the operation of the product.
•	Priority indicates how soon the bug is fixed and severity shows the seriousness of the defect on the product functionality.
•	Priority is driven by the business values and Severity is driven by the functionality of the product.


What is Test Harness?
Test Harness is a collection of stubs, drivers, and other supporting tools that are required to automate the test execution. It executes tests using a test library and generates test reports.
•	It helps automate the testing procedures and thus increases the productivity of the system through automation.
•	A test harness is a collection of numerous things to test software and report its results.
•	It helps developers to measure the coverage at a code level.

What is a Test Bed?
Test Bed is a test execution environment that is configured for testing. It consists of specific hardware, software, operating system, network configuration, other system software, and application software.


What is Test Closure?
Test closure is a document that provides a summary of all the tests covered during the software development lifecycle.
•	It includes various activities like test completion reporting, a summary of test results as well and the test completion matrix.
•	It gives us an outline of the tests conducted during the software testing and details of the errors and bugs found and resolved during the testing phase.


Defect cascading in software testing means when one defect leads to the discovery of other defects. It often occurs because the original defect was not fixed properly. This cascading causes a chain reaction of errors, making it difficult to source of the problem.
•	It can lead to many issues like minor performance slowdowns, system crashes, etc making it a severe risk to developers and testers.
•	Understanding defect cascading can help to prevent them from happening in their process.


Test drivers are used in Bottom-up integration testing to simulate the behavior of the upper-level modules that are not yet integrated.
•	They act as temporary replacements for a calling module.
•	They give the same output as that of the actual product.
•	They are used when the software needs to interact with an external system and are usually more complex than stubs.


Stubs are used in Top-Down integration testing thus increasing the efficiency of the testing process.
•	They are developed by software developers to use them in place of modules, if the respective modules are not developed, missing in the developing stage, or currently unavailable.
•	It simulates a module that has all the capabilities of the unavailable module

Defect triage is a procedure that involves detecting and prioritizing problems, allocating them to development, and tracking them.
•	The goal is to evaluate, prioritize, and assign the resolution of defects.
•	It is also known as bug triage.
•	It is based on the severity and priority of the defects in software

API testing is a type of software testing that validates APIs. It aims to check the functionality, reliability, performance, and security of the programming interfaces.
•	It verifies that the API returns the correct response for different input values.
•	It ensures that the different components of a system can communicate with each other correctly and that the system can handle a large volume of requests.


Alpha Testing is a type of software testing performed to identify bugs before releasing the product to real users or the public. It is one of the user acceptance tests that is done near the end of the development of the software.
•	It is generally performed by the homestead software engineers or quality assurance staff.
•	It is used to identify and resolve critical bugs and issues in the software before it is released to the public.
•	It is performed in a controlled environment like a lab or a test network and is used to simulate real-world use cases.


Beta testing is the process of testing a software product or service in a real-world environment before its official release. It helps identify bugs and errors that may have been missed during the development process.
•	During beta testing, the software is made available to a selected group of users who are willing to test the product and provide feedback to the developers.
•	The beta testers typically use the software in various ways, attempting to find any issues, bugs, or usability problems.
•	They then provide feedback on their experience, reporting any problems or issues encountered.


What are Manual Testing Tools?
Manual testing is a software testing method in which the tester manually executes the test cases without the use of automated technologies. The tools that help in this process are known as manual testing tools. Some examples of manual testing tools are Bugzilla, JMeter, JIRA, etc.


List some Manual Testing Tools.
Below are some of the commonly used Manual Testing tools:
1.	Trac: Trac is one of the most powerful manual testing tools that is developed in Python and is a web-based program. It is compatible with a variety of databases like SQLite, MySQL, MS-SQL, etc.
2.	TestLink: TestLink is a high-quality product that has more functions in a comparable package. It is simple to use as the program is available to use through a browser.
3.	JMeter: JMeter is an open-source tool for performance testing of static and dynamic resources and dynamic web applications. It has an easy-to-use and clear interface accepting JVMs from Windows, Mac OS X, Linux, and other platforms.
4.	Bugzilla: Bugzilla is an open-source application that helps customers and clients to keep track of issues. It has a simple-to-use Google-style bug search that also searches the complete text of a bug.
5.	Load Runner: It is the most commonly used performance testing tool that is used to categorize the most prevalent causes of performance problems rapidly. It is compatible with a variety of development tools and protocol stacks and it helps to lower the cost of distributed load testing.



Parameters	Test Case	Test Scenario
Definition	A test case is a detailed document that provides details about the testing strategy, testing process, preconditions, and expected output.	A test scenario gives one-line information about what to test and is derived from the use case.
Action Level	These are low-level actions.	These are high-level actions.
Objective	The purpose is to verify the test scenario by implementing the steps.	The purpose of the test scenario is to cover the end-to-end functionality of software functionality.
Time Consumption	It takes more time.	It takes less time.
Input	It can be obtained from test scenarios.	It can be obtained from the use case.




Parameters	Sanity Testing	Smoke Testing
Definition	Sanity testing is performed to check whether the new functionality/ bug has been fixed.	Smoke testing is performed to make sure that the critical functionality of the system is working correctly.
Purpose	The goal of sanity testing is to verify rationality.	The goal of smoke testing is to verify stability.
Documentation	Sanity testing isn't documented.	Smoke testing is documented.
Who performs	Testers perform sanity testing.	Software developers or testers perform smoke testing.
Software build stability	The software build is relatively stable at the time of sanity testing.	The software build may be either stable or unstable during smoke testing.




Parameters	Regression Testing	Retesting
Definition	Regression testing is done to ensure that the changes have not affected the unchanged part of the product.	Retesting is done to ensure that the test cases which failed in the last execution are fixed.
Purpose	The purpose of regression testing is to check that the new code changes should not have any side effects on the existing functionalities.	The purpose of retesting is to check whether the functionality has been restored following a bug fix.
Is Automation possible?	Automating regression testing is possible as Manual testing can be time-consuming and expensive.	Automating test cases for retesting is not possible.
Test cases considered	Regression testing is done for passed test cases.	Retesting is done for failed test cases.
Defect Verification	Defect Verification is not part of regression testing.	Defect Verification is part of retesting.




 


The above diagram shows different states of Defect in the Defect Life Cycle and these are as follows :
1.	New: When any new defect is identified by the tester, it falls into a ‘New’ state. It is the first state of the Bug Life Cycle.
2.	Assigned: Defects that are in the status of ‘New’ will be approved and that newly identified defect will be assigned to the development team to work on the defect and resolve that.
3.	Open: In this ‘Open’ state the defect is being addressed by the developer team and the developer team works on the defect for fixing the bug. Based on some specific reason if the developer team feels that the defect is not appropriate then it is transferred to either the ‘Rejected’ or Deferred’ state.
4.	Fixed: After necessary changes of codes or after fixing the identified bug developer team marks the state as fixed.
5.	Pending Retest: During the fixing of the defect is completed, the developer team passes new code to the testing team for a retest. The code/application is pending for retesting at the Tester side so the status is assigned as ‘Pending Retest’.
6.	Retest: At this stage, the tester starts work of retesting the defect to check whether the defect is fixed by the developer or not, and the status is marked as ‘Retesting’.
7.	Reopen: After ‘Retesting’ if the tester team finds that the bug continues like previously even after the developer team has fixed the bug, then the status of the bug is again changed to ‘Reopened’. Once again bug goes to the ‘Open’ state and goes through the life cycle again. This means it goes for Re-fixing by the developer team.
8.	Verified: The tester re-tests the bug after it got fixed by the developer team and if the tester does not find any kind of defect/bug then the bug is fixed and the status assigned is ‘Verified’.
9.	Closed: It is the final state of the Defect Cycle, after fixing the defect by the developer team when testing found that the bug had been resolved and did not persist they marked the defect as a ???? lost’ state.



Parameters	Quality Assurance (QA)	Quality Control (QC)
Definition	QA is a group of activities that ensures that the quality of processes used during software development is always maintained.	QC is a group of activities to detect defects in the developed software.
Focus	QA focuses on assuring that the quality requested will be achieved.	QC focuses on fulfilling the quality request.
Orientation	QA is process-oriented.	QC is product-oriented.
Tool Type	QA is a managerial tool.	QC is a corrective tool.
Example	Verification	Validation



https://www.youtube.com/watch?v=r3PeRRDQpg0
qa and qc difference in software testing


Static Testing also known as Verification testing or Non-execution testing is a type of Software Testing method that is performed in the early stage of development to avoid errors as it is easier to find sources of failures and it can be fixed easily. The errors that cannot be found using Dynamic Testing, can be easily found by Static Testing. 
1.	Static can be done manually or with the help of tools to find bugs and improve the quality of the software.
2.	It helps to find errors in the early stage of development which is also called the verification process.
3.	It enhances maintainability and ultimately saves time and money in the long run.

Dynamic testing is a type of software testing that involves executing the software and evaluating its behavior during runtime. It is also known as functional testing, as it focuses on testing the software's functionality and how it behaves under different inputs and conditions.

Dynamic Testing is a type of Software Testing that is performed to analyze the dynamic behavior of the code. It includes the testing of the software for the input values and output values that are analyzed. It is performed to describe the dynamic behavior of code. It refers to the observation of the physical response from the system to variables that are not constant and change with time.


