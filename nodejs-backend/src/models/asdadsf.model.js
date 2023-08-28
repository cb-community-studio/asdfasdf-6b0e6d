// See http://mongoosejs.com/docs/models.html
    // for more of what you can do here.
    module.exports = function (app) {
        const modelName = 'asdadsf';
        const mongooseClient = app.get('mongooseClient');
        const { Schema } = mongooseClient;
        const schema = new Schema(
          // ~cb-read-start~
          {
                   asdfadsfadsf: { type: String },
       asdfadsfadsfads: { type: String },
       asdfadsfadsf_2: { type: String },
       asdfadsfadsf_4: { type: String },
       asdfadsfadsf_3: { type: String },
       asdfadsfadsf_5: { type: String },
       asdfadsfadsfads_6: { type: String },
       asdfadsfadsfads_7: { type: String },
       asdfadsfadsfads_8: { type: String },
       asdfadsfadsfads_9: { type: String },

            // ~cb-relationship-schema~
          },
          // ~cb-read-end~
          {
          timestamps: true
        });
      
        // This is necessary to avoid model compilation errors in watch mode
        // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
        if (mongooseClient.modelNames().includes(modelName)) {
          mongooseClient.deleteModel(modelName);
        }
        return mongooseClient.model(modelName, schema);
        
      };