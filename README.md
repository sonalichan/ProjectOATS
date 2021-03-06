# ProjectOATS: Reimagining the iSchool Capstone Archive

This is the redesign of the current UW iSchool Capstone Archive. The goal of this project is to reshape the current state of the iSchool Capstone archive to fully showcase the excellent reputation of the department and its industry partners.

The project was created with Sails.js for full stack development. This is aimed to be a three year long project, the first year being 2021 WI-SP capstone.


## Development with Docker

### Prerequisites

* [Docker](https://docs.docker.com/engine/install/)

### Start Development Container

To start, make sure you have Docker and Docker-compose installed on your machine.

Then, from the `backend` directory run the following command:

    $ docker-compose up --build

This may take a while if you're building for the first time. After the command finished running, you should be able to visit the sails.js app at http://localhost:1337/

To stop the docker container, either press Ctrl + C or run `docker stop sails-app` from the command line.

On subsequent builds, just run:

    $ docker-compose up


## Development with npm

### Prerequisites

* Node installation

### Setting up the Project

To install all dependencies, run the command:

    $ npm install .

Upon success, this should install all packages needed to run the project

Make sure you also have sails installed:

    $ npm install sails

If you get any errors, you may need to upgrade your version of Node

### Running the Project

Now, you can run the following command to start the project:

    $ sails lift

You should now see the project running at http://localhost:1337

## Contact Information
Sonali Chandra(PM) - xsonali@uw.edu
Shareen Chang (UX/UI) - sharec@uw.edu
Michael Doyle (Dev) - msdoyle7@uw.edu
Erin Rochfort (Dev) - erochfor@uw.edu
