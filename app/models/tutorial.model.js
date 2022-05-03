module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      name: String,
      email: String,
      phone:Number,
      message:String,
      published: Boolean
    }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Tutorial = mongoose.model("tutorial", schema);
  return Tutorial;
};
