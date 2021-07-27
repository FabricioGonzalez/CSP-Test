import Phone from '../../Entities/Phone';
import Repository from '../../../Data/Repositories/Repository';

class GetOnePhoneUsecase {
  private repository: Repository;

  constructor(Repository: Repository) {
    this.repository = Repository;
  }

  async GetPhoneById(param: string): Promise<Phone> {
    const Phone = await this.repository.findOneById<Phone>(param);

    return Phone;
  }
  async GetPhoneByNumber(param: string): Promise<Phone> {
    const Phone = await this.repository.findOneByNumber<Phone>(param);

    return Phone;
  }
}

export default GetOnePhoneUsecase;
