import { Request, Response } from "express";
import { ContentModel, LinkModel, UserModel } from "../models/db";
import { random } from "../lib/random";


// Route 3: Add Content
export const addContent = async (req: Request, res: Response) => {
  try {
    const link = req.body.link;
    const type = req.body.type;
    const description= req.body.description;
    const title = req.body.title;

    const content = await ContentModel.create({
      title,
      link,
      type,
      description,
      // @ts-ignore
      userId: req.userId,
      tags: [],
    });

    res.json({ message: "Content Added" });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

// Route 4: Get User Content
export const getUserContent = async (req: Request, res: Response): Promise<void> => {
  try {
    // @ts-ignore
    const userId = req.userId;

    if (!userId) {
      res.status(401).json({ error: "Unauthorized: No user ID found" });
    }

    const content = await ContentModel.find({ userId }).populate("userId", "username");

    res.json({ content });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};



// Route 5: Delete User Content
export const deleteUserContent = async (req: Request, res: Response) => {
  try {
    const contentId = req.body.Id;
    // @ts-ignore
    const userId = req.userId;
    await ContentModel.deleteOne({
      _id: contentId,
      userId,
    });
    

    res.json({ message: "deleted content " });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

// Route 6: Share Content Link
export const shareContentLink = async ( req: Request, res: Response) => {
  const { share } = req.body;

  if (share) {
    const existingLink = await LinkModel.findOne({
    // @ts-ignore    
    userId: req.userId,
    });

    if (existingLink) {
        res.json({ hash: existingLink.hash });
        return;
    }

    const hash = random(10);

    await LinkModel.create({
    // @ts-ignore
        userId: req.userId,
        hash,
    });

    res.json({ hash });
  } else {
    // @ts-ignore
    await LinkModel.deleteOne({ userId: req.userId });
    res.json({ message: "Removed link" });
  }
};

// Route 7: Get Shared Content
export const getSharedContent = async (req: Request, res: Response) => {
  const hash = req.params.shareLink;

  const link = await LinkModel.findOne({ hash });
  if (!link) {
    res.status(404).json({ message: "Invalid share link" });
    return;
  }

  const content = await ContentModel.find({
    userId: link.userId,
  });

  const user = await UserModel.findOne({
    _id: link.userId,
  });

  if (!user) {
    res.status(404).json({ message: "User not found" });
    return;
  }

  res.json({
    username: user.username,
    content,
  });
};

