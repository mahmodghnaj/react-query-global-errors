import type { NextApiRequest, NextApiResponse } from "next";
type ResponseData = {
  message: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method === "GET") {
    res.status(400).json({ message: "Show Error" });
    return;
  }
}
