import Repository from 'src/Data/Repositories/Repository';
import Contact from '../../Entities/contacts';

class GetAllContactUsecase {
  private repository: Repository;

  constructor(Repository: Repository) {
    this.repository = Repository;
  }

  async GetContact(): Promise<Contact[]> {
    const contacts = await this.repository.findAll<Contact[]>();

    return contacts;
  }
}

export default GetAllContactUsecase;
