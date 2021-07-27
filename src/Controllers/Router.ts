import { Router, Request, Response } from 'express';
import ContactFactory from '../App/Factory/contactServiceFactory';
import PhoneFactory from '../App/Factory/phoneServiceFactory';
import MysqlRepository from '../Data/Repositories/MysqlRepository/DataBase';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../../swagger.json';

const dataBase = new MysqlRepository();

const contactController = dataBase.returnContactInstance();
const phoneController = dataBase.returnPhoneInstance();

const contactFactory = ContactFactory.ReturnInstance(contactController);
const phoneFactory = PhoneFactory.ReturnInstance(phoneController);

const router = Router();

// ✅ Get a detailed Contact
router.get('/contact/:param', async (request: Request, response: Response) => {
  try {
    if (request.params) {
      const { param } = request.params;

      let contactsData: any = await contactFactory
        .FindOneById(param)
        .catch((error) => {
          throw new Error('contact Not Found');
        });

      if (contactsData) {
        const { id } = contactsData;
        let phoneData = await phoneFactory.findAll(id).catch((error) => {
          throw error;
        });

        return response
          .status(200)
          .json({ contact: contactsData, phones: phoneData });
      }

      if (!contactsData) {
        contactsData = await contactFactory
          .FindOneByName(param)
          .catch((error) => {
            throw new Error('contact Not Found');
          });

        const { id } = contactsData;

        let phoneData = await phoneFactory.findAll(id).catch((error) => {
          throw error;
        });
        return response
          .status(200)
          .json({ contact: contactsData, phones: phoneData });
      }
    }
  } catch (error) {
    return response.status(400).json(error.toString());
  }
});

// ✅ GetAll detailed Contacts
router.get('/contact', async (request: Request, response: Response) => {
  try {
    const contactData = await contactFactory.findAll().catch((error) => {
      throw error;
    });
    let res = [];
    for await (let item of contactData) {
      const data = await phoneFactory.findAll(item.id).catch((error) => {
        throw error;
      });
      res.push({ Contact: item, Phones: data });
    }

    return response.status(200).json(res);
  } catch (error) {
    return response.status(400).json(error.toString());
  }
});

// ✅ Create Contact
router.post('/contact', async (request: Request, response: Response) => {
  try {
    const { firstName, lastName, email, phones } = request.body;

    const contactRaw = {
      first_name: firstName ? firstName : null,
      last_name: lastName ? lastName : null,
      email: email ? email : null,
    };
    const contactPhone = phones ? phones : null;

    const contact = await contactFactory.create(contactRaw);

    let phone: any = [];

    if (contact) {
      for await (let item of contactPhone) {
        await phoneFactory
          .create(contact.id, item)
          .then((data) => phone.push(data))
          .catch((error) => {
            throw error;
          });
      }

      return response.json({ Contact: contact, Phones: phone });
    }

    throw new Error('Contact already exists');
  } catch (error) {
    return response.status(400).json(error.toString());
  }
});

router.post(
  '/contact/phone/add',
  async (request: Request, response: Response) => {
    try {
      const { id, firstName, lastName, phones } = request.body;
      const body = {
        id: id ? id : null,
        first_name: firstName ? firstName : null,
        last_name: lastName ? lastName : null,
        phones: phones ? phones : null,
      };
      if (id) {
        let contactData = await contactFactory
          .FindOneById(body.id)
          .catch((error) => {
            throw error;
          });

        const phone: Array<string> = [];

        if (contactData) {
          const { id } = contactData;

          for await (let item of body.phones) {
            await phoneFactory
              .create(id, item)
              .then((data) => phone.push(data))
              .catch((error) => {
                throw error;
              });
          }

          return response
            .status(200)
            .json({ contact: contactData, phones: phone });
        }
      }

      if (firstName && lastName) {
        const phone: Array<string> = [];

        let contactData = await contactFactory
          .FindOneByName(`${body.first_name} ${body.last_name}`)
          .catch((error) => {
            throw error;
          });

        const { id } = contactData;

        for await (let item of body.phones) {
          await phoneFactory
            .create(id, item)
            .then((data) => phone.push(data))
            .catch((error) => {
              throw error;
            });
        }

        return response
          .status(200)
          .json({ contact: contactData, phones: phone });
      }
    } catch (error) {
      return response.status(400).json(error.toString());
    }
  },
);

