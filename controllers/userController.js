const User = require("../models/user");

exports.updateMe = async (re, res, next) => {
  const { user } = req;

  const filteredBody = filterObj(
    req.body,
    "firstName",
    "lastName",
    "about",
    "avatar"
  );

  const updated_user = await User.findByIdAndUpdate(user._id, {
new:true,
validateModifiedOnly: true,
  });
  res.status(200).json({
    status: "success",
    data: updated_user,
    message: "Profile updated successfully!",
  });










};
