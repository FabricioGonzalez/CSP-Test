import ContactService from '../Services/ContactsServices';
import CreateContactUsecase from '../Usecases/Contact/createContactUsecase';
import DeleteContactUsecase from '../Usecases/Contact/deleteContactUsecase';
import GetAllContactUsecase from '../Usecases/Contact/getAllContactUsecase';
import GetOneContactUsecase from '../Usecases/Contact/getOneContactUsecase';
import UpdateContactUsecase from '../Usecases/Contact/updateContactUsecase';

class Factory {
  static contactService: ContactService;

  static ReturnInstance(repository: any): ContactService {
    const Create = new CreateContactUsecase(repository);
    const Delete = new DeleteContactUsecase(repository);
    const Getall = new GetAllContactUsecase(repository);
    const Getone = new GetOneContactUsecase(repository);
    const Update = new UpdateContactUsecase(repository);
    this.contactService = new ContactService(
      Create,
      Getall,
      Getone,
      Delete,
      Update,
    );
    return this.contactService;
  }
}

export default Factory;
