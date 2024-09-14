import express, { Application, Request, Response, NextFunction } from "express";
import morgan from "morgan";

const FILE_FOLDER: string = "public"

export class ServerMiddlewares {
    private app: Application;

    /**
     * Initializes a new instance of the ServerMiddlewares class.
     * The constructor method will set up the Express server.
     * @param app The Express application instance.
     */
    constructor(app: Application) {
        this.app = app;
    }

    /**
     * Logs the value of the NODE_ENV environment variable to the console.
     * If the variable is not defined, it logs an error message.
     * This middleware is used to check if the NODE_ENV environment variable
     * is set before serving the application.
     * @param req The Express request object.
     * @param res The Express response object.
     * @param next The Express next function.
     */
    private getNodeEnvironment(req: Request, res: Response, next: NextFunction) {
        if (!process.env.NODE_ENV) {
            console.error("NODE_ENV is not defined");
        }

        console.log(process.env.NODE_ENV);

        return next();
    }

    /**
     * Initializes all the middlewares for the Express server.
     * This method will set up the Express server to serve
     * static files from the public folder, set up Morgan
     * to log HTTP requests, and set up the Express
     * server to parse URL encoded and JSON data.
     * The last middleware will log the value of the
     * NODE_ENV environment variable.
     */
    public InitializeMiddlwares() {
        this.app.use(express.static(FILE_FOLDER));
        this.app.use(morgan(process.env.NODE_ENV === "development" ? "dev" : "combined"));
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(express.json());
        this.app.use(this.getNodeEnvironment);
    }
}