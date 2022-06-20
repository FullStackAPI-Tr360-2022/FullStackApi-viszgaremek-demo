module.exports = (model, populateList = []) => {
    return {
        findAll: () => model.find({}).populate(...populateList),
        findOne: (id) => model.findById(id).populate(...populateList),
        updateOne: async (id, body) => {
            const newEntity = new model(body);
            const error = newEntity.validateSync();
            if (!error) {
                return model.findByIdAndUpdate(id, body, {new: true});
            }
            throw new Error(error);
        }
    };
};
