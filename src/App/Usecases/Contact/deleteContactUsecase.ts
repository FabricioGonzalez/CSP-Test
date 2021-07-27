import Repository from 'src/Data/Repositories/Repository';
import Contact from '../../Entities/contacts';

class DeleteContactUsecase {
  private repository: Repository;

  constructor(Repository: Repository) {
    this.repository = Repository;
  }

  async DeleteContact(id: string): Promise<{}> {
    const contact = await this.repository.delete(id);

    return contact;
  }
}

export default DeleteContactUsecase;
