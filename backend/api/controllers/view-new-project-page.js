module.exports = {


    friendlyName: 'Get Project',
  
  
    description: 'Get existing project.',
  
  
    extendedDescription:
  ``,

    exits: {
  
      success: {
        description: 'Project found successfully.'
      },
  
      invalid: {
        responseType: 'badRequest',
        description: 'The provided post data was invalid.',
        extendedDescription: ''
      },
  
    },

    fn: async function (req, res) {
        var projectTitle = this.req.param('projectTitle');

        var project = await Project.findOne({
            projectTitle: projectTitle
        });

        console.log(project);

        // add members here:
        // TODO: do query to get members associated with project
        project.members = [
            {
                firstName: "Erin",
                lastName: "Rochfort",
                role: "Developer"
            },
            {
                firstName: "Shareen",
                lastName: "Chang",
                role: "UX Designer"
            }
        ]

        console.log(project);

        if (!project) {
            sails.log("Could not find project with that title")
        } else {
            var view = "pages/new-data-page"
            this.res.view(view, project);
        }
  
    }
  
  };
  