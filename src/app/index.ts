import express, { Application } from "express";
import { ServerMiddlewares } from "../middleware";
import { ServerSettings } from "../settings";
import { ApolloService } from "../apollo";
import "reflect-metadata";

export class ReactubeServer {
  private app: Application;
  private middlewares: ServerMiddlewares;
  private settings: ServerSettings;
  private apolloServer: ApolloService;

  /**
   * Initializes a new instance of the ReactubeServer class.
   * The constructor method will set up the Express server,
   * initialize the ServerMiddlewares and ServerSettings,
   * and call their respective InitializeMiddlwares and InitializeSettings method.
   */
  constructor() {
    this.app = express();
    this.middlewares = new ServerMiddlewares(this.app);
    this.settings = new ServerSettings(this.app);
    this.apolloServer = new ApolloService(this.app);

    this.settings.InitializeSettings();
    this.middlewares.InitializeMiddlwares();
    this.apolloServer.startApolloServer();
  }

  /**
   * Starts the server.
   * @remarks This method starts the server and sets the port.
   * It will log a message to the console when the server is running.
   */
  public start() {
    this.app.listen(this.app.get("port"), () =>
      console.log(`Server is running on port ${this.app.get("port")}`)
    );
  }
}
