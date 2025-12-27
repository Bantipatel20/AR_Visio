const ObjectModel = require('../models/Object');

// GET all objects
exports.getAllObjects = async (req, res) => {
  try {
    const objects = await ObjectModel.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      count: objects.length,
      data: objects,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch objects',
      error: error.message,
    });
  }
};

// GET single object by ID
exports.getObjectById = async (req, res) => {
  try {
    const object = await ObjectModel.findById(req.params.id);
    if (!object) {
      return res.status(404).json({
        success: false,
        message: 'Object not found',
      });
    }
    res.status(200).json({
      success: true,
      data: object,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch object',
      error: error.message,
    });
  }
};

// ADD new object (Admin only)
exports.createObject = async (req, res) => {
  try {
    const { name, modelUrl, thumbnail, defaultScale, category } = req.body;

    // Validation
    if (!name || !modelUrl) {
      return res.status(400).json({
        success: false,
        message: 'Name and modelUrl are required',
      });
    }

    const newObject = new ObjectModel({
      name,
      modelUrl,
      thumbnail,
      defaultScale,
      category,
    });

    await newObject.save();
    res.status(201).json({
      success: true,
      message: 'Object added successfully',
      data: newObject,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to add object',
      error: error.message,
    });
  }
};

// UPDATE object (Admin only)
exports.updateObject = async (req, res) => {
  try {
    const { name, modelUrl, thumbnail, defaultScale, category } = req.body;

    const updatedObject = await ObjectModel.findByIdAndUpdate(
      req.params.id,
      {
        name,
        modelUrl,
        thumbnail,
        defaultScale,
        category,
      },
      { new: true, runValidators: true }
    );

    if (!updatedObject) {
      return res.status(404).json({
        success: false,
        message: 'Object not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Object updated successfully',
      data: updatedObject,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to update object',
      error: error.message,
    });
  }
};

// DELETE object (Admin only)
exports.deleteObject = async (req, res) => {
  try {
    const deletedObject = await ObjectModel.findByIdAndDelete(req.params.id);

    if (!deletedObject) {
      return res.status(404).json({
        success: false,
        message: 'Object not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Object deleted successfully',
      data: deletedObject,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to delete object',
      error: error.message,
    });
  }
};
