const validation = (req, res, next) => {
  const { title, content, category, email } = req.body;
  if (!title) return res.status(404).json({ message: "Missing Title" });
  if (!email) return res.status(404).json({ message: "Missing Email" });
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email))
    return res.status(400).json({ message: "Invalid Email" });
  if (!category) return res.status(400).json({ message: "Missing Category" });
  if (category !== "Math" && category !== "English" && category !== "Biology")
    return res.status(400).json({ message: "Invalid Category" });
  if (!content) return res.status(400).json({ message: "Missing Centent" });
  if (content.length < 500 || content.length > 1000)
    return res
      .status(400)
      .json({ message: "Content must be between 500-1000 letters" });
  next();
};

export default validation;
