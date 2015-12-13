module.exports = {
    forEntityTech: function (tech, techsConfig, entity) {
        var error = {
            msg: 'Test error',
            tech: tech.tech
        };

        entity.addError(error);
    }
};