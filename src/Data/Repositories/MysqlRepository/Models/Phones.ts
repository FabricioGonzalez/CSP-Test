import { DataTypes, Model, UUIDV4 } from 'sequelize';

class Phone extends Model {
  static initiate(connection: any) {
    Phone.init(
      {
        id: {
          primaryKey: true,
          type: DataTypes.UUID,
          allowNull: false,
          defaultValue: UUIDV4,
        },

        number: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        contact_id: {
          type: DataTypes.UUID,
          allowNull: false,
          references: {
            model: 'Contact',
            key: 'id',
          },
        },
        deleted: {
          type: DataTypes.INTEGER,
        },
      },
      {
        tableName: 'phones',
        sequelize: connection,
      },
    );
  }
  static associate(contact: any) {
    Phone.belongsTo(contact, {
      foreignKey: 'contact_id',
      foreignKeyConstraint: true,
      as: 'contact',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
  }
}

export default Phone;
