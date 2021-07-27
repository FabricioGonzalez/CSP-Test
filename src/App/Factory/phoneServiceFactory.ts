import PhoneService from '../Services/PhonesServices';
import CreatePhoneUsecase from '../Usecases/Phone/createPhoneUsecase';
import DeletePhoneUsecase from '../Usecases/Phone/deletePhoneUsecase';
import GetAllPhoneUsecase from '../Usecases/Phone/getAllPhoneUsecase';
import GetOnePhoneUsecase from '../Usecases/Phone/getOnePhoneUsecase';
import UpdatePhoneUsecase from '../Usecases/Phone/updatePhoneUsecase';

class PhoneFactory {
  static phoneService: PhoneService;

  static ReturnInstance(repository: any): PhoneService {
    const Create = new CreatePhoneUsecase(repository);
    const Delete = new DeletePhoneUsecase(repository);
    const Getall = new GetAllPhoneUsecase(repository);
    const Getone = new GetOnePhoneUsecase(repository);
    const Update = new UpdatePhoneUsecase(repository);
    this.phoneService = new PhoneService(
      Create,
      Getall,
      Getone,
      Delete,
      Update,
    );
    return this.phoneService;
  }
}

export default PhoneFactory;
