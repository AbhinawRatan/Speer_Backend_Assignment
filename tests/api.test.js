const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../server'); // Replace with the correct path to your Express app
const expect = chai.expect;

chai.use(chaiHttp);

describe('Notes API', () => {
    let authToken; // Store the authentication token here
    let noteId; // Store the ID of the created note here

    before((done) => {

        done();
    });

    it('should retrieve all notes', (done) => {
        chai.request(app)
            .get('/api/notes')
            .set('Authorization', `Bearer ${authToken}`)
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('array');
                done();
            });
    });

    it('should create a new note', (done) => {
        chai.request(app)
            .post('/api/notes')
            .set('Authorization', `Bearer ${authToken}`)
            .send({ title: 'Test Note', content: 'This is a test note.' })
            .end((err, res) => {
                expect(res).to.have.status(201);
                expect(res.body).to.have.property('title').to.equal('Test Note');
                noteId = res.body._id; // Store the ID of the created note
                done();
            });
    });

    it('should update an existing note', (done) => {
        chai.request(app)
            .put(`/api/notes/${noteId}`)
            .set('Authorization', `Bearer ${authToken}`)
            .send({ title: 'Updated Test Note', content: 'This is an updated test note.' })
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.have.property('title').to.equal('Updated Test Note');
                done();
            });
    });

    it('should delete an existing note', (done) => {
        chai.request(app)
            .delete(`/api/notes/${noteId}`)
            .set('Authorization', `Bearer ${authToken}`)
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.have.property('message').to.equal('Note deleted successfully');
                done();
            });
    });

    it('should search for notes', (done) => {
        chai.request(app)
            .get('/api/search?q=Test%20Note')
            .set('Authorization', `Bearer ${authToken}`)
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('array');
                expect(res.body[0]).to.have.property('title').to.equal('Updated Test Note'); // Check the updated note
                done();
            });
    });
});

describe('Authentication', () => {
    it('should register a new user', (done) => {
        chai.request(app)
            .post('/api/auth/signup')
            .send({ username: 'testuser', password: 'testpassword' })
            .end((err, res) => {
                expect(res).to.have.status(201);
                done();
            });
    });

    it('should log in an existing user', (done) => {
        chai.request(app)
            .post('/api/auth/login')
            .send({ username: 'testuser', password: 'testpassword' })
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.have.property('token');
                authToken = res.body.token; // Store the token for future requests
                done();
            });
    });

    it('should handle authentication errors', (done) => {
        // Send a request with invalid credentials
        chai.request(app)
            .post('/api/auth/login')
            .send({ username: 'invaliduser', password: 'invalidpassword' })
            .end((err, res) => {
                expect(res).to.have.status(401); // Expect authentication failure status code
                done();
            });
    });
});

// Add more describe blocks and test cases as needed
