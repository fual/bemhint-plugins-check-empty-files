module.exports.forEntityTech = function (tech, techsConfig, entity) {
    tech.content && entity.addError({
        msg: 'Empty file',
        tech: tech.name
    });
};
