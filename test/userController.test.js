const request = require('supertest');
const app = require('../app');
const { sequelize, User } = require('../models');

describe('User Controller', () => {
  beforeAll(async () => {
    await sequelize.sync({ force: true });
  });

  afterAll(async () => {
    await sequelize.close();
  });

  describe('POST /api/users', () => {
    it('should create a new user', async () => {
      const response = await request(app)
        .post('/api/users')
        .send({
          name: 'John Doe',
          email: 'johndoe@example.com',
          password: 'password',
        })
        .expect(201);

      expect(response.body.name).toBe('John Doe');
      expect(response.body.email).toBe('johndoe@example.com');

      const user = await User.findOne({
        where: {
          email: 'johndoe@example.com',
        },
      });
      expect(user.name).toBe('John Doe');
      expect(user.password).not.toBe('password');
    });

    it('should return 400 if email is already taken', async () => {
      await User.create({
        name: 'Jane Doe',
        email: 'janedoe@example.com',
        password: 'password',
      });

      const response = await request(app)
        .post('/api/users')
        .send({
          name: 'John Doe',
          email: 'janedoe@example.com',
          password: 'password',
        })
        .expect(400);

      expect(response.body.message).toBe('Email already taken');
    });

    it('should return 400 if name is not provided', async () => {
      const response = await request(app)
        .post('/api/users')
        .send({
          email: 'johndoe@example.com',
          password: 'password',
        })
        .expect(400);

      expect(response.body.message).toBe('Name is required');
    });

    it('should return 400 if email is not provided', async () => {
      const response = await request(app)
        .post('/api/users')
        .send({
          name: 'John Doe',
          password: 'password',
        })
        .expect(400);

      expect(response.body.message).toBe('Email is required');
    });

    it('should return 400 if password is not provided', async () => {
      const response = await request(app)
        .post('/api/users')
        .send({
          name: 'John Doe',
          email: 'johndoe@example.com',
        })
        .expect(400);

      expect(response.body.message).toBe('Password is required');
    });
  });
});
