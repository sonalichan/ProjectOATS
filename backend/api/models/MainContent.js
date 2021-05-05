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

      mainPicture: {
          type: 'ref',
      },
      
      mainAlt: {
          type: 'string',
      },

      leftPicture: {
        type: 'ref',
      },

      leftAlt: {
          type: 'string',
      },

      rightPicture: {
        type: 'ref',
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
  