router.delete(
  '/contact/:param',
  async (request: Request, response: Response) => {
    try {
      if (request.params) {
        const { param } = request.params;

        let contactsData: any = await contactFactory
          .FindOneById(param)
          .catch((error) => {
            throw new Error('contact Not Found');
          });

        if (contactsData) {
          const { id } = contactsData;

          await contactFactory.delete(id);
          await phoneFactory.delete(id);
          let phoneData = await phoneFactory.findAll(id).catch((error) => {
            throw error;
          });

          return response
            .status(200)
            .json({ contact: contactsData, phones: phoneData });
        }

        if (!contactsData) {
          contactsData = await contactFactory
            .FindOneByName(param)
            .catch((error) => {
              throw new Error('contact Not Found');
            });

          const { id } = contactsData;

          await contactFactory.delete(id);
          await phoneFactory.delete(id);

          let phoneData = await phoneFactory.findAll(id).catch((error) => {
            throw error;
          });
          return response
            .status(200)
            .json({ contact: contactsData, phones: phoneData });
        }
      }
    } catch (error) {
      return response.status(400).json(error.toString());
    }
  },
);
router.delete(
  '/contact/:param/phone/:phone_id',
  async (request: Request, response: Response) => {
    try {
      if (request.params) {
        const { param, phone_id } = request.params;

        let contactsData: any = await contactFactory
          .FindOneById(param)
          .catch((error) => {
            throw new Error('contact Not Found');
          });

        if (contactsData) {
          const { id } = contactsData;

          await phoneFactory.deleteOne(phone_id, id).catch((error) => {
            throw error;
          });

          let phoneData = await phoneFactory.findAll(id).catch((error) => {
            throw error;
          });

          return response
            .status(200)
            .json({ contact: contactsData, phones: phoneData });
        }

        if (!contactsData) {
          contactsData = await contactFactory
            .FindOneByName(param)
            .catch((error) => {
              throw new Error('contact Not Found');
            });

          const { id } = contactsData;

          await phoneFactory.deleteOne(phone_id, id).catch((error) => {
            throw error;
          });

          let phoneData = await phoneFactory.findAll(id).catch((error) => {
            throw error;
          });

          return response
            .status(200)
            .json({ contact: contactsData, phones: phoneData });
        }
      }
    } catch (error) {
      return response.status(400).json(error.toString());
    }
  },
);

router.put('/contact', async (request: Request, response: Response) => {
  try {
    const { id, firstName, lastName, newEmail, newfirstName, newLastName } =
      request.body;

    const body = {
      id: id ? id : null,
      first_name: firstName ? firstName : null,
      last_name: lastName ? lastName : null,
    };

    const updateBody = {
      id: id,
      first_name: newfirstName,
      last_name: newLastName,
      email: newEmail,
      deleted: 0,
    };

    if (id) {
      let contactData = await contactFactory
        .FindOneById(body.id)
        .catch((error) => {
          throw error;
        });

      if (contactData) {
        const { id } = contactData;

        updateBody.id = id;

        await contactController.update(id, updateBody).catch((error) => {
          throw error;
        });

        let updatedContact = await contactController
          .findOneById(id)
          .catch((error) => {
            throw error;
          });

        const phoneData = await phoneFactory.findAll(id).catch((error) => {
          throw error;
        });

        console.log(updatedContact);

        return response
          .status(200)
          .json({ contact: updatedContact, Phones: phoneData });
      }
    }

    if (firstName && lastName) {
      let contactData = await contactFactory
        .FindOneByName(`${body.first_name} ${body.last_name}`)
        .catch((error) => {
          throw error;
        });

      if (contactData) {
        const { id } = contactData;

        updateBody.id = id;

        await contactController.update(id, updateBody).catch((error) => {
          throw error;
        });

        let updatedContact = await contactController
          .findOneById(id)
          .catch((error) => {
            throw error;
          });

        const phoneData = await phoneFactory.findAll(id).catch((error) => {
          throw error;
        });
        console.log(updatedContact);
        return response
          .status(200)
          .json({ contact: updatedContact, Phones: phoneData });
      }
    }
  } catch (error) {
    return response.status(400).json(error.toString());
  }
});
router.put('/contact/phone', async (request: Request, response: Response) => {
  try {
    const { id, firstName, lastName, phone, phone_id } = request.body;

    const body = {
      id: id ? id : null,
      first_name: firstName ? firstName : null,
      last_name: lastName ? lastName : null,
      phone: phone ? phone : null,
      phone_id: phone_id ? phone_id : null,
    };

    if (id) {
      let contactData = await contactFactory
        .FindOneById(body.id)
        .catch((error) => {
          throw error;
        });

      if (contactData) {
        const { id } = contactData;
        let phoneData = await phoneFactory.findAll(id).catch((error) => {
          throw error;
        });

        if (phoneData) {
          await phoneFactory.update(body.phone_id, {
            id: phone_id,
            number: body.phone,
            contact_id: id,
          });
        }
        phoneData = await phoneFactory.findAll(id).catch((error) => {
          throw error;
        });
        return response
          .status(200)
          .json({ contact: contactData, phones: phoneData });
      }
    }

    if (firstName && lastName) {
      let contactData = await contactFactory
        .FindOneByName(`${body.first_name} ${body.last_name}`)
        .catch((error) => {
          throw error;
        });

      if (contactData) {
        const { id } = contactData;
        let phoneData = await phoneFactory.findAll(id).catch((error) => {
          throw error;
        });

        if (phoneData) {
          await phoneFactory.update(body.phone_id, {
            id: phone_id,
            number: body.phone,
            contact_id: id,
          });

          return;
        }
        const phoneUpdated = await phoneFactory.findAll(id);
        return response
          .status(200)
          .json({ contact: contactData, phones: phoneUpdated });
      }
    }
  } catch (error) {
    return response.status(400).json(error.toString());
  }
});

router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument));

export default router;
