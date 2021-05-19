/**
 * FileController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    upload: function  (req, res) {
        req.file('projectTile').upload(function (err, files) {
          if (err) return res.serverError(err);
    
          return res.json({
            message: files.length + ' file(s) uploaded successfully!',
            files: files
          });
        });
    }
};

