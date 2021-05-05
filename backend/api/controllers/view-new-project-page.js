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
        var title = this.req.param('projectTitle');

        var project = await Project.findOne({
            title: title
        }).populate('members').populate('main');

        if (!project) {
            sails.log("Could not find project with that title")
        } else {
            var view = "pages/new-data-page"
            this.res.view(view, project);
        }
  
    }
  
  };
  