import { NextResponse } from "next/server";
import emailjs from "emailjs-com";

export async function POST(request: Request) {
  try {
    const { orderData } = await request.json();
    const emailResponse = await sendEmail(orderData);

    return NextResponse.json({
      success: true,
      message: "Order sent successfully!",
    });
  } catch (error) {
    console.error("EmailJS error:", error);
    return NextResponse.json({
      success: false,
      message: "Failed to send order.",
    });
  }
}

async function sendEmail(orderData: any) {
  const serviceID = process.env.EMAILJS_SERVICE_ID;
  const templateID = process.env.EMAILJS_TEMPLATE_ID;
  const userID = process.env.EMAILJS_USER_ID;

  const data = {
    name: orderData.name,
    email: orderData.email,
    phoneNumber: orderData.phoneNumber,
    productName: orderData.productName,
    productPrice: orderData.productPrice,
  };

  const emailResponse = await emailjs.send(
    serviceID!,
    templateID!,
    data,
    userID!
  );
  return emailResponse;
}
