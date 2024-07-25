import { Router } from 'express';

import { SpaceModel as Space } from '.';

const router = Router();

// Create a new space
router.post('/', async (req, res) => {
  try {
    const space = new Space(req.body);
    const savedSpace = await space.save();
    res.status(201).json(savedSpace);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
});

// Read a single space
router.get('/:id', async (req, res) => {
  try {
    const space = await Space.findById(req.params.id);
    if (!space) return res.status(404).json({ message: 'Space not found' });
    res.json(space);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

// Update a space
router.put('/:id', async (req, res) => {
  try {
    const space = await Space.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!space) return res.status(404).json({ message: 'Space not found' });
    res.json(space);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a space
router.delete('/:id', async (req, res) => {
  try {
    const space = await Space.findByIdAndDelete(req.params.id);
    if (!space) return res.status(404).json({ message: 'Space not found' });
    res.json({ message: 'Space deleted' });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
