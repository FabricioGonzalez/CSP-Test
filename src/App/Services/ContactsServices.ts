import CreateContactUsecase from '../Usecases/Contact/createContactUsecase';
import DeleteContactUsecase from '../Usecases/Contact/deleteContactUsecase';
import GetAllContactUsecase from '../Usecases/Contact/getAllContactUsecase';
import GetOneContactUsecase from '../Usecases/Contact/getOneContactUsecase';
import UpdateContactUsecase from '../Usecases/Contact/updateContactUsecase';

type Contact = {
  id?: string;
  first_name: string;
  last_name: string;
  email: string;
};

class ContactService {
  private createContactUsecase: CreateContactUsecase;
  private getAllContactUsecase: GetAllContactUsecase;
  private getOneContactUsecase: GetOneContactUsecase;
  private deleteContactUsecase: DeleteContactUsecase;
  private updateContactUsecase: UpdateContactUsecase;

  constructor(
    Create: CreateContactUsecase,
    Get: GetAllContactUsecase,
    GetOne: GetOneContactUsecase,
    Delete: DeleteContactUsecase,
    Update: UpdateContactUsecase,
  ) {
    this.createContactUsecase = Create;
    this.getAllContactUsecase = Get;
    this.getOneContactUsecase = GetOne;
    this.deleteContactUsecase = Delete;
    this.updateContactUsecase = Update;
  }
  async create(contact: Contact) {
    const createdContact = await this.createContactUsecase.CreateContact(
      contact,
    );
    return createdContact;
  }
  async findAll() {
    const contacts = await this.getAllContactUsecase.GetContact();
    return contacts;
  }
  async FindOneById(param: string) {
    const Contact = await this.getOneContactUsecase.GetContactById(param);
    return Contact;
  }
  async FindOneByName(param: string) {
    const Contact = await this.getOneContactUsecase.GetContactByName(param);
    return Contact;
  }

  async update(id: string, contact: Contact): Promise<Contact> {
    const updatedContact = await this.updateContactUsecase.updateContact(
      id,
      contact,
    );
    return updatedContact;
  }
  async delete(id: string): Promise<{}> {
    const deletedContact = await this.deleteContactUsecase.DeleteContact(id);
    return deletedContact;
  }
}

export default ContactService;
