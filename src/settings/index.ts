import { Application } from "express";
import dotenv from "dotenv";

dotenv.config();

export class ServerSettings {
    private app: Application

    /**
     * Initializes a new instance of the ServerSettings class.
     * The constructor method will set up the Express server settings.
     * @param app The Express application instance.
     */
    constructor(app: Application) {
        this.app = app;
    }

    /**
     * Initializes the Express application settings.
     * The method sets the server port to the value of the PORT environment variable, or 3000 if it is not set.
     */
    public InitializeSettings() {
        this.app.set("port", process.env.PORT || 3000);
    }
}