import Repository from '../../../Data/Repositories/Repository';
import Phone from '../../Entities/Phone';

class CreatePhoneUsecase {
  private repository: Repository;

  constructor(Repository: Repository) {
    this.repository = Repository;
  }

  async CreatePhone(
    contactId: string,
    phoneNumber: Phone,
  ): Promise<Phone | any> {
    const phone = { number: phoneNumber, contact_id: contactId };

    const Phone = await this.repository.create(phone);

    return Phone;
  }
}

export default CreatePhoneUsecase;
