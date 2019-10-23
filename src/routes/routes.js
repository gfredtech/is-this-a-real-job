import {
  validateSigninFormData, validUser, validateInvite
} from '../middlewares/middlewares';
import {
  signin
} from '../controllers/authController';
import { upvoteInvite } from '../controllers/upvoteController';

export const initRoutes = app => {
  app.get('/', (req, res) => res.status(200).json({ message: 'Welcome' }));
  app.get('/post',(req, res) => res.render('userPost'));

  app.post('/api/v1/auth/signin', validateSigninFormData, validUser, signin);


  app.patch('/api/v1/invites/upvote/:inviteId', validateInvite, upvoteInvite);


  app.all('*', (req, res) => res.status(404).json({ message: 'Not Found' }));
};
