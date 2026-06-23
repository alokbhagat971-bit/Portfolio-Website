import express from 'express'
import {
  createHireRequest,
  getAllHireRequests,
  getHireRequestById,
  deleteHireRequest
}
from "../controllers/hireController.js"

const router = express.Router();

router.post('/',createHireRequest);

router.get('/',getAllHireRequests);

router.get('/:id',getHireRequestById);

router.delete('/:id',deleteHireRequest);

export default router;