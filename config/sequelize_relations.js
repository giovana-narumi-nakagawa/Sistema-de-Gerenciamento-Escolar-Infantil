import DocumentoModel from "../app/Models/DocumentoModel.js";
import UserModel from "../app/Models/UserModel.js";

UserModel.hasMany(DocumentoModel, {
    foreignKey: 'id_user',
    as: 'documentos'
});

DocumentoModel.belongsTo(UserModel, {
    foreignKey: 'id_user',
    as: 'user'
});