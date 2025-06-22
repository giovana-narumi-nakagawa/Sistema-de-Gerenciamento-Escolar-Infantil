import presencaModel from "../app/models/presencaModel.js";
import usuarioModel from "../app/models/usuarioModel.js";

UserModel.hasMany(presencaModel, {
    foreignKey: 'id_user',
    as: 'documentos'
});

DocumentoModel.belongsTo(usuarioModel, {
    foreignKey: 'id_user',
    as: 'user'
});