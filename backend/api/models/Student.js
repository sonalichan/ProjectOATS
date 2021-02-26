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
  
      emailAddress: {
        type: 'string',
        required: true,
        isEmail: true,
        maxLength: 200,
        example: 'mary.sue@example.com'
      },
      
      linkedinURL: {
        type: 'character',
        required: false,
        description: 'Link to student\'s LinkedIn profile',
        example: 'https://www.linkedin.com/in/Mary-Sue/' 
      },

      projectRole: {
          type: 'string',
          required: true,
          description: 'Students\' role in project',
          example: 'Developer'
      },

      projectID: {
        type: 'character',
        required: true,
        description: 'Links student to their project through the ID',
        isUnique: true
      },

      firstName: {
        type: 'string',
        required: true,
        description: 'Full representation of the student\'s first name.',
        maxLength: 120,
        example: 'Mary'
      },

      lastName: {
        type: 'string',
        required: true,
        description: 'Full representation of the student\'s last name.',
        maxLength: 120,
        example: 'Sue'
      },

      optOut: {
        type: 'boolean',
        required: true,
        description: 'Decision of student if they want to opt out of having their information on the Capstone page',
      },


      //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
      //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
      //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝
      // n/a
  
      //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
      //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
      //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
      // n/a
  
    },
  
  
  };
  