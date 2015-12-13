module.exports.forEntityTech = function (tech, techsConfig, entity) {
    if (!tech.content) {
        entity.addError({
            msg: 'Empty file',
            tech: tech.tech
        });
    }
};
