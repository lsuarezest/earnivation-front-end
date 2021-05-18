import { todos } from "./example";

export const mockServer = () => {
  const mocks = [
    todos
  ];
  mocks.forEach((el: any) => el?.());
};

export default mockServer;