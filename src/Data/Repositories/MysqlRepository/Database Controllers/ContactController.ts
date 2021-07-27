import Repository from '../../Repository';

interface ContactDTO {
  first_name: string;
  last_name: string;
  email: string;
  telefones: Array<string>;
}

class ContactController implements Repository {
  private ContactModel: any;

  constructor(Model: any) {
    this.ContactModel = Model;
  }

  async create<Contact>(contactParam: ContactDTO): Promise<Contact | any> {
    const { first_name, last_name, email } = contactParam;

    let data: any = await this.ContactModel.findOne({
      where: {
        first_name: first_name,
        last_name: last_name,
        deleted: 0,
      },
    });
    if (!data) {
      let contact = await this.ContactModel.create({
        first_name,
        last_name,
        email,
      });

      return contact;
    }
    return null;
  }
  async update<ContactDTO>(Id: string, contact: ContactDTO): Promise<{}> {
    let UpdatedContact = await this.ContactModel.update(contact, {
      where: {
        id: Id,
        deleted: 0,
      },
    });

    return { contact: UpdatedContact };
  }
  async findOneById<Contact>(param: string): Promise<Contact | any> {
    let data: any = await this.ContactModel.findOne({
      where: {
        id: param,
        deleted: 0,
      },
    });

    return data;
  }

  async findOneByName<Contact>(param: string): Promise<Contact | any> {
    const name = param.split(' ');

    const [firstName, lastName] = name;

    let data: any = await this.ContactModel.findOne({
      where: {
        first_name: firstName,
        last_name: lastName,
        deleted: 0,
      },
    });

    return data;
  }

  async findAll<Contact>(): Promise<Contact[] | any> {
    let data = await this.ContactModel.findAll({
      where: {
        deleted: 0,
      },
    });

    return data;
  }
  async delete(Id: string): Promise<{}> {
    let [data, DeletedContact] = await this.ContactModel.update(
      { deleted: 1 },
      {
        where: {
          id: Id,
          deleted: 0,
        },
      },
    );

    return { data, DeletedContact };
  }
}

export default ContactController;
