import { stripe } from "@/lib/stripe";
import Stripe from "stripe";
import { checkoutSessionCompleted } from "./checkout-session-completed";
import { customerCreated } from "./customer-created";
import { invoicePaid } from "./invoice-paid";

const relevantEvents = new Set([
  "customer.created",
  "checkout.session.completed",
  "invoice.paid",
]);

export const POST = async (req: Request) => {
  const buf = await req.text();
  const sig = req.headers.get("Stripe-Signature");
  const webhookSecret = process.env.STRIPE_APP_WEBHOOK_SECRET;

  if (!sig || !webhookSecret) {
    return new Response("Invalid request", {
      status: 400,
    });
  }

  let event: Stripe.Event;
  try {
    if (!sig || !webhookSecret) return;
    event = stripe.webhooks.constructEvent(buf, sig, webhookSecret);
  } catch (err: any) {
    console.log(`❌ Error message: ${err.message}`);
    return new Response(`Webhook Error: ${err.message}`, {
      status: 400,
    });
  }

  // Ignore unsupported events
  if (!relevantEvents.has(event.type)) {
    return new Response("Unsupported event, skipping...", {
      status: 200,
    });
  }

  let response = "OK";

  switch (event.type) {
    case "customer.created":
      response = await customerCreated(event);
      break;
    case "checkout.session.completed":
      response = await checkoutSessionCompleted(event);
      break;
    case "invoice.paid":
      response = await invoicePaid(event);
      break;
  }

  return new Response(response, {
    status: 200,
  });
};
