import { NextResponse } from "next/server";
import { spawn } from "node:child_process";

const TO = process.env.CONTACT_TO ?? "info@adsocto.com";
const FROM = process.env.CONTACT_FROM ?? "noreply@adsocto.com";

function sendViaSendmail(subject: string, body: string, replyTo: string) {
  return new Promise<void>((resolve, reject) => {
    const child = spawn(
      "sendmail",
      ["-t", "-i"],
      { stdio: ["pipe", "ignore", "pipe"] },
    );

    let stderr = "";
    child.stderr.on("data", (chunk: Buffer) => {
      stderr += chunk.toString();
    });
    child.on("error", reject);
    child.on("close", (code) => {
      if (code === 0) resolve();
      else reject(new Error(stderr || `sendmail exited with ${code}`));
    });

    const message = [
      `To: ${TO}`,
      `From: ${FROM}`,
      `Reply-To: ${replyTo}`,
      `Subject: ${subject}`,
      "Content-Type: text/plain; charset=utf-8",
      "",
      body,
      "",
    ].join("\n");

    child.stdin.write(message);
    child.stdin.end();
  });
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const name = String(data.name ?? "").trim();
    const email = String(data.email ?? "").trim();
    const role = String(data.role ?? "").trim();
    const message = String(data.message ?? "").trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields." },
        { status: 400 },
      );
    }

    const subject = `[AdsOcto Contact] ${name} (${role || "general"})`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Role: ${role || "—"}`,
      "",
      message,
    ].join("\n");

    await sendViaSendmail(subject, body, email);

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("contact mail failed", error);
    return NextResponse.json(
      {
        ok: false,
        error:
          "Could not send email from the server. Check that mail (sendmail/postfix) is configured for adsocto.com.",
      },
      { status: 500 },
    );
  }
}
