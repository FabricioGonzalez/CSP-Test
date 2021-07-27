import { DataTypes, Model, UUIDV4 } from 'sequelize';

class Contact extends Model {
  static initiate(connection: any) {
    Contact.init(
      {
        id: {
          allowNull: false,
          primaryKey: true,
          type: DataTypes.UUID,
          defaultValue: UUIDV4,
        },
        first_name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        last_name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        deleted: {
          type: DataTypes.INTEGER,
        },
      },
      {
        tableName: 'contacts',
        sequelize: connection,
      },
    );
  }
  static associate(phone: any) {
    Contact.hasMany(phone);
  }
}

export default Contact;

