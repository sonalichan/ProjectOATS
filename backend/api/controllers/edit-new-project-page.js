module.exports = {


    friendlyName: 'Edit Project View',
  
  
    description: 'Edit existing project.',
  
  
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

      notFound: {
        description: 'No project was found with that project title',
        responseType: 'notFound',
        statusCode: 404
      }
  
    },

    fn: async function (req, res) {
        var title = this.req.param('projectTitle');

        var project = await Project.findOne({
            title: title
        }).populate('members').populate('main').populate('tags');

        if (!project) {
            sails.log("Could not find project with that title");
            throw 'notFound';
        } else {
            var view = "pages/edit-new-data-page"
            this.res.view(view, project);
        }
  
    }
  
  };
  