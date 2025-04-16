import { Ref, ref } from "vue";

export default class AuthServices {
  private jwt: Ref<string>;
  private error: Ref<string>;
  constructor() {
    this.jwt = ref("");
    this.error = ref("");
  }

  getJwt(): Ref<string>{
    return this.jwt;
  }
  getError(): Ref<string>{
    return this.error;
  }
  async login(email: string, pass: string): Promise<boolean> {
    try {
      const url = "";
      const res = await fetch(url, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email, password: pass }),
      });
      const response = await res.json();

      if ("errors" in response) {
        this.error.value = "Login Fail";
        return false;
      }

      this.jwt.value = response.data.access_token;
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}
