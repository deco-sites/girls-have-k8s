import { AppContext } from "../apps/site.ts";

export type Props = {
  email: string;
  isSpeaker: boolean;
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
  const airtableToken = Deno.env.get("AIRTABLE_TOKEN");

  const headers = {
    Authorization: `Bearer ${airtableToken}`,
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

    if (!isEmailValid(email)) {
      return {
        ok: false,
        status: "invalid-email",
      };
    }

    // https://airtable.com/developers/web/api/list-records
    const guestsUrl =
      `https://api.airtable.com/v0/app7UiL1g325d5X3D/tbl9xeLDqtKlskQ8S`;

    const data = await fetchData(guestsUrl, "POST", ctx, {
      "records": [
        {
          "fields": {
            "Attendee (email)": email,
            "Save your spot / I wanna speak": props.isSpeaker
              ? "True"
              : "False",
          },
        },
      ],
    });

    console.log("data", data);
    if (data?.error) {
      return {
        ok: false,
        status: data.error?.message,
      };
    }

    return {
      ok: true,
      status: "success",
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
