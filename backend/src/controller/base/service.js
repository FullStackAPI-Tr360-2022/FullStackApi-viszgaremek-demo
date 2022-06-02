module.exports = (model) => {
    return {
        findAll: () => model.find({}),
    };
};
