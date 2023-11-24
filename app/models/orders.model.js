module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      order_id: String,
      item_name: String,
      cost: Number,
      order_date: Date,
      delivery_date: Date,
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Order = mongoose.model("order", schema);
  return Order;
};
