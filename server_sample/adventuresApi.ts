import express, { Request, Response, NextFunction } from "express";
import mongoose, { ConnectOptions, Document, Schema } from "mongoose";
import cors from "cors";
import * as dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI!, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: "adventure-journal",
} as ConnectOptions);

interface ErrorLog extends Document {
  message: string;
  stack: string;
  date: Date;
}

const errorLogSchema = new Schema({
  message: String,
  stack: String,
  date: { type: Date, default: Date.now },
});

const ErrorLogModel = mongoose.model<ErrorLog>("ErrorLog", errorLogSchema);

// Logging middleware
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  const errorLog = new ErrorLogModel({
    message: err.message,
    stack: err.stack || "",
  });

  errorLog
    .save()
    .then(() => {
      if (res.headersSent) {
        return next(err);
      }
      console.error("Error:", err);

      if (err instanceof mongoose.Error.DocumentNotFoundError) {
        return res.status(404).json({ error: "Adventure not found" });
      } else if (err instanceof mongoose.Error.CastError) {
        return res.status(400).json({ error: "Invalid ID format" });
      } else {
        res.status(500).json({ error: "Internal Server Error" });
      }
    })
    .catch((saveError) => {
      console.error("Error saving error log to MongoDB:", saveError);
      next(err);
    });
});

interface Adventure extends Document {
  name: string;
  location: string;
  description: string;
}

const adventureSchema = new mongoose.Schema({
  name: String,
  location: String,
  description: String,
});

const Adventure = mongoose.model<Adventure>("adventures", adventureSchema);

// Routes for Adventures
app.get(
  "/api/adventures",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const adventures = await Adventure.find();
      res.json(adventures);
    } catch (error) {
      next(error);
    }
  }
);

app.get(
  "/api/adventures/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const adventure = await Adventure.findById(id);
      if (!adventure) {
        return res.status(404).json({ error: "Adventure not found" });
      }
      res.json(adventure);
    } catch (error) {
      next(error);
    }
  }
);

app.post(
  "/api/adventures",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { name, location } = req.body;
      const newAdventure = new Adventure({ name, location });
      await newAdventure.save();
      res.status(201).json(newAdventure);
    } catch (error) {
      next(error);
    }
  }
);

app.put(
  "/api/adventures/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const { name, location } = req.body;
      const updatedAdventure = await Adventure.findByIdAndUpdate(
        id,
        { name, location },
        { new: true }
      );
      if (!updatedAdventure) {
        return res.status(404).json({ error: "Adventure not found" });
      }
      res.json(updatedAdventure);
    } catch (error) {
      next(error);
    }
  }
);

app.delete(
  "/api/adventures/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const deletedAdventure = await Adventure.findByIdAndDelete(id);
      if (!deletedAdventure) {
        return res.status(404).json({ error: "Adventure not found" });
      }
      res.status(204).send();
    } catch (error) {
      next(error);
    }
  }
);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
