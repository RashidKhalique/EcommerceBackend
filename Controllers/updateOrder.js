import OrderManagement from "../model/OrderManagementdb.model.js";


const updateOrder = async (req, res) => {
    try {
      const { orderId, DeliveryStatus, DeliveredDate } = req.body;
  
  console.log(req.body)
      // Use findOne instead of findById
      const order = await OrderManagement.findOne({ orderId });
      if (!order) {
        return res.status(404).json({ success: false, message: "Order not found." });
      }
        console.log(order)
      order.DeliveryStatus = DeliveryStatus;
      order.DeliveredDate = DeliveredDate;
  
      const updatedOrder = await order.save(); // Save the updated order
              console.log("update : ",updatedOrder)
      return res.status(200).json({ success: true, message: "Order updated successfully", order: updatedOrder });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ success: false, message: "Failed to update order." });
    }
  };
  

  export default updateOrder;
