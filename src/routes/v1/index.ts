import express, { Request, Response } from 'express';

const router = express.Router();

const currentDate: Date = new Date();

router.get('/ping', (_: Request, res: Response)=>{
  // const data = req.params;
  res.status(200).json({
    sucess: true,
    data: "",
    message: `Health API is working ${currentDate}`
  })
})

export default router;