export type TQuestion = {
  question: string;
  skill: string;
  languege: string;
  answer: string;
  id: number;
};

export type TUser = {
  user_name?: string;
  user_pass?: string;
  user_skill?: string;
  isadmin?: boolean;
  id?: number;
};

export class UserApi {
  async fetchAdd() {
    const url = "http://localhost:3000/users";
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

  async authUser(name: string, password: string) {
    const users: TUser[] = await this.fetchAdd();
    const resultUser = users.filter((user) => {
      if(!users.length) return null;
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
    await fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        pass: pass,
        skill: skill
      }),
    })
    .catch(() => {
      console.log('api>setUser>catch>error');
    });
  }
}

export class QuestionsApi {
  async sortQuestions() {
    const data = await this.fetchAdd();
    
    return data;
  }

  async setQuestion(question = "", language = "", skill = "junior", answer = "") {
    await fetch("http://localhost:3000/answers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        question: question,
        language: language,
        skill: skill,
        answer: answer,
      }),
    });
  }

  async fetchAdd() {
    const url = "http://localhost:3000/answers";
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
}
