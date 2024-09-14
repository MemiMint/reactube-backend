import { ReactubeServer } from "./app";
import "reflect-metadata";

const server: ReactubeServer = new ReactubeServer();

try {
  server.start();
} catch (error){
  console.error(error);
  process.exit(1);
}