import { ClientsRepositoryInMemory } from '../../in-memory/ClientsRepositoryInMemory';
import { CreateClientUseCase } from './CreateClientUseCase';

let createClientUseCase: CreateClientUseCase;
let clientsRepositoryInMemory: ClientsRepositoryInMemory;

describe('Create Client', () => {
  beforeEach(() => {
    clientsRepositoryInMemory = new ClientsRepositoryInMemory();
    createClientUseCase = new CreateClientUseCase(
      clientsRepositoryInMemory
    );
  });

  it('Should be able to create a new client', async () => {
    const client = {
      username: 'junior',
      password: '1234',
    };

    await createClientUseCase.execute({
      username: client.username,
      password: client.password,
    });

    const clientCreated =
      await clientsRepositoryInMemory.findByUsername(client.username);

    expect(clientCreated).toHaveProperty('id');
  });

  it('Should not be able to create a new client with name exist', async () => {
    expect(async () => {
      const client = {
        username: 'junior',
        password: '1234',
      };

      await createClientUseCase.execute({
        username: client.username,
        password: client.password,
      });

      await createClientUseCase.execute({
        username: client.username,
        password: client.password,
      });
    }).rejects.toBeInstanceOf(Error);
  });
});
