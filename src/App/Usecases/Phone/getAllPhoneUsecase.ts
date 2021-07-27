import Repository from '../../../Data/Repositories/Repository';
import Phone from '../../Entities/Phone';

class GetAllPhoneUsecase {
  private repository: Repository;

  constructor(Repository: Repository) {
    this.repository = Repository;
  }

  async GetPhone(param: string): Promise<Phone[]> {
    const phones = await this.repository.findAll<Phone[]>(param);

    return phones;
  }
}

export default GetAllPhoneUsecase;
