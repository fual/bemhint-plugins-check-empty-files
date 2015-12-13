module.exports = {
    // TODO: в бемхинте нет возможности не указывать технологии
    forEntityTech: function (tech, techsConfig, entity) {
        if (tech.content === '') {
            var error = {
                msg: 'Empty file',
                tech: tech.tech
            };
            
            entity.addError(error);
        }

    }
};
