import { Router } from 'express';

import { AccountModel as Account } from '.';

const router = Router();

// Create a new account
router.post('/', async (req, res, _) => {
  try {
    const account = new Account(req.body);
    const savedAccount = await account.save();
    res.status(201).json(savedAccount);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
});

// Read a single account
router.get('/:id', async (req, res) => {
  try {
    const account = await Account.findById(req.params.id);
    if (!account) return res.status(404).json({ message: 'Account not found' });
    res.json(account);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

// Update a account
router.put('/:id', async (req, res) => {
  try {
    const account = await Account.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!account) return res.status(404).json({ message: 'Account not found' });
    res.json(account);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a account
router.delete('/:id', async (req, res) => {
  try {
    const account = await Account.findByIdAndDelete(req.params.id);
    if (!account) return res.status(404).json({ message: 'Account not found' });
    res.json({ message: 'Account deleted' });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
