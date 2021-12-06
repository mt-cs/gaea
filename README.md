GAEA
============

## Table of Contents
1. [Overview](#Overview)
2. [Wireframes](#Wireframes)
3. [TechStack](#TechStack)
4. [Schema](#Schema)

## Overview
### Description
GAEA is a web-app dashboard to visualize and query [AWS workload](https://docs.aws.amazon.com/wellarchitected/latest/userguide/workloads.html) powered by [Django](https://www.djangoproject.com/) + [React](https://reactjs.org/).

### Features

It currently features:

- A homepage that displays:
    - Total amount of data size
    - Number of active workloads
    - Top 10 largest workloads
    - Number of daily users
    - Update history on workloads status
- A search interface to query resources by keyword, RunID, or tag
    - Display all completed and in-progress workload
    - Link to workload URL

## Video Walkthrough

## TechStack
### Frontend
GAEA is a [React.js](https://reactjs.org/) App powered by Javascript, CSS, and [React Bootstrap](https://react-bootstrap.github.io/).

### Framework
GAEA is built in Python-based [Django REST Framework](https://www.django-rest-framework.org/).

### Database
The database is done on [SQLite](https://docs.python.org/3/library/sqlite3.html#module-sqlite3). Django supports [SQLite 3.9.0](https://docs.djangoproject.com/en/3.2/ref/databases/#sqlite-notes) and later.

## Dependency

## Sample Data
```
java -javaagent:./jmx_prometheus_javaagent-0.16.1.jar=8080:config.yaml -jar yourJar.jar
```
## Installation

## Schema 

![GaeaArchitecture](https://user-images.githubusercontent.com/60201466/138249641-57944a61-450c-4791-9076-5945c5f9e752.png)

### Models

### Networking

## Wireframes
![gaea1](https://user-images.githubusercontent.com/60201466/138014716-9162be01-db68-4349-b246-8f4160425d88.jpg)
![gaea2](https://user-images.githubusercontent.com/60201466/138014722-b793f975-f480-40b4-98ba-bfdd7b563e43.jpg)


### Due - Thursday, December 16, 2021 - 5pm

For this project, you will implement a side project of your choosing.

To motivate this project, read the following blog post:

[Understanding Why Side Projects Are Looked At So Highly in Tech](https://www.linkedin.com/pulse/understanding-why-side-projects-looked-so-highly-tech-ming-chow/)

It is very likely that you will be asked about your side projects when you interview for internships or full-time software development positions. It is not always easy to have time for a side project during your studies, but side projects are very important to your development as a software developer. As a result, in this class you will be required to have a side project! 

Use this as an opportunity to explore something you are excited about! 

## Requirements

1. The project should represent roughly 50 hours of work. It is advised that you maintain a work log so that you can demonstrate how much time you spent on various elements of the project. It is also advised that you speak with the professor during office hour to propose your idea and verify that it is appropriately scoped.
2. The project may *extend* another project from this or another class, but no portion of the assignment that you wish to have graded as Side Project may be submitted as part of another assignment for this or another class.
3. You *may* choose to work in a programming language other than Java. You may also choose to use any set of libraries and/or frameworks available to you. Keep in mind, however, that your grade will be based on the level of difficulty of the project. Just completing some tutorials to learn a new toolset will not be sufficient (even if it took you 50 hours!).
4. You must submit your entire code base, a README with instructions for executing your program, and a README that explains the goal of the project, the design of the system, and any implementation details. At the time of submission, you should have a well-documented github repository that you would be proud to send to a potential employer!

## Suggestions

A search for [programming side projects](https://www.google.com/search?q=programming+side+projects&oq=programming+side+projects&aqs=chrome..69i57.3250j0j7&sourceid=chrome&ie=UTF-8) yields lots results with suggestions for side projects and how to choose side projects.

You may choose to extend a previous project to add functionality you think is missing.

You may choose to use the opportunity to learn a new language or toolset, for example build and Android application or rewrite a project using Go.

You may choose to implement an application that would help make your life easier. A previous student implemented a web-based Todo list application and used it everyday to keep track of her upcoming tasks! One of my lab mates from graduate school built an online photo library and used it every day to post a photo of the sky over Santa Barbara. 

Use your creativity! This is a test of not only your coding skills but your ability to define a problem on your own. Of course, I'm here to help! You may always come to office hour to discuss your ideas.

## Submission

1. Use the following link to create your private github repository for this assignment: [Side Project](https://classroom.github.com/a/rMpWJJ-_)
2. For full credit, make sure to follow all [Style Guidelines](https://github.com/CS601-F21/notes/blob/main/admin/style.md). Points will be deducted for each violation.
3. Your program must be demonstrated to the professor or a TA by **Thursday, December 16, 2021 - 5pm**. Further instructions for making an interactive grading appointment for this project will be made available at a later date.
4. All code *and thorough documentation* must be submitted to your github repository by **Thursday, December 16, 2021 - 5pm**.

## Grading Rubric

| Points | Criterion |
| ------ | -------- |  
| 60 | **Functionality** - Program behaves as expected during demonstration. |  
| 15 | **Design** - Program demonstrates appropriate level of difficulty. |  
| 15 | **Design** - Solution is well designed and uses appropriate class and method decomposition. | 
| 10 | **Design** - Meets all style guidelines. |  


## Academic Dishonesty

Any work you submit is expected to be your own original work. If you use any web resources in developing your code you are strongly advised to cite those resources. The only exception to this rule is code that is posted on the class website. The URL of the resource you used in a comment in your code is fine. If I google even a single line of uncited code and find it on the internet you may get a 0 on the assignment or an F in the class. You may also get a 0 on the assignment or an F in the class if your solution is at all similar to that of any other student.

