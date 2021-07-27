import Repository from 'src/Data/Repositories/Repository';
import Contact from '../../Entities/contacts';

class GetOneContactUsecase {
  private repository: Repository;

  constructor(Repository: Repository) {
    this.repository = Repository;
  }

  async GetContactById(param: string): Promise<Contact> {
    const Contact = await this.repository.findOneById<Contact>(param);

    return Contact;
  }
  async GetContactByName(param: string): Promise<Contact> {
    const Contact = await this.repository.findOneByName<Contact>(param);

    return Contact;
  }
}

export default GetOneContactUsecase;
