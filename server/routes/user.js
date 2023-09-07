/* eslint-disable no-undef */
import { Router } from 'express';
import { SECRET } from "../middleware/auth";
import { User} from "../db";
const router = Router();

  router.post('/signup', async (req, res) => {
    const { email,name, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      res.status(403).json({ message: 'User already exists' });
    } else {
      const newUser = new User({ email, name, password });
      await newUser.save();
      const token = jwt.sign({ email, role: 'user' }, SECRET, { expiresIn: '1h' });
      res.json({ message: 'User created successfully', token });
    }
  });
  
  router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });
    if (user) {
      const token = jwt.sign({ email, role: 'user' }, SECRET, { expiresIn: '1h' });
      res.json({ message: 'Logged in successfully', token });
    } else {
      res.status(403).json({ message: 'Invalid username or password' });
    }
  });
  
  
  
  export default router