# Read Me First
The following was discovered as part of building this project:

* The original package name 'com.spacex.spacex-backend' is invalid and this project uses 'com.spacex.spacexbackend' instead.

# Getting Started
Prerequisites
Before you begin, ensure you have met the following requirements:

* JDK 17 or later installed
* Maven installed
* MySQL or Microsoft SQL Server installed and running

Installation :

* Step 1- git clone <repository-url>
* Step 2- cd spacex-backend
* Step 3- mvn clean install
* Step 4- update the below fields in application.properties file :
    * spring.datasource.url=<your_database_url>/spacex
    * spring.datasource.username=<your_username>
    * spring.datasource.password=<your_password>
* Step 5- create database 'spacex'
* step 6- mvn spring-boot:run

# Endpoints
The following endpoints are available:

* POST /launchpads/updateAll: Updates all launchpads data w.r.t spaceX data
* GET /launchpads/fetchAll/{pageNumber}/{records}: Fetches all launchpads with pagination.
* GET /launchpads/fetch/{id}: Fetches a single launchpad by ID.
* GET /launchpads/fetchByFilter: Fetches filtered launchpads based on query parameters.

## Reference Documentation
For further reference, please consider the following sections:

* [Official Apache Maven documentation](https://maven.apache.org/guides/index.html)
* [Spring Boot Maven Plugin Reference Guide](https://docs.spring.io/spring-boot/docs/3.2.3/maven-plugin/reference/html/)
* [Create an OCI image](https://docs.spring.io/spring-boot/docs/3.2.3/maven-plugin/reference/html/#build-image)
* [Spring Web](https://docs.spring.io/spring-boot/docs/3.2.3/reference/htmlsingle/index.html#web)
* [Spring Data JPA](https://docs.spring.io/spring-boot/docs/3.2.3/reference/htmlsingle/index.html#data.sql.jpa-and-spring-data)

## Guides
The following guides illustrate how to use some features concretely:

* [Building a RESTful Web Service](https://spring.io/guides/gs/rest-service/)
* [Serving Web Content with Spring MVC](https://spring.io/guides/gs/serving-web-content/)
* [Building REST services with Spring](https://spring.io/guides/tutorials/rest/)
* [Accessing Data with JPA](https://spring.io/guides/gs/accessing-data-jpa/)

