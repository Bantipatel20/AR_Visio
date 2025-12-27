const express = require('express');
const router = express.Router();

const {
  getAllObjects,
  getObjectById,
  createObject,
  updateObject,
  deleteObject,
} = require('../controllers/objectController');

const { protect, admin } = require('../middleware/authMiddleware');
const adminMiddleware = require('../middleware/adminMiddleware');

// Public routes
router.get('/', getAllObjects);
router.get('/:id', getObjectById);

// Admin-only routes
router.post('/', protect, adminMiddleware, createObject);
router.put('/:id', protect, adminMiddleware, updateObject);
router.delete('/:id', protect, adminMiddleware, deleteObject);

module.exports = router;
