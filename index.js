module.exports.forEntityTech = function (tech, techsConfig, entity) {
	console.log(tech);
    !tech.content && entity.addError({
        msg: 'Empty file',
        tech: tech.name
    });
};
