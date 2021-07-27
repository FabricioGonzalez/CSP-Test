/* import connection from './connection';
import MysqlRepository from './DataBase';

describe('Test Suite to Database', () => {
  it('should check connection', async () => {
    await connection.authenticate().then();
  });
  it('should insert data', async () => {
    const db = new MysqlRepository();
    const contact = {
      first_name: 'fabricio',
      last_name: 'gonzalez',
      email: 'fabriciogonzalezfr@gmail.com',
      telefones: ['13996518702', '13996547898'],
    };
    const data = await db.create(contact);

    expect(!!data).toBeTruthy();
  });
  it('should return data', async () => {
    await connection.authenticate().then();
  });
  it('should update data', async () => {
    await connection.authenticate().then();
  });
  it('should delete data', async () => {
    await connection.authenticate().then();
  });
}); */
