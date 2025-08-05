import mongoose from "mongoose"; // ✅ Correct import

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  }
});

export default mongoose.model("Users", userSchema);
 