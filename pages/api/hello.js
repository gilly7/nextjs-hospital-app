// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  const { doctorId } = req.query;
  if (req.method === "GET") {
    // get all appointments for a doctor for the next 5 days
    const appointments = await getAppointmentsFromDb(doctorId);
    res.status(200).json({ appointments });
    return;
  }
  if (req.method === "POST") {
    const { date, time, email, phone, name } = req.body;
    // save appointment time along with patient details
    await saveAppointmentInDB({ date, time, email, phone, name });
    res.status(201).json({ message: "ok" });
    return;
  }
  res.status(500).json({ message: "Unknown method" });
}
