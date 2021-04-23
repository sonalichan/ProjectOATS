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

        if (!project) {
            sails.log("Could not find project with that title")
        } else {
            var url = "project/" + encodeURI(projectTitle);
            this.res.view(url, project);
        }
  
    }
  
  };
  