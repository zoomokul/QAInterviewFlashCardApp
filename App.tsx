import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';
const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-9981135393846597/5676282406';
const flashcardsData = [
  {
    id: 1,
    question: 'What is TestNG, and how does it differ from JUnit?',
    answer:
      'TestNG is a testing framework for Java that is inspired by JUnit but offers more advanced features like parallel test execution, test dependency management, and better reporting capabilities. It allows testers to define test suites, set up test dependencies, and execute tests in a specific order.',
  },
  {
    id: 2,
    question: 'Explain the concept of BDD (Behavior-Driven Development) and how Cucumber is related to it.',
    answer:
      'BDD is a software development approach that encourages collaboration between developers, testers, and non-technical stakeholders. Cucumber is a BDD framework that enables the creation of executable specifications using plain-text feature files. These feature files contain scenarios written in a natural language format, making it easier for non-technical team members to understand and review the expected behavior of an application.',
  },
  {
    id: 3,
    question: 'What is Appium, and how does it facilitate mobile app testing?',
    answer:
      'Appium is an open-source automation tool for mobile app testing. It allows testers to write and execute tests using the same API for both Android and iOS platforms. Appium supports a variety of programming languages and offers a WebDriver-compatible interface for interacting with mobile apps. Test scripts written in Appium can automate interactions with mobile device features like gestures, sensors, and hardware buttons.',
  },
  {
    id: 4,
    question: 'Explain the purpose of REST Assured in API testing.',
    answer:
      'REST Assured is a Java library for testing RESTful APIs. It simplifies the process of sending HTTP requests to an API, validating responses, and extracting data for further testing. REST Assured supports fluent, expressive syntax that makes it easy to create readable and maintainable API tests. It is commonly used for automating API testing in the context of continuous integration and delivery (CI/CD) pipelines.',
  },
  {
    id: 5,
    question: 'What is the importance of SQL in software testing?',
    answer:
      'SQL (Structured Query Language) is essential in software testing for database testing. Testers use SQL queries to verify that data is correctly inserted, updated, or retrieved from a database. SQL queries can help validate the integrity of data stored in databases and ensure that an application interacts with the database as expected. SQL is also useful for data-driven testing, where test data is retrieved from a database.',
  },
  {
    id: 6,
    question: 'What is API testing, and why is it important in software testing?',
    answer:
      'API testing involves testing the interfaces or endpoints of an application to ensure that they function correctly, return the expected results, and adhere to defined standards (e.g., REST or SOAP). API testing is important because it allows testers to verify the core functionality of an application independently of the user interface. It helps identify issues early in the development cycle and supports automated testing for continuous integration and delivery.',
  },
  {
    id: 7,
    question: 'Explain the Software Development Life Cycle (SDLC) and its phases.',
    answer:
      'The SDLC is a systematic process for planning, creating, testing, deploying, and maintaining software applications. Its phases typically include: \n1. Requirements Analysis: Gathering and documenting project requirements. \n2. Planning: Defining project scope, timelines, and resources. \n3. Design: Creating architectural and technical designs. \n4. Implementation (Coding): Writing and testing code. \n5. Testing: Verifying software functionality and fixing defects. \n6. Deployment: Rolling out the software to production. \n7. Maintenance: Monitoring, updating, and enhancing the software post-launch.',
  },
  {
    id: 8,
    question: 'What is the difference between manual testing and automated testing?',
    answer:
      'Manual testing involves human testers manually executing test cases, observing software behavior, and reporting issues. It is labor-intensive and suitable for exploratory testing. Automated testing uses scripts or test automation tools to perform test actions and validate results. It is efficient for repetitive tasks, regression testing, and continuous integration. Automated tests can be run quickly and consistently, reducing the likelihood of human error.',
  },
  {
    id: 9,
    question: 'Explain the concept of test data and its importance in testing.',
    answer:
      'Test data refers to the input values, conditions, and configurations used in test cases to verify the functionality of an application. Test data is essential because it allows testers to validate how an application behaves under different scenarios, including boundary conditions, edge cases, and typical usage. Carefully chosen test data helps uncover defects and ensures comprehensive test coverage.',
  },
  {
    id: 10,
    question: 'What are some common challenges faced in software testing, and how can they be addressed?',
    answer:
      'Common challenges in software testing include incomplete requirements, tight schedules, changing project scope, and maintaining test environments. These challenges can be addressed through effective communication with stakeholders, early involvement in the project, prioritization of critical tests, and the use of virtualized test environments or cloud-based solutions to reduce infrastructure constraints.',
  },{
    id: 11,
    question: 'What is regression testing, and why is it important in software development?',
    answer:
      'Regression testing is the process of re-running previously executed test cases to ensure that new code changes have not introduced unintended side effects or defects in existing functionality. It is crucial in software development to catch and prevent regressions (unintended defects) that may occur as a result of code modifications, enhancements, or fixes.',
  },
  {
    id: 12,
    question: 'Explain the concept of test automation frameworks. Why are they used in automation testing?',
    answer:
      'A test automation framework is a set of guidelines, practices, and tools that provide a structured approach to designing, organizing, and executing automated tests. Frameworks help standardize automation efforts, enhance test maintenance, and improve test scalability. Common test automation frameworks include data-driven, keyword-driven, and behavior-driven frameworks.',
  },
  {
    id: 13,
    question: 'What are the advantages of using version control systems (VCS) in software testing?',
    answer:
      'Version control systems (VCS) like Git offer several benefits in software testing, including version history tracking, collaboration support, code branching for parallel development, and the ability to revert to previous code states. VCS ensures test scripts and test data are well-managed, enabling team collaboration and efficient test maintenance.',
  },
  {
    id: 14,
    question: 'What is a test plan, and what key components should it include?',
    answer:
      'A test plan is a document that outlines the approach, scope, objectives, resources, and schedule for testing activities. Key components of a test plan include test objectives, test strategy, test environment requirements, test deliverables, test schedules, risk assessment, and test responsibilities.',
  },
  {
    id: 15,
    question: 'Explain the concept of smoke testing and when it is typically performed.',
    answer:
      'Smoke testing, also known as sanity testing, is a high-level and non-exhaustive form of testing aimed at quickly identifying major defects in an application. It is typically performed after a new build is deployed to ensure that the application is stable enough for further testing. Smoke tests cover critical functionalities to ascertain basic usability.',
  },
  {
    id: 16,
    question: 'What is the purpose of a test case, and how should it be structured?',
    answer:
      'A test case is a detailed document that specifies the inputs, conditions, actions, and expected outcomes for a particular test scenario. It serves as a guide for testers to execute tests systematically. A well-structured test case includes a clear title, preconditions, test steps, expected results, actual results, and a pass/fail status.',
  },
  {
    id: 17,
    question: 'What is continuous integration (CI), and how does it benefit the software testing process?',
    answer:
      'Continuous Integration (CI) is a development practice where code changes are automatically built, tested, and integrated into the main codebase multiple times a day. CI benefits the testing process by identifying integration issues early, enabling faster feedback on code changes, and promoting a culture of collaboration and quality assurance.',
  },
  {
    id: 18,
    question: 'Explain the concept of boundary value analysis in testing.',
    answer:
      'Boundary value analysis is a test design technique that focuses on testing values at the boundaries of acceptable input ranges. It helps identify defects related to edge cases, off-by-one errors, and input validation issues. Test cases are created for values just below, on, and just above the boundary values to ensure robust application behavior.',
  },
  {
    id: 19,
    question: 'What is the purpose of a test execution report, and what information should it include?',
    answer:
      'A test execution report summarizes the results of test execution, highlighting the status of test cases (pass, fail, or blocked) and any defects found during testing. It provides stakeholders with a clear view of testing progress and the quality of the software. The report should include details such as test case IDs, descriptions, status, and defect information.',
  },
  {
    id: 20,
    question: 'Explain the concept of test data management and its significance in testing.',
    answer:
      'Test data management involves creating, maintaining, and controlling test data used in software testing. It is essential for ensuring that test cases have access to relevant and representative data. Effective test data management helps identify data-related defects, enhances test coverage, and ensures test repeatability.',
  },
  {
    id: 21,
    question: 'What is a test harness, and how is it used in automated testing?',
    answer:
      'A test harness, also known as a test framework, is a set of tools, libraries, and components that provide an environment for running automated tests. It includes the infrastructure needed to initialize, execute, and clean up after tests. Test harnesses simplify test execution and reporting, making it easier to automate test cases and manage test environments.',
  },
  {
    id: 22,
    question: 'Explain the concept of white-box testing and provide an example.',
    answer:
      "White-box testing, also known as structural testing or code-based testing, involves testing an application's internal code, logic, and data flows. Testers have knowledge of the code's internal structure and use it to design test cases. An example of white-box testing is unit testing, where individual functions or methods are tested for correctness with knowledge of their implementation.",
  },
  {
    id: 23,
    question: 'What is the significance of test coverage metrics in software testing?',
    answer:
      "Test coverage metrics measure the extent to which an application's code or functionality has been exercised by test cases. It helps assess the thoroughness of testing and identifies areas that require additional testing. Common test coverage metrics include statement coverage, branch coverage, and path coverage. Higher coverage levels increase confidence in the application's reliability.",
  },
  {
    id: 24,
    question: 'Explain the concept of test prioritization and its benefits.',
    answer:
      'Test prioritization is the process of determining the order in which test cases should be executed based on factors such as criticality, risk, and business impact. It ensures that the most important test cases are run first, allowing critical issues to be detected early in the testing process. Test prioritization helps optimize testing efforts and resource allocation.',
  },
  {
    id: 25,
    question: 'What is exploratory testing, and when is it typically used?',
    answer:
      'Exploratory testing is a dynamic testing approach where testers simultaneously design and execute test cases while exploring the application. Testers use their domain knowledge and creativity to uncover defects that may not be covered by scripted test cases. It is typically used for unstructured or rapidly changing projects and can be especially effective for usability and user experience testing.',
  },
  {
    id: 26,
    question: 'Explain the concept of security testing and its importance in software development.',
    answer:
      "Security testing focuses on identifying vulnerabilities, weaknesses, and potential threats in an application's security mechanisms. It helps protect sensitive data, prevent security breaches, and ensure compliance with security standards and regulations. Security testing includes activities like penetration testing, vulnerability scanning, and code reviews to identify and address security risks.",
  },
  {
    id: 27,
    question: 'What is the difference between load testing and stress testing?',
    answer:
      "Load testing involves assessing an application's performance under expected load conditions to ensure it meets performance criteria. Stress testing, on the other hand, evaluates how the application behaves under extreme or beyond-expected load conditions to identify its breaking points and weaknesses. While load testing focuses on performance optimization, stress testing aims to find system limits.",
  },
  {
    id: 28,
    question: 'Explain the concept of code review in the context of testing.',
    answer:
      'Code review is a process where peers or team members review and analyze code changes made by developers. In the context of testing, code review helps identify potential defects, security vulnerabilities, and code quality issues early in the development cycle. Testers can participate in code reviews to ensure that testability and test cases are considered during development.',
  },
  {
    id: 29,
    question: 'What is the purpose of a test closure report, and what information should it include?',
    answer:
      'A test closure report summarizes the results of testing activities and provides stakeholders with an overview of the testing effort. It includes information about the test environment, test execution status, defects found, test coverage, and any outstanding issues or risks. The report serves as a formal conclusion to the testing phase and helps evaluate the overall quality of the software.',
  },
  {
    id: 30,
    question: 'Explain the concept of load balancing testing and its role in ensuring application scalability.',
    answer:
      'Load balancing testing involves verifying the effectiveness of load balancers in distributing incoming network traffic across multiple servers or resources. It ensures that the load balancer evenly distributes requests, optimizing resource utilization and improving application scalability. Load balancing testing helps identify configuration issues and ensures high availability and reliability of applications.',
  },
  {
    id: 31,
    question: 'Explain the concept of risk-based testing and how it is implemented in test planning.',
    answer:
      'Risk-based testing is an approach that focuses testing efforts on areas of the application that are most susceptible to defects or have the highest business impact. It involves identifying and prioritizing risks, and then allocating testing resources accordingly. In test planning, risk-based testing helps define the test scope, select test cases, and determine the depth of testing for different features or modules based on their risk profiles.',
  },
  {
    id: 32,
    question: 'What is the purpose of usability testing, and how is it conducted?',
    answer:
      'Usability testing assesses how user-friendly an application is by observing real users as they interact with it. The goal is to identify usability issues, improve the user experience, and enhance user satisfaction. Usability tests typically involve creating realistic scenarios, observing user interactions, and collecting feedback. Usability testing helps ensure that the application meets user needs and expectations.',
  },
  {
    id: 33,
    question: 'Explain the concept of compatibility testing and its significance.',
    answer:
      'Compatibility testing evaluates how well an application performs on different platforms, browsers, devices, and environments. It ensures that the application functions correctly and consistently across various configurations. Compatibility testing is essential to reach a wider audience and maintain a positive user experience, especially in the context of web and mobile applications.',
  },
  {
    id: 34,
    question: 'What is the role of a test manager in a software testing team?',
    answer:
      'A test manager is responsible for overseeing and coordinating all testing activities within a testing team. Their role includes test planning, resource allocation, test strategy development, test progress monitoring, risk management, and communication with stakeholders. Test managers play a crucial role in ensuring that testing efforts are organized, efficient, and aligned with project goals.',
  },
  {
    id: 35,
    question: 'Explain the concept of end-to-end testing and its importance.',
    answer:
      'End-to-end testing evaluates the complete flow of a business process or application from start to finish, including all integrated components and dependencies. It ensures that all system parts work together seamlessly and meet the desired business objectives. End-to-end testing helps uncover issues related to data flow, integration points, and the overall user experience.',
  },
  {
    id: 36,
    question: 'What is the purpose of test environment setup and configuration?',
    answer:
      'Test environment setup and configuration involve preparing the testing environment to mimic the production environment as closely as possible. It includes configuring hardware, software, databases, and network settings. The purpose is to create a stable and controlled environment where tests can be executed consistently and reliably to simulate real-world conditions.',
  },
  {
    id: 37,
    question: 'Explain the concept of acceptance testing and its different forms.',
    answer:
      'Acceptance testing verifies that a system meets the specified acceptance criteria and is ready for deployment. There are two main forms of acceptance testing: \n\n1. User Acceptance Testing (UAT): Conducted by end-users or stakeholders to ensure that the system meets business requirements and is acceptable for production use. \n2. Alpha and Beta Testing: Alpha testing is performed by the development team before release, while beta testing involves a limited group of external users who provide feedback on the pre-release version.',
  },
  {
    id: 38,
    question: 'What is the purpose of automated test reporting, and what information should it include?',
    answer:
      'Automated test reporting provides stakeholders with detailed information about test execution results, including pass/fail status, test case details, and any defects found. It facilitates decision-making, defect tracking, and test progress monitoring. Automated test reports should include test case IDs, descriptions, execution timestamps, defect IDs (if applicable), and test coverage metrics.',
  },
  {
    id: 39,
    question: 'Explain the concept of code coverage analysis in testing.',
    answer:
      "Code coverage analysis measures the extent to which an application's source code is exercised by test cases. It helps identify untested or under-tested code portions, allowing testers to improve test coverage. Common code coverage metrics include statement coverage, branch coverage, and path coverage. Code coverage analysis aids in assessing the quality and thoroughness of testing efforts.",
  },
  {
    id: 40,
    question: 'What is the role of a test automation architect, and how does it differ from a test automation engineer?',
    answer:
      'A test automation architect is responsible for designing the overall test automation strategy, framework, and infrastructure for an organization. They focus on high-level decisions and design considerations. A test automation engineer, on the other hand, implements and maintains the automation framework, writes test scripts, and executes automated tests. Both roles collaborate to create effective test automation solutions.',
  },
];

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const toggleShowAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  const showNextFlashcard = () => {
    if (currentIndex < flashcardsData.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setShowAnswer(false);
    }
  };

  return (
    <View style={styles.container}>


      {currentIndex < flashcardsData.length ? (
        
        <View style={styles.flashcard}>

          <Text style={styles.questionText}>
  
            {showAnswer ? flashcardsData[currentIndex].answer : flashcardsData[currentIndex].question}
          </Text>
          <TouchableOpacity onPress={toggleShowAnswer} style={styles.toggleButton}>
            <Text style={styles.toggleButtonText}>
              {showAnswer ? 'Show Question' : 'Show Answer'}
            </Text>
          </TouchableOpacity>
   
          <TouchableOpacity onPress={showNextFlashcard} style={styles.nextButton}>
            <Text style={styles.nextButtonText}>Next</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <Text style={styles.finishedText}>You've completed all flashcards!</Text>
      )}
       <BannerAd
      unitId={adUnitId}
      size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
      requestOptions={{
        requestNonPersonalizedAdsOnly: true,
      }}
    />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F2F2F2', // Light gray background
    padding: 20,
  },
  flashcard: {
    backgroundColor: '#FFFFFF', // White flashcard background
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 6,
  },
  questionText: {
    fontSize: 24,
    textAlign: 'justify',
    marginBottom: 20,
    color: '#333333', // Dark gray text for questions
  },
  toggleButton: {
    backgroundColor: '#007BFF', // Blue button color
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  toggleButtonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  nextButton: {
    backgroundColor: '#28A745', // Green button color
    padding: 10,
    borderRadius: 5,
  },
  nextButtonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  finishedText: {
    fontSize: 20,
    textAlign: 'justify',
    color: '#333333', // Dark gray text for completion message
  },
});




export default App;