import Contact from './Models/Contact';
import PhoneController from './Database Controllers/PhoneController';
import Phone from './Models/Phones';
import ContactController from './Database Controllers/ContactController';
import connection from './connection';

class MysqlRepository {
  static async clear(): Promise<void> {
    await Contact.destroy({ where: { name: 'test' } });
  }

  constructor() {
    Contact.initiate(connection);
    Phone.initiate(connection);
    Phone.associate(Contact);
    Contact.associate(Phone);
  }

  returnPhoneInstance() {
    const phoneController = new PhoneController(Phone);

    return phoneController;
  }
  returnContactInstance() {
    const phoneController = new ContactController(Contact);
    return phoneController;
  }
}

export default MysqlRepository;