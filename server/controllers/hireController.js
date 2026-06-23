import HireRequest from '../models/HireRequest.js'
import sendEmail from "../utils/sendEmail.js"

export const createHireRequest = async (req, res) => {
  try {
    const { name, email, subject, projectType, budget, timeline, message } = req.body;

    if (!name || !email || !subject || !projectType || !message) {
      return res.status(400).json({
        success: false,
        message: "Name, email, subject, project type and message are required.",
      });
    }

    const hireRequest = await HireRequest.create({
      name, email, subject, projectType, budget, timeline, message,
    });

    try {
      await sendEmail({
        to: process.env.ADMIN_EMAIL,
        subject: `New Hire Request: ${subject}`,
        text: `
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        Project Type: ${projectType}
        Budget: ${budget || "Not specified"}
        Timeline: ${timeline || "Not specified"}
        Message: ${message}
        `,
      });
    } catch (emailErr) {
      console.error("Email notification failed:", emailErr.message);
    }

    res.status(201).json({
      success: true,
      message: "Hire request submitted successfully.",
      data: hireRequest,
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).json({
        success: false,
        message: "A hire request with this email already exists.",
      });
    }
    console.error("Error creating hire request:", error.message);
    res.status(500).json({
      success: false,
      message: "Server error. Please try again later.",
    });
  }
};

export const getAllHireRequests = async (req,res) => {
  try{
    const hireRequests = await HireRequest.find().sort({
      createdAt:-1
    });

    res.status(200).json({
      success:true,
      count:hireRequests.length,
      data:hireRequests,
    });

  }catch(error){
     console.error("Error fetching hire requests:", error.message);
    res.status(500).json({
      success: false,
      message: "Server error. Please try again later.",
    });
  }
};

export const getHireRequestById = async (req,res) => {
  try{
    const hireRequest = await HireRequest.findById(req.params.id);

    if(!hireRequest){
      return res.status(404).json({
        success:false,
        message:"Hire request not found.",
      });
    }

    res.status(200).json({
      success:true,
      data:hireRequest,
    })
  }catch(error){
    console.error("Error fetching hire request:", error.message);
    res.status(500).json({
      success: false,
      message: "Server error. Please try again later.",
    });
  }
};

export const deleteHireRequest = async (req,res) => {
  try{
    const hireRequest = await HireRequest.findByIdAndDelete(req.params.id);

    if(!hireRequest){
      return res.status(404).json({
        success:false,
        message:"Hire request not found",
      });
    }

    res.status(200).json({
      success:true,
      message:"Hire request deleted successfully.",
    });
  }catch(error){
    console.error("Error deleting hire request:", error.message);
    res.status(500).json({
      success: false,
      message: "Server error. Please try again later.",
    });
  }
};