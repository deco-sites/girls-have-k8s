import { AppContext } from "../apps/site.ts";

export type Props = {
  email: string;
};

const isEmailValid = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const fetchData = async (
  url: string,
  method: string,
  _ctx: AppContext,
  body?: object,
) => {
  // const airtableToken = Deno.env.get("AIRTABLE_KEY");

  const headers = {
    Authorization:
      `Bearer patpBp0crerHK2Dbg.c932367249c58f80670e93705c3d22c360be2ed17fff495d274cf9a04bf2896c`,
    "Content-Type": "application/json",
  };

  const options: RequestInit = {
    method,
    headers,
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  const response = await fetch(url, options);

  return response.json();
};

// TODO: Implement rate-limiter or captcha
export default async (props: Props, _req: Request, ctx: AppContext) => {
  try {
    const email = props.email.toLowerCase().trim();
    console.log("email", email);
    if (!isEmailValid(email)) {
      return {
        ok: false,
        message: "Invalid input",
      };
    }

    // Lista de convidados: viwhOXwNV31YMr6ss
    // Confirmados: viwjTprU7jnuNvjNV
    // https://airtable.com/developers/web/api/list-records

    const guestsUrl =
      `https://api.airtable.com/v0/app7UiL1g325d5X3D/tbl9xeLDqtKlskQ8S`;

    const getGuests = await fetchData(guestsUrl, "GET", ctx, undefined);

    console.log("getGuests", getGuests);

    return {
      ok: true,
      status: "waiting-list",
    };
  } catch (error) {
    // TODO: How to log to Hyperdx?
    console.error("error", error);

    return {
      ok: false,
      status: "error",
    };
  }
};
