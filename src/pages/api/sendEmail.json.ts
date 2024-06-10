import type { APIRoute } from "astro"
import { Resend } from "resend"

const resend = new Resend(import.meta.env.RESEND_API_KEY)

export const GET: APIRoute = async ({params, request}) => {

    const send = await resend.emails.send({
      from: "marlonmogollon13@gmail.com",
      to: "marlonmogollon13@gmail.com",
      subject: "Mail Sample",
      html: "<strong>Neutro Shorty - Trap Money</strong>",
      text: "Hi bitch!!!",
    })

    if (send.data) {
      return new Response(
        JSON.stringify({
          message: send.data,
        }),
        {
          status: 200,
          statusText: "Ok",
        }
      )
    } else {
      return new Response(
        JSON.stringify({
          message: send.error,
        }),
        {
          status: 500,
          statusText: "Internal Server Error",
        }
      )
    }
  }