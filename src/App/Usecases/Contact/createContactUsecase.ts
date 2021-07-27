import Repository from '../../../Data/Repositories/Repository';
import Contact from '../../Entities/contacts';

class CreateContactUsecase {
  private repository: Repository;

  constructor(Repository: Repository) {
    this.repository = Repository;
  }

  async CreateContact(contact: Contact): Promise<Contact | any> {
    const Contact = await this.repository.create(contact);

    return Contact;
  }
}

export default CreateContactUsecase;
