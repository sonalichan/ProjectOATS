/**
 * Student.js
 *
 * Information for each student in Capstone.
 */

 module.exports = {

    attributes: {
  
      //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
      //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
      //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝

      index: {
        type: 'number',
        required: true,
      },

      template: {
        type: 'string',
        required: true,
      },

      title: {
        type: 'string',
      },
      
      mainText: {
        type: 'string',
      },

      leftText: {
        type: 'string',
      },

      rightText: {
        type: 'string',
      },

      // similar to other images for project, this could be the path to the image file in the assets folder
      mainPicture: {
          type: 'string',
      },
      
      mainAlt: {
          type: 'string',
      },

      // similar to other images for project, this could be the path to the image file in the assets folder
      leftPicture: {
        type: 'string',
      },

      leftAlt: {
          type: 'string',
      },

      // similar to other images for project, this could be the path to the image file in the assets folder
      rightPicture: {
        type: 'string',
      },

      rightAlt: {
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
      
      // One to many relationship with Student being the child of ProjectTeam
      owner: {
        model: 'project'
      },
    },
  
  
  };
  