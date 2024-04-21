import { TFilter } from "../../components/ConteinerFilter";

export type TQuestion = {
  question: string;
  skill: string;
  languege: string;
  answer: string;
  id: number;
};

export type TUser = {
  user_name: string;
  user_pass: string;
  user_skill: string;
  isadmin: boolean;
  id?: number;
};

export class UserApi {
  async fetchAdd<Type>(): Promise<Type> {
    const url = "http://localhost:3000/users";
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

  async authUser(name: string, password: string) {
    const users = await this.fetchAdd<TUser[]>();

    const resultUser = users.filter((user) => {
      if (!users.length) return null;
      
      if (
        user.user_name.toLowerCase() === name.toLowerCase() &&
        user.user_pass.toLowerCase() === password.toLowerCase()
      ) {
        return user;
      } else {
        return null;
      }
    });

    return resultUser;
  }

  async setUser(name: string, pass: string, skill: string) {
    const response = await fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_name: name,
        user_pass: pass,
        user_skill: skill,
      }),
    });
    console.log(response.status);
  }
}

export class QuestionsApi {
  async sortQuestions(skill: TFilter["skill"]) {
    const data = await this.fetchFilterAdd<TQuestion[]>(skill);
    return data;
  }

  async setQuestion(question: string, language: string, skill: string, answer: string, id_user: number, id: number) {
    await fetch("http://localhost:3000/answers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id_question: id,
        question: question,
        language: language,
        skill: skill,
        answer: answer,
        id_user: id_user,
      }),
    });
  }

  async delQuestion(id: number) {
    await fetch(`http://localhost:3000/answers/${id}`, {
      method: "DELETE",
    });
  }

  async fetchAdd<Type>(): Promise<Type> {
    const url = `http://localhost:3000/answers`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

  async fetchFilterAdd<Type>(skill: TFilter["skill"]): Promise<Type> {
    const url = `http://localhost:3000/answers/filter?skill=${skill}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
}
