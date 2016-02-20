module.exports.forEachTech = function (tech, entity, config) {
    !tech.content && entity.addError({
        msg: 'Empty file',
        tech: tech.name
    });
};
