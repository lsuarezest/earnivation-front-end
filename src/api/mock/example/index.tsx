import { createServer } from "miragejs";

export const todos = () => {
  createServer({
    routes() {
      this.get("/api/todos", () => {
        return [
          "create project",
          "win earnievation"
        ];
      });
    }
  })
};