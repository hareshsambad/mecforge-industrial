import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      name,
      company,
      country,
      email,
      phone,
      pistonType,
      modelCode,
      engineMake,
      diameterMm,
      quantity,
      message,
      fileName,
      fileSize,
    } = body;

    // Basic validation
    if (!name || !company || !country || !email || !phone || !quantity) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    // Prepare lead data object
    const leadData = {
      timestamp: new Date().toISOString(),
      name,
      company,
      country,
      email,
      phone,
      pistonType,
      modelCode: modelCode || "N/A",
      engineMake: engineMake || "N/A",
      diameterMm: diameterMm || "N/A",
      quantity,
      message: message || "N/A",
      attachment: fileName ? `${fileName} (${Math.round((fileSize || 0) / 1024)} KB)` : "None",
    };

    console.log("=== NEW B2B PISTON ENQUIRY RECEIVED ===");
    console.log(JSON.stringify(leadData, null, 2));

    // Optional Free-Tier Web3Forms Integration if key exists
    const web3formsAccessKey = process.env.WEB3FORMS_ACCESS_KEY;
    if (web3formsAccessKey) {
      try {
        await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            access_key: web3formsAccessKey,
            subject: `New Piston Enquiry from ${name} (${company}, ${country})`,
            from_name: "MECFORGE Quotation Bot",
            ...leadData,
          }),
        });
      } catch (externalErr) {
        console.warn("External email webhook failed:", externalErr);
      }
    }

    return NextResponse.json({
      success: true,
      message: "Quotation request successfully received.",
      referenceId: `MF-${Date.now().toString().slice(-6)}`,
    });
  } catch (error: any) {
    console.error("Enquiry processing error:", error);
    return NextResponse.json(
      { error: "Internal server error processing enquiry." },
      { status: 500 }
    );
  }
}
