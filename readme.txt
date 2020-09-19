To build a .jar :
	Right-click project in Eclipse
	Export
	Select JAR file...
	Specify a location outside the project folder
	Click FInish

Install Maven
	sudo apt update
	sudo apt install maven

Load a project JAR into local repository

	Run the following command, modify paths

	mvn install:install-file \
	   -Dfile=/home/staubibr/Development/arslab-dev/rise-ext-build/sim.parsing.jar \
	   -DgroupId=com.sim.parsing \
	   -DartifactId=sim.parsing \
	   -Dversion=1.0 \
	   -Dpackaging=jar \
	   -DgeneratePom=true
	   
Add Maven dependecy to project
		
	   
To build a .war with Maven
	Right-click project in Eclipse
	Run As Maven Build...
	Enter goals : Clean Install
	Click Run
	
