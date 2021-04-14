/**
 * FileController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {  
  
  // upload function to receive the file
  upload: function  (req, res) {
        req.file('projectFile').upload(function (err, uploadedFiles) {
          if (err) {
            return res.serverError(err);
          }
          
          // If no files were uploaded, respond with an error.
          if (uploadedFiles.length === 0){
            return res.badRequest('No file was uploaded');
          }
          
        });
    }
};

