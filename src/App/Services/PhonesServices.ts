import CreatePhoneUsecase from '../Usecases/Phone/createPhoneUsecase';
import DeletePhoneUsecase from '../Usecases/Phone/deletePhoneUsecase';
import GetAllPhoneUsecase from '../Usecases/Phone/getAllPhoneUsecase';
import GetOnePhoneUsecase from '../Usecases/Phone/getOnePhoneUsecase';
import UpdatePhoneUsecase from '../Usecases/Phone/updatePhoneUsecase';

type Phone = {
  id: string;
  number: string;
  contact_id: string;
};

class PhoneService {
  private createPhoneUsecase: CreatePhoneUsecase;
  private getAllPhoneUsecase: GetAllPhoneUsecase;
  private getOnePhoneUsecase: GetOnePhoneUsecase;
  private deletePhoneUsecase: DeletePhoneUsecase;
  private updatePhoneUsecase: UpdatePhoneUsecase;

  constructor(
    Create: CreatePhoneUsecase,
    Get: GetAllPhoneUsecase,
    GetOne: GetOnePhoneUsecase,
    Delete: DeletePhoneUsecase,
    Update: UpdatePhoneUsecase,
  ) {
    this.createPhoneUsecase = Create;
    this.getAllPhoneUsecase = Get;
    this.getOnePhoneUsecase = GetOne;
    this.deletePhoneUsecase = Delete;
    this.updatePhoneUsecase = Update;
  }
  async create(id: string, phone: Phone) {
    const createdPhone = await this.createPhoneUsecase.CreatePhone(id, phone);
    return createdPhone;
  }
  async findAll(param: string) {
    const phones = await this.getAllPhoneUsecase.GetPhone(param);
    return phones;
  }
  async FindOneById(param: string) {
    const Phone = await this.getOnePhoneUsecase.GetPhoneById(param);
    return Phone;
  }
  async FindOneByNumber(param: string) {
    const Phone = await this.getOnePhoneUsecase.GetPhoneByNumber(param);
    return Phone;
  }

  async update(id: string, phone: Phone): Promise<Phone> {
    const updatedPhone = await this.updatePhoneUsecase.updatePhone(id, phone);
    return updatedPhone;
  }
  async delete(id: string): Promise<{}> {
    const deletedPhone = await this.deletePhoneUsecase.DeletePhone(id);
    return deletedPhone;
  }
  async deleteOne(id: string, contact_id: string): Promise<{}> {
    const deletedPhone = await this.deletePhoneUsecase.DeleteOnePhone(
      id,
      contact_id,
    );
    return deletedPhone;
  }
}

export default PhoneService;
