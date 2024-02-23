import { Cookies } from "react-cookie";

class CookieHelper {
  private cookies: Cookies = new Cookies();

  getCookie = (name: string): string => {
    return this.cookies.get(name);
  };

  setCookie = (name: string, value: string, path: string = "/"): void => {
    this.cookies.set(name, value, { path });
  };

  removeCookie = (name: string, path: string = "/"): void => {
    this.cookies.remove(name, { path });
  };

  clearCookies = (): void => {
    const savedCookies = this.cookies.getAll();

    Object.keys(savedCookies).map((key: string) => {
      if (key) {
        this.removeCookie(key);
      }
    });
  };
}

export const cookieHelper = new CookieHelper();
