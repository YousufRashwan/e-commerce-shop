// For server-side email sending (future use case)

// import { NextResponse } from "next/server";

// export async function POST(request: Request) {
//   try {
//     const orderData = await request.json();

//     // Send the email using EmailJS REST API
//     const emailResponse = await sendEmail(orderData);

//     console.log("emailResponse: ", emailResponse);

//     // Check the responese from EmailJS
//     if (emailResponse.status === 200) {
//       return NextResponse.json({
//         success: true,
//         message: "Order sent successfully!",
//       });
//     } else {
//       return NextResponse.json({
//         success: false,
//         message: "Failed to send order.",
//       });
//     }
//   } catch (error) {
//     console.error("EmailJS error:", error);
//     return NextResponse.json({
//       success: false,
//       message: "Failed to send order.",
//     });
//   }
// }

// async function sendEmail(orderData: any) {
//   const serviceID = process.env.EMAILJS_SERVICE_ID;
//   const templateID = process.env.EMAILJS_TEMPLATE_ID;
//   const userID = process.env.EMAILJS_USER_ID;

//   const data = {
//     service_id: serviceID,
//     template_id: templateID,
//     user_id: userID,
//     template_params: {
//       name: orderData.name,
//       email: orderData.email,
//       phoneNumber: orderData.phoneNumber,
//       productName: orderData.productName,
//       productPrice: orderData.productPrice,
//     },
//   };

//   console.log("DATA: ", data);

//   const emailResponse = await fetch(
//     "https://api.emailjs.com/api/v1.0/email/send",
//     {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//     }
//   );

//   return emailResponse;
// }
