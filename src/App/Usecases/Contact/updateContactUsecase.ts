import Repository from 'src/Data/Repositories/Repository';
import Contact from '../../Entities/contacts';

class UpdateContactUsecase {
  private repository: Repository;

  constructor(Repository: Repository) {
    this.repository = Repository;
  }

  async updateContact(id: string, contact: Contact): Promise<Contact | any> {
    const Contact = await this.repository.update<Contact>(id, contact);

    return Contact;
  }
}

export default UpdateContactUsecase;
