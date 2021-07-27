import Repository from '../../Repository';

interface PhoneDTO {
  number: string;
  contact_id: string;
}

class PhoneController implements Repository {
  private PhoneModel: any;

  constructor(Model: any) {
    this.PhoneModel = Model;
  }

  async create<Phone>(phoneParam: PhoneDTO): Promise<Phone | any> {
    const { number, contact_id } = phoneParam;

    let phone = await this.PhoneModel.create({ number, contact_id });

    return phone;
  }

  async updateOneByNumber<PhoneDTO>(
    number: string,
    phone: PhoneDTO,
  ): Promise<{}> {
    let UpdatedPhone = await this.PhoneModel.update(phone, {
      where: {
        number: number,
        deleted: 0,
      },
    });

    return { phone: UpdatedPhone };
  }
  async update<PhoneDTO>(id: string, phone: PhoneDTO): Promise<{}> {
    let UpdatedPhone = await this.PhoneModel.update(phone, {
      where: {
        id: id,
        deleted: 0,
      },
    });

    return { phone: UpdatedPhone };
  }
  async findOneById<Phone>(param: string): Promise<Phone | any> {
    let data: any = await this.PhoneModel.findOne({
      where: {
        contact_id: param,
        deleted: 0,
      },
    });

    return data;
  }

  async findOneByNumber<Phone>(param: string): Promise<Phone | any> {
    let data: any = await this.PhoneModel.findOne({
      where: {
        number: param,
        deleted: 0,
      },
    });

    return data;
  }

  async findAll<Phone>(param: string): Promise<Phone[] | any> {
    let data = await this.PhoneModel.findAll({
      where: {
        contact_id: param,
        deleted: 0,
      },
    });

    return data;
  }
  async deleteOneByNumber(Id: string, contact_id?: string): Promise<{}> {
    let [data, DeletedContact] = await this.PhoneModel.update(
      { deleted: 1 },
      {
        where: {
          id: Id,
          contact_id: contact_id,
          deleted: 0,
        },
      },
    );

    return { data, DeletedContact };
  }
  async delete(Id: string): Promise<{}> {
    let [data, DeletedContact] = await this.PhoneModel.update(
      { deleted: 1 },
      {
        where: {
          contact_id: Id,
          deleted: 0,
        },
      },
    );

    return { data, DeletedContact };
  }
}

export default PhoneController;
