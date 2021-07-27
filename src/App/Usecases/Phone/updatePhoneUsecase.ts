import Phone from '../../Entities/Phone';
import Repository from 'src/Data/Repositories/Repository';

class UpdatePhoneUsecase {
  private repository: Repository;

  constructor(Repository: Repository) {
    this.repository = Repository;
  }

  async updatePhone(id: string, phone: Phone): Promise<Phone | any> {
    const Phone = await this.repository.update<Phone>(id, phone);

    return Phone;
  }
}

export default UpdatePhoneUsecase;
