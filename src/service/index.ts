import HttpClient from 'src/utilities/http-client';

import { Question } from 'src/models/question';

export class MainApi extends HttpClient {
  private static classInstance?: MainApi;

  private constructor() {
    super('http://localhost:8080/v1');
  }

  public static getInstance() {
    if (!this.classInstance) {
      this.classInstance = new MainApi();
    }

    return this.classInstance;
  }

  public getQuestions = () => this.instance.get<Question[]>('/questions');

  public getQuestion = (id: string) => this.instance.get<Question>(`/questions/${id}`);
}
