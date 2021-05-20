/**
 * Project.js
 *
 * All information from form for a given project.
 */

 module.exports = {
    
    attributes: {
  
      //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
      //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
      //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝

      // Title of project
      title: {
        type: 'string',
        required: true,
        unique: true,
        example: 'Reimagining the Capstone Archive'
      },

      tagline: {
        type: 'string',
        required: true
      },
      
      // Tells if a project is apart of the old project archive or not
      oldProject: {
        type: 'boolean',
        defaultsTo: false
      },

      tileImageSrc: {
        type: 'string'
      },

      heroImageSrc: {
        type: 'string'
      },

      heroImageAlt: {
        type: 'string'
      },

      // Tells if a project is a sponsored project or not
      sponsored: {
        type: 'boolean',
        required: true
      },

      sponsor: {
        type: 'string'
      },

      // Link to project video
      projectVideo: {
        type: 'string',
        example: "youtube.com/watch?v=123456"
      },

      // Link to project website
      websiteURL: {
        type: 'string',
        example: "yourwebsite.com"
      },

      // Summary of project challenge
      challenge: {
        type: 'string',
      },

      // Summary of project outcome
      outcome: {
        type: 'string',
      },

      // Summary of project impact
      impact: {
        type: 'string',
      },

      nextSteps: {
        type: 'string'
      },

      status: {
        type: 'string'
      },

      // Summary of project
      abstract: {
        type: 'string',
      },



      //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
      //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
      //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝
      // n/a
  
      //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
      //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
      //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
      // n/a

      members: {
        collection: 'student',
        via: 'owner'
      },

      main: {
        collection: 'maincontent',
        via: 'owner'
      },

      tags: {
        collection: 'tag',
        via: 'owner'
      }
    
    },
  
  
  };
  