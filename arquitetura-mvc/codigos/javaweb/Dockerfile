FROM maven:3.6.1-jdk-8 as build

WORKDIR /app
COPY pom.xml .
RUN mvn dependency:go-offline

COPY src /app/src
RUN mvn package

FROM tomcat:9.0.54-jdk8-openjdk-slim

COPY --from=build /app/target/javaweb.war /usr/local/tomcat/webapps
EXPOSE 8080
CMD ["catalina.sh", "run"]
