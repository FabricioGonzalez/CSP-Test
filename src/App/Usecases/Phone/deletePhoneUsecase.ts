import Repository from '../../../Data/Repositories/Repository';

class DeletePhoneUsecase {
  private repository: Repository;

  constructor(Repository: Repository) {
    this.repository = Repository;
  }

  async DeletePhone(id: string): Promise<{}> {
    const phone = await this.repository.delete(id);

    return phone;
  }
  async DeleteOnePhone(id: string, contact_id: string): Promise<{}> {
    const phone = await this.repository.deleteOneByNumber(id, contact_id);

    return phone;
  }
}

export default DeletePhoneUsecase;
