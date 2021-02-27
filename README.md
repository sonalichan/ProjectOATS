# ProjectOATS


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

## Local Development

To install all dependencies, run:

    $ npm install .

To run the project, run the command:

    $ sails lift

Now, you should see the project running at http://localhost:1337

## Contact Information
Sonali Chandra(PM) - xsonali@uw.edu
Shareen Chang (UX/UI) - sharec@uw.edu
Michael Doyle (Dev) - msdoyle7@uw.edu
Erin Rochfort (Dev) - erochfor@uw.edu